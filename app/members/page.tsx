import { ProfileCard } from "@/components/ProfileCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { eboard, members } from "@/lib/data";

export default function MembersPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">Roster</p>
        <h1 className="mt-2 text-4xl text-cocoa-900 md:text-5xl">The Voices of A Minor</h1>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">Meet the E-Board</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {eboard.map((member) => (<ProfileCard key={member.name} name={member.name} voicePart={member.voicePart} major={member.major} imageUrl={member.imageUrl} />))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">Current Members</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (<ProfileCard key={member.name} name={member.name} voicePart={member.voicePart} major={member.major} imageUrl={member.imageUrl} />))}
        </div>
      </SectionWrapper>
    </div>
  );
}
