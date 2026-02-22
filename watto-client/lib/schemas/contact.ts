import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    // Allow letters, spaces, dots, hyphens, and apostrophes (for names like O'Connor)
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),

  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  topic: z.enum(["Print Custom Bottles", "Advertise on Bottles"], {
    error: "Please select a valid option",
  }),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"), // Reasonable limit for a contact form

  honeypot: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type ContactSubmission = z.infer<typeof ContactFormSchema>;
