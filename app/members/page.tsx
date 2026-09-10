import { ProfileCard } from "@/components/ProfileCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { eboard, creativeTeam, members } from "@/lib/data";

export default function MembersPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">Roster</p>
        <h1 className="mt-2 text-4xl text-cocoa-700 md:text-5xl">The Voices of A Minor</h1>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">E-Board</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {eboard.map((member, i) => (
            <ProfileCard
              key={member.name}
              imageUrl={member.imageUrl}
              name={member.name}
              voicePart={member.voicePart}
              major={member.major}
              role={member.role}
              priority={i === 0}
            />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">Creative Team</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {creativeTeam.map((member) => (
            <ProfileCard
              key={`${member.name}-${member.role}`}
              imageUrl={member.imageUrl}
              name={member.name}
              voicePart={member.voicePart}
              major={member.major}
              role={member.role}
            />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-5 text-2xl text-denim-900">Current Members</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {members.map((member) => (
            <div key={member.name} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              <ProfileCard
                imageUrl={member.imageUrl}
                name={member.name}
                voicePart={member.voicePart}
                major={member.major}
                role={member.role}
              />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
