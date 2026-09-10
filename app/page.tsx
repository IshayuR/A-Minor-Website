import Image from "next/image";
import { Camera, Music2, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollRevealImage } from "@/components/ScrollRevealImage";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-12">
      <SectionWrapper className="relative isolate overflow-hidden px-4 pb-10 pt-12 md:px-6 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[5fr_7fr]">
          <div>
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-denim-900">Since 2004 • Rooted in AsACC</p>
            <h1 className="mt-4 text-4xl leading-tight text-cocoa-700 md:text-6xl">A Minor</h1>
            <p className="mt-3 text-lg text-denim-900">UConn&apos;s Premiere Gender Inclusive A-Cappella</p>
            <p className="mt-5 max-w-xl text-cocoa-700">ICCA Quarterfinal Champs &apos;17, &apos;22, &apos;24</p>
            <p className="mt-1 max-w-xl text-cocoa-700">ICCA Semifinalists &apos;24 (Runners-Up) and &apos;26</p>
            <p className="mt-4 text-lg font-semibold text-denim-900">Peace, Love, A Minor 🩵</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" ariaLabel="Go to book us form" variant="solid">Book Us!</Button>
              <Button href="/members" ariaLabel="Meet our members" variant="outline">Meet the Voices</Button>
            </div>
          </div>
          <ScrollRevealImage src="/images/general/Cover.jpg" alt="UConn A Minor group cover photo" priority className="h-[420px] md:h-[560px]" />
        </div>
      </SectionWrapper>

      <SectionWrapper className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-3xl border border-denim-100 bg-white/70 px-5 py-4 shadow-soft">
          <a href="https://www.instagram.com/uconnaminor/" target="_blank" rel="noreferrer" aria-label="Visit our Instagram" className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-sky-100">
            <Camera className="h-5 w-5 shrink-0 text-denim-700" aria-hidden="true" />
            <div><p className="text-sm font-semibold text-cocoa-800">Instagram</p><p className="text-xs text-cocoa-700">@uconnaminor</p></div>
          </a>
          <a href="https://www.tiktok.com/@aminoracappella" target="_blank" rel="noreferrer" aria-label="Visit our TikTok" className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-sky-100">
            <Music2 className="h-5 w-5 shrink-0 text-denim-700" aria-hidden="true" />
            <div><p className="text-sm font-semibold text-cocoa-800">TikTok</p><p className="text-xs text-cocoa-700">@aminoracappella</p></div>
          </a>
          <a href="https://www.youtube.com/user/UConnAMinor" target="_blank" rel="noreferrer" aria-label="Visit our YouTube" className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-sky-100">
            <PlayCircle className="h-5 w-5 shrink-0 text-denim-700" aria-hidden="true" />
            <div><p className="text-sm font-semibold text-cocoa-800">YouTube</p><p className="text-xs text-cocoa-700">UConn A Minor</p></div>
          </a>
        </div>
      </SectionWrapper>

      <section className="grid gap-4 px-4 md:grid-cols-2 md:px-6">
        <ScrollRevealImage src="/images/general/photo1.jpg" alt="UConn A Minor performance photo" className="h-72 md:h-[420px]" />
        <ScrollRevealImage src="/images/general/photo2.jpg" alt="UConn A Minor audience and stage photo" className="h-72 md:h-[420px] md:translate-y-8" />
      </section>

      <SectionWrapper className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-sky-100 bg-white/60 p-6 shadow-soft md:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-denim-700">Latest Album</p>
          <h2 className="mt-2 text-4xl text-cocoa-700">Clarity</h2>
          <p className="mt-2 max-w-2xl text-cocoa-700">Stream now!</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <iframe title="Spotify album placeholder" aria-label="Spotify album embed placeholder" className="h-[28rem] w-full rounded-2xl border border-denim-100 bg-sky-50" src="https://open.spotify.com/embed/album/68GvsMix7JYYELvvQgBvbm?utm_source=generator" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
            <iframe title="Apple Music album placeholder" aria-label="Apple Music album embed placeholder" className="h-[28rem] w-full rounded-2xl border border-denim-100 bg-sky-50" src="https://embed.music.apple.com/tt/album/clarity/1840818091" loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *" />
          </div>
        </div>
      </SectionWrapper>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center gap-8 rounded-3xl bg-denim-900 px-6 py-8 text-beige-50 shadow-soft md:px-10 md:py-12">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-widest text-sky-300">Our Story</p>
            <h2 className="mt-2 text-3xl md:text-4xl">More than A Cappella</h2>
            <p className="mt-3 max-w-2xl text-beige-100">Founded in 2004 by members of the Asian American Cultural Center, A Minor has grown into a family of 100+ alumni and current members -- performing everywhere from charity events to ICCA stages.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/about" ariaLabel="Learn more about A Minor" className="bg-sky-100 text-denim-900 hover:bg-sky-300">Learn More</Button>
            </div>
          </div>
          <div className="hidden shrink-0 md:block md:mr-16">
            <Image src="/images/general/logo.jpg" alt="A Minor logo" width={140} height={140} className="rounded-full opacity-90" />
          </div>
        </div>
      </section>
    </div>
  );
}
