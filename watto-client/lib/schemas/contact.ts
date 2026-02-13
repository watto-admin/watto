import { z } from 'zod';

export const ContactFormTypeEnum = z.enum(['advertise', 'info', 'buy']);

export const BaseContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  honeypot: z.string().optional(), // Spam protection field (should be empty)
});

export const AdvertiseSchema = BaseContactSchema.extend({
  type: z.literal('advertise'),
  company: z.string().min(1, "Company name is required"),
  budget: z.string().min(1, "Budget selection is required"),
  goals: z.string().min(10, "Please describe your goals in more detail"),
});

export const InfoSchema = BaseContactSchema.extend({
  type: z.literal('info'),
  topic: z.string().min(1, "Topic is required"),
  message: z.string().min(10, "Message is too short"),
});

export const BuySchema = BaseContactSchema.extend({
  type: z.literal('buy'),
  quantity: z.string().min(1, "Quantity is required"),
  shipping_country: z.string().min(2, "Shipping country is required"),
  notes: z.string().optional(),
});

export const ContactSubmissionSchema = z.discriminatedUnion('type', [
  AdvertiseSchema,
  InfoSchema,
  BuySchema,
]);

export type ContactSubmission = z.infer<typeof ContactSubmissionSchema>;
