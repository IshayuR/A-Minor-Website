import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollRevealImage } from "@/components/ScrollRevealImage";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:px-6 md:py-14">
      <SectionWrapper>
        <p className="text-sm font-semibold uppercase tracking-wider text-denim-700">About Us</p>
        <h1 className="mt-2 text-4xl text-cocoa-700 md:text-5xl">A Story Rooted in Community</h1>
        <p className="mt-4 max-w-3xl text-cocoa-700">
          A Minor, UConn&apos;s oldest co-ed a cappella group, was founded in 2004 by members of the
          Asian American Cultural Center (AsACC) following their performance during the 2003 Annual
          Alma Mater Homecoming Competition. Since then, A Minor has become a family of more than
          40 alumni and current members who remain passionate about a cappella music and sharing
          their gift with the community!
        </p>
        <p className="mt-4 max-w-3xl text-cocoa-700">
          A Minor&apos;s repertoire has included everything from Beyonc&eacute; to Disney music, with
          plenty of tunes in between. We perform on- and off-campus at charity events, competitions,
          college invitationals, showcases and more! You can find all of our upcoming dates on the
          Events page.
        </p>
      </SectionWrapper>
      <section className="grid gap-5 md:grid-cols-12">
        <div className="md:col-span-7 md:row-span-2">
          <ScrollRevealImage src="/images/about/throwbac3.JPG" alt="UConn A Minor throwback group photo" className="h-80 md:h-full" />
        </div>
        <div className="md:col-span-5">
          <ScrollRevealImage src="/images/about/throwback1.jpg" alt="UConn A Minor throwback performance moment" className="h-64" />
        </div>
        <div className="md:col-span-5">
          <ScrollRevealImage src="/images/about/throwback2.jpg" alt="UConn A Minor throwback candid photo" className="h-64" />
        </div>
      </section>
      <SectionWrapper className="grid gap-6 rounded-3xl border border-denim-100 bg-sky-100/70 p-6 md:grid-cols-2 md:p-8">
        <div><h2 className="text-2xl text-cocoa-700">Our Mission</h2><p className="mt-3 text-cocoa-700">bomb gampel idk</p></div>
        <div><h2 className="text-2xl text-cocoa-700">Our Culture</h2><p className="mt-3 text-cocoa-700">shout out asians</p></div>
      </SectionWrapper>
    </div>
  );
}
