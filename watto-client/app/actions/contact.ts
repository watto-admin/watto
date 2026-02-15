"use server";

import { ContactFormSchema } from "@/lib/schemas/contact";
import { createAdminClient } from "@/lib/supabase/server";

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  payload?: Record<string, unknown>;
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

  const validatedFields = ContactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      payload: rawData,
    };
  }

  const data = validatedFields.data;

  // 3. Insert into Supabase
  try {
    const supabase = createAdminClient();

    const insertPayload: Record<string, unknown> = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      topic: data.topic,
      message: data.message,
    };

    const { error } = await supabase
      .from("contact_submissions")
      .insert(insertPayload);

    if (error) {
      console.error("Supabase insertion error:", error);
      return {
        success: false,
        message: "Failed to submit form. Please try again later.",
        payload: rawData,
      };
    }

    return {
      success: true,
      message: "Thank you! We will be in touch shortly.",
      // Clear payload on success
      payload: undefined,
    };
  } catch (error) {
    console.error("Submission unexpected error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      payload: rawData,
    };
  }
}
