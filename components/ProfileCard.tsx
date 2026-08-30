import Image from "next/image";

type ProfileCardProps = { imageUrl: string; name: string; voicePart: string; major: string };

export function ProfileCard({ imageUrl, name, voicePart, major }: ProfileCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-denim-100 bg-white/90 shadow-soft">
      <div className="relative aspect-[4/5] w-full">
        <Image src={imageUrl} alt={`Portrait of ${name}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-1 p-4">
        <h3 className="text-lg font-semibold text-cocoa-700">{name}</h3>
        <p className="text-sm text-denim-900">{voicePart}</p>
        <p className="text-sm text-cocoa-700">{major}</p>
      </div>
    </article>
  );
}
