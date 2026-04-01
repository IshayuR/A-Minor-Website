import { SectionWrapper } from "@/components/SectionWrapper";
import { alumniByYear } from "@/lib/data";

export default function AlumniPage() {
  const sortedYears = Object.keys(alumniByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">Alumni</p>
        <h1 className="mt-2 text-4xl text-cocoa-900 md:text-5xl">Forever A Minor</h1>
        <p className="mt-4 max-w-2xl text-cocoa-700">Our alumni continue to shape communities through music, leadership, and love.</p>
      </SectionWrapper>
      <SectionWrapper className="grid gap-5 md:grid-cols-2">
        {sortedYears.map((year) => (
          <article key={year} className="rounded-2xl border border-denim-100 bg-white/80 p-5 shadow-soft">
            <h2 className="text-2xl text-denim-900">Class of {year}</h2>
            <ul className="mt-3 space-y-1 text-cocoa-700">
              {alumniByYear[year].map((name) => (<li key={name}>{name}</li>))}
            </ul>
          </article>
        ))}
      </SectionWrapper>
      <SectionWrapper className="rounded-3xl border border-sky-300 bg-gradient-to-br from-sky-50 to-sky-100 p-7 md:p-10">
        <p className="text-sm uppercase tracking-widest text-denim-700">In Memoriam</p>
        <h2 className="mt-2 text-3xl text-cocoa-900">Katie Bu & Plommy</h2>
        <p className="mt-4 max-w-3xl text-cocoa-700">We honor Katie Bu and Plommy with deep gratitude and love. Their warmth, artistry, and spirit continue to guide this family. Their stories are woven into our rehearsals, performances, and the care we show one another.</p>
      </SectionWrapper>
    </div>
  );
}
