"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/repertoire", label: "Repertoire" },
  { href: "/members", label: "Members" },
  { href: "/alumni", label: "Alumni" },
  { href: "/contact", label: "Book Us" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        isScrolled ? "border-denim-100 bg-sky-100/95 shadow-sm backdrop-blur" : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6" aria-label="Main navigation">
        <Link href="/" className="inline-flex items-center" aria-label="Go to homepage">
          <Image
            src="/images/general/logo.jpg"
            alt="UConn A Minor logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-denim-200"
            priority
          />
        </Link>
        <button
          type="button"
          className="inline-flex rounded-md p-2 text-denim-900 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
        <ul className="hidden items-center gap-6 text-sm font-medium text-cocoa-700 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-label={`Navigate to ${item.label} page`} className="transition hover:text-denim-700">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-denim-100 bg-sky-100 px-4 py-4 md:hidden">
          <ul className="space-y-3 text-sm font-medium text-cocoa-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-label={`Navigate to ${item.label} page`} onClick={() => setOpen(false)} className="block rounded-md px-2 py-1 transition hover:bg-sky-100">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
