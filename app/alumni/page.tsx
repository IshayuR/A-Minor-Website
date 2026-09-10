import { SectionWrapper } from "@/components/SectionWrapper";
import { alumniByYear } from "@/lib/data";

export default function AlumniPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">Alumni</p>
        <h1 className="mt-2 text-4xl text-cocoa-700 md:text-5xl">Forever A Minor</h1>
        <p className="mt-4 max-w-2xl text-cocoa-700">A Minor is blessed with a dedicated alumni base, who come back every year to support current members in their concerts. We consider ourselves not only an a cappella group, but a family.</p>
      </SectionWrapper>
      <SectionWrapper className="rounded-3xl border border-sky-300 bg-gradient-to-br from-sky-50 to-sky-100 p-7 md:p-10">
        <p className="text-sm uppercase tracking-widest text-denim-700">In Memoriam</p>
        <h2 className="mt-2 text-3xl text-cocoa-700">Katie Bu & Plommy</h2>
        <p className="mt-4 text-cocoa-700">
          Kyunga &ldquo;Katie&rdquo; Bu and David &ldquo;Plommy&rdquo; Plamondon were beloved members of A Minor&apos;s family who passed away during their time in the group. On October 22, 2006, Katie took her own life, and on March 22, 2011, Plommy passed away after being struck by a bus. On campus, there is a tree dedicated to Katie and a bench to Plommy. On Plommy&apos;s bench, a plaque reads, <em>&ldquo;To be loved in the hearts we leave behind, is to live forever.&rdquo;</em> Every anniversary, we visit their dedications to celebrate their lives and ensure they will always be a part of us.
        </p>
      </SectionWrapper>
      <SectionWrapper className="grid gap-5 md:grid-cols-2">
        {Object.entries(alumniByYear).map(([year, alumni]) => (
          <article key={year} className="rounded-2xl border border-denim-100 bg-white/80 p-5 text-cocoa-700 shadow-soft">
            <h2 className="text-2xl text-denim-900">Class of {year}</h2>
            <ul className="mt-3 space-y-1 text-cocoa-700">
              {alumni.map((alum) => (
                <li key={alum.name} className="flex flex-wrap items-baseline gap-x-2">
                  <span>{alum.name}</span>
                  {alum.role && <span className="text-xs text-denim-500">{alum.role}</span>}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </SectionWrapper>
    </div>
  );
}
