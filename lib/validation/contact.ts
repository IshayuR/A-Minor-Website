import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(80, "Name is too long."),
  email: z.string().email("Please enter a valid email address."),
  eventType: z.string().min(3, "Please share what kind of event this is.").max(100, "Event type is too long."),
  message: z.string().min(20, "Please provide more details.").max(1200, "Message is too long.")
});

export type ContactInput = z.infer<typeof contactSchema>;
