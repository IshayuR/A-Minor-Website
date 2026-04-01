import { ScrollRevealImage } from "@/components/ScrollRevealImage";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">About Us</p>
        <h1 className="mt-2 text-4xl text-cocoa-900 md:text-5xl">A Story Rooted in Community</h1>
        <p className="mt-4 max-w-3xl text-cocoa-700">UConn A Minor was founded in 2004 in the Asian American Cultural Center (AsACC), where a small group of students wanted to create a musical space that felt welcoming, expressive, and proudly collaborative. That same energy continues today in every rehearsal, performance, and friendship we build.</p>
      </SectionWrapper>
      <section className="grid gap-5 md:grid-cols-12">
        <div className="md:col-span-7 md:row-span-2"><ScrollRevealImage src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1400&q=80" alt="Group singing together backstage" className="h-80 md:h-full" /></div>
        <div className="md:col-span-5"><ScrollRevealImage src="https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=1200&q=80" alt="Microphones on stage with lights" className="h-64" /></div>
        <div className="md:col-span-5"><ScrollRevealImage src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80" alt="Vocalists rehearsing in harmony" className="h-64" /></div>
      </section>
      <SectionWrapper className="grid gap-6 rounded-3xl border border-denim-100 bg-sky-100/70 p-6 md:grid-cols-2 md:p-8">
        <div><h2 className="text-2xl text-cocoa-900">Our Mission</h2><p className="mt-3 text-cocoa-700">We aim to celebrate vocal artistry while fostering a genuinely gender inclusive environment where every member can grow as a performer and person.</p></div>
        <div><h2 className="text-2xl text-cocoa-900">Our Culture</h2><p className="mt-3 text-cocoa-700">A Minor is equal parts rigor and joy: strong musicianship, thoughtful arrangements, and deep care for each other. We carry our motto into every space we enter: Peace, Love, A Minor.</p></div>
      </SectionWrapper>
    </div>
  );
}
