import { ContactForm } from "@/components/forms/ContactForm";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">Book Us</p>
          <h1 className="mt-2 text-4xl text-cocoa-700 md:text-5xl">Bring A Minor to Your Event</h1>
          <p className="mt-4 text-cocoa-700">
            Tell us your event details and we&apos;ll follow up with availability, repertoire options, and logistics. You can also email us directly at
            <a href="mailto:bookings.aminor@gmail.com" aria-label="Send booking email" className="ml-1 font-semibold text-denim-900 underline decoration-denim-300">bookings.aminor@gmail.com</a>.
          </p>
        </div>
        <ContactForm />
      </SectionWrapper>
    </div>
  );
}
