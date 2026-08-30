import Link from "next/link";
import { Camera, Music2, PlayCircle, ShoppingBag } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-denim-100 bg-sky-100/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-xl font-semibold text-denim-900">A Minor</h3>
          <p className="mt-2 text-sm text-cocoa-700">UConn&apos;s Premier Gender Inclusive A-Cappella, founded in 2004 in AsACC.</p>
          <p className="mt-2 text-sm font-medium text-denim-900">Peace, Love, A Minor 🩵</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cocoa-700">Connect</h4>
          <ul className="mt-3 space-y-2 text-sm text-cocoa-700">
            <li><a href="https://www.instagram.com/uconnaminor/" target="_blank" rel="noreferrer" aria-label="Visit our Instagram" className="inline-flex items-center gap-2 hover:text-denim-700"><Camera className="h-4 w-4" aria-hidden="true" /> Instagram</a></li>
            <li><a href="https://www.tiktok.com/@aminoracappella" target="_blank" rel="noreferrer" aria-label="Visit our TikTok" className="inline-flex items-center gap-2 hover:text-denim-700"><Music2 className="h-4 w-4" aria-hidden="true" /> TikTok</a></li>
            <li><a href="https://www.youtube.com/user/UConnAMinor" target="_blank" rel="noreferrer" aria-label="Visit our YouTube" className="inline-flex items-center gap-2 hover:text-denim-700"><PlayCircle className="h-4 w-4" aria-hidden="true" /> YouTube</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cocoa-700">Book & Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-cocoa-700">
            <li><a href="mailto:bookings.aminor@gmail.com" aria-label="Send us an email to book" className="hover:text-denim-700">bookings.aminor@gmail.com</a></li>
            <li><Link href="/contact" aria-label="Go to booking form" className="hover:text-denim-700">Bookings Form</Link></li>
            <li><a href="#" aria-label="Visit merch store placeholder" className="inline-flex items-center gap-2 hover:text-denim-700"><ShoppingBag className="h-4 w-4" aria-hidden="true" /> Merch Store (Soon)</a></li>
            <li>University of Connecticut, Storrs, Connecticut 06269</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
