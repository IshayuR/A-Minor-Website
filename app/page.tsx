import { Music4, Trophy, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollRevealImage } from "@/components/ScrollRevealImage";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-12">
      <section className="relative isolate overflow-hidden px-4 pb-10 pt-12 md:px-6 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-denim-900">Since 2004 • Rooted in AsACC</p>
            <h1 className="mt-4 text-4xl leading-tight text-cocoa-700 md:text-6xl">A Minor</h1>
            <p className="mt-3 text-lg text-denim-900">UConn&apos;s Premier Gender Inclusive A-Cappella</p>
            <p className="mt-5 max-w-xl text-cocoa-700">ICCA Quarterfinal Champs &apos;17, &apos;22, &apos;24 | 2nd place &apos;24 NE Semifinal</p>
            <p className="mt-4 text-lg font-semibold text-denim-900">Peace, Love, A Minor 🩵</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" ariaLabel="Go to book us form" variant="solid">Book Us!</Button>
              <Button href="/members" ariaLabel="Meet our members" variant="outline">Meet the Voices</Button>
            </div>
          </div>
          <ScrollRevealImage src="/images/general/Cover.jpg" alt="UConn A Minor group cover photo" priority className="h-[420px] md:h-[560px]" />
        </div>
      </section>

      <SectionWrapper className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-4 rounded-3xl border border-denim-100 bg-white/70 p-5 shadow-soft md:grid-cols-3">
          <div className="flex items-start gap-3"><Trophy className="mt-1 h-5 w-5 text-denim-700" aria-hidden="true" /><p className="text-sm text-cocoa-800">ICCA Quarterfinal Champions in 2017, 2022, and 2024</p></div>
          <div className="flex items-start gap-3"><Music4 className="mt-1 h-5 w-5 text-denim-700" aria-hidden="true" /><p className="text-sm text-cocoa-800">Award-winning arrangements and choreography</p></div>
          <div className="flex items-start gap-3"><HeartHandshake className="mt-1 h-5 w-5 text-denim-700" aria-hidden="true" /><p className="text-sm text-cocoa-800">Just a jolly group of pals ykwim!</p></div>
        </div>
      </SectionWrapper>

      <section className="grid gap-4 px-4 md:grid-cols-2 md:px-6">
        <ScrollRevealImage src="/images/general/photo1.jpg" alt="UConn A Minor performance photo" className="h-72 md:h-[420px]" />
        <ScrollRevealImage src="/images/general/photo2.jpg" alt="UConn A Minor audience and stage photo" className="h-72 md:h-[420px] md:translate-y-8" />
      </section>

      <SectionWrapper className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-sky-100 bg-white/30 p-6 shadow-soft backdrop-blur-xl md:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-denim-700">Latest Album</p>
          <h2 className="mt-2 text-4xl text-cocoa-700">Clarity</h2>
          <p className="mt-2 max-w-2xl text-cocoa-700">stream ts deadahh.</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <iframe title="Spotify album placeholder" aria-label="Spotify album embed placeholder" className="h-44 w-full rounded-2xl border border-denim-100 bg-sky-50" src="https://open.spotify.com/embed/album/68GvsMix7JYYELvvQgBvbm?utm_source=generator" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
            <iframe title="Apple Music album placeholder" aria-label="Apple Music album embed placeholder" className="h-44 w-full rounded-2xl border border-denim-100 bg-sky-50" src="https://embed.music.apple.com/tt/album/clarity/1840818091" loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *" />
          </div>
        </div>
      </SectionWrapper>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl bg-denim-900 px-6 py-8 text-beige-50 shadow-soft md:px-10 md:py-12">
          <p className="text-sm uppercase tracking-widest text-sky-300">Let&apos;s collaborate</p>
          <h2 className="mt-2 text-3xl md:text-4xl">Need live music for your event?</h2>
          <p className="mt-3 max-w-2xl text-beige-100">let&apos;s collab gangy! only if you pay us tho.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" ariaLabel="Book us via contact page" className="bg-sky-100 text-denim-900 hover:bg-sky-300">Book Us!</Button>
            <Button href="mailto:bookaminor@uconn.edu" ariaLabel="Email us to book" variant="ghost" className="text-beige-50 hover:bg-denim-700">bookaminor@uconn.edu</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
