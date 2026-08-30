import { SectionWrapper } from "@/components/SectionWrapper";

export default function MembersPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">Roster</p>
        <h1 className="mt-2 text-4xl text-cocoa-700 md:text-5xl">The Voices of A Minor</h1>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">Meet the E-Board</h2>
        <div className="rounded-2xl border border-denim-100 bg-white/80 p-6 text-cocoa-700 shadow-soft">
          xxxx xxxx xxx
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">Current Members</h2>
        <div className="rounded-2xl border border-denim-100 bg-white/80 p-6 text-cocoa-700 shadow-soft">
          xxxx xxxx xxx
        </div>
      </SectionWrapper>
    </div>
  );
}
