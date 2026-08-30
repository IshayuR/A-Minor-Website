import { SectionWrapper } from "@/components/SectionWrapper";

export default function AlumniPage() {
  const classYears = ["2025", "2024", "2023", "2022"];

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">Alumni</p>
        <h1 className="mt-2 text-4xl text-cocoa-700 md:text-5xl">Forever A Minor</h1>
        <p className="mt-4 max-w-2xl text-cocoa-700">A Minor is blessed with a dedicated alumni base, who come back every year to support current members in their concerts. We consider ourselves, not only an a capella group, but a family, and our alumni are just those crazy aunts, uncles, and grandparents that we get to see on special occasions.</p>
      </SectionWrapper>
      <SectionWrapper className="grid gap-5 md:grid-cols-2">
        {classYears.map((year) => (
          <article key={year} className="rounded-2xl border border-denim-100 bg-white/80 p-5 text-cocoa-700 shadow-soft">
            <h2 className="text-2xl text-denim-900">Class of {year}</h2>
            <ul className="mt-3 space-y-1 text-cocoa-700">
              <li>xxxx xxxx xxx</li>
              <li>xxxx xxxx xxx</li>
              <li>xxxx xxxx xxx</li>
            </ul>
          </article>
        ))}
      </SectionWrapper>
      <SectionWrapper className="rounded-3xl border border-sky-300 bg-gradient-to-br from-sky-50 to-sky-100 p-7 md:p-10">
        <p className="text-sm uppercase tracking-widest text-denim-700">In Memoriam</p>
        <h2 className="mt-2 text-3xl text-cocoa-700">Katie Bu & Plommy</h2>
        <p className="mt-4 max-w-3xl text-cocoa-700">xxxx xxxx xxx</p>
      </SectionWrapper>
    </div>
  );
}
