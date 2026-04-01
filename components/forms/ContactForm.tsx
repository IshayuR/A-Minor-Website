"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [serverMessage, setServerMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactInput) => {
    setServerMessage("");
    setIsError(false);

    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    const data = (await response.json()) as { message?: string; error?: string };

    if (!response.ok) {
      setIsError(true);
      setServerMessage(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    reset();
    setServerMessage(data.message ?? "Thanks! We will get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border border-denim-100 bg-sky-50/80 p-6 shadow-soft backdrop-blur">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-cocoa-900">Name</label>
        <input id="name" type="text" className="w-full rounded-xl border border-denim-200 bg-white/90 px-3 py-2 text-cocoa-900" aria-label="Enter your name" {...register("name")} />
        {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-cocoa-900">Email</label>
        <input id="email" type="email" className="w-full rounded-xl border border-denim-200 bg-white/90 px-3 py-2 text-cocoa-900" aria-label="Enter your email" {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="eventType" className="mb-1 block text-sm font-medium text-cocoa-900">Event Type</label>
        <input id="eventType" type="text" className="w-full rounded-xl border border-denim-200 bg-white/90 px-3 py-2 text-cocoa-900" aria-label="Enter the event type" {...register("eventType")} />
        {errors.eventType && <p className="mt-1 text-xs text-red-700">{errors.eventType.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-cocoa-900">Event Details</label>
        <textarea id="message" rows={5} className="w-full rounded-xl border border-denim-200 bg-white/90 px-3 py-2 text-cocoa-900" aria-label="Enter event details" {...register("message")} />
        {errors.message && <p className="mt-1 text-xs text-red-700">{errors.message.message}</p>}
      </div>
      <Button type="submit" ariaLabel="Submit booking request" className="w-full" variant="solid">{isSubmitting ? "Sending..." : "Send Booking Request"}</Button>
      {serverMessage && <p className={isError ? "text-sm text-red-700" : "text-sm text-denim-900"} role="status" aria-live="polite">{serverMessage}</p>}
    </form>
  );
}
