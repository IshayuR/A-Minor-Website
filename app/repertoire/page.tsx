import { RepertoireCard } from "@/components/RepertoireCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { currentSetlist, set26 } from "@/lib/data";

export default function RepertoirePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">Repertoire</p>
        <h1 className="mt-2 text-4xl text-cocoa-700 md:text-5xl">Our Repertoire</h1>
        <p className="mt-4 max-w-3xl text-cocoa-700">Here&apos;s what we sing!</p>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">Current Rep</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {currentSetlist.map((song) => (
            <RepertoireCard key={song.title} songTitle={song.title} originalArtist={song.originalArtist} soloist={song.soloist} arranger={song.arranger} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-1 text-2xl text-denim-900">The Set &apos;26</h2>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-denim-500">ICCA Quarterfinals Runners-Up · Outstanding Choreography · Outstanding Vocal Percussion · ICCA Semifinalists</p>
        <p className="mb-1 text-sm text-cocoa-700">
          <span className="font-semibold">Arranged by</span> Brooklyn Boehme, Sarina Barnes, Ben Angus
        </p>
        <p className="mb-5 text-sm text-cocoa-700">
          <span className="font-semibold">Choreographed by</span> Ishayu Ray, Aiden Geiver, Shaun Ostheimer
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {set26.map((song) => (
            <RepertoireCard key={song.title} songTitle={song.title} originalArtist={song.originalArtist} soloist={song.soloist} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
