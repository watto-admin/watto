"use server";

import { ContactSubmissionSchema } from "@/lib/schemas/contact";
import { createAdminClient } from "@/lib/supabase/server";

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  // 1. Spam check (honeypot)
  const honeypot = formData.get("honeypot");
  if (honeypot && honeypot.toString().length > 0) {
    // Silent success for bots
    console.warn("Honeypot filled, ignoring submission.");
    return { success: true, message: "Message sent successfully!" };
  }

  // 2. Parse and Validate
  const rawData = Object.fromEntries(formData.entries());

  // Ensure 'type' is treated as a literal for Zod discriminator
  // FormData values are strings, Zod expects specific string literals.
  const validatedFields = ContactSubmissionSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  // 3. Insert into Supabase
  try {
    const supabase = createAdminClient();

    // Construct the payload based on the type
    let insertPayload: any = {
      submission_type: data.type,
      name: data.name,
      email: data.email,
    };

    if (data.type === "advertise") {
      insertPayload = {
        ...insertPayload,
        company: data.company,
        budget: data.budget,
        goals: data.goals,
      };
    } else if (data.type === "info") {
      insertPayload = {
        ...insertPayload,
        topic: data.topic,
        message: data.message,
      };
    } else if (data.type === "buy") {
      insertPayload = {
        ...insertPayload,
        quantity: data.quantity,
        shipping_country: data.shipping_country,
        notes: data.notes,
      };
    }

    const { error } = await supabase
      .from("contact_submissions")
      .insert(insertPayload);

    if (error) {
      console.error("Supabase insertion error:", error);
      return {
        success: false,
        message: "Failed to submit form. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you! We will be in touch shortly.",
    };
  } catch (error) {
    console.error("Submission unexpected error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
