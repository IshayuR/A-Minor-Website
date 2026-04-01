import { RepertoireCard } from "@/components/RepertoireCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { allTimeFavorites, currentSetlist } from "@/lib/data";

export default function RepertoirePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">Repertoire</p>
        <h1 className="mt-2 text-4xl text-cocoa-900 md:text-5xl">Songs We Love to Sing</h1>
        <p className="mt-4 max-w-3xl text-cocoa-700">From modern indie to timeless classics, our repertoire celebrates dynamic storytelling through vocal harmony.</p>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">Current Setlist</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {currentSetlist.map((song) => (<RepertoireCard key={song.title} songTitle={song.title} originalArtist={song.originalArtist} soloist={song.soloist} arranger={song.arranger} />))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">All-Time Favorites</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {allTimeFavorites.map((song) => (<RepertoireCard key={song.title} songTitle={song.title} originalArtist={song.originalArtist} soloist={song.soloist} arranger={song.arranger} />))}
        </div>
      </SectionWrapper>
    </div>
  );
}
