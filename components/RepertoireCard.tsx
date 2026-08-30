import { Music2, Mic2, PencilLine } from "lucide-react";

type RepertoireCardProps = {
  songTitle: string;
  originalArtist: string;
  soloist: string;
  arranger: string;
};

export function RepertoireCard({ songTitle, originalArtist, soloist, arranger }: RepertoireCardProps) {
  void songTitle;
  void originalArtist;
  void soloist;
  void arranger;

  return (
    <article className="rounded-2xl border border-denim-100 bg-sky-100/80 p-5 shadow-soft backdrop-blur-sm">
      <h3 className="text-2xl font-semibold text-cocoa-700">xxxx xxxx xxx</h3>
      <p className="mt-1 flex items-center gap-2 text-sm text-cocoa-700">
        <Music2 className="h-4 w-4" aria-hidden="true" />
        xxxx xxxx xxx
      </p>
      <div className="mt-4 space-y-2 text-sm text-cocoa-700">
        <p className="flex items-center gap-2">
          <Mic2 className="h-4 w-4" aria-hidden="true" />
          xxxx xxxx xxx
        </p>
        <p className="flex items-center gap-2">
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          xxxx xxxx xxx
        </p>
      </div>
    </article>
  );
}
