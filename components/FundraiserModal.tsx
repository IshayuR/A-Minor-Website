"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { X } from "lucide-react";

const DISMISSED_KEY = "a-minor-ignite-fundraiser-dismissed-this-tab";
const FUNDRAISER_URL = "https://www.givecampus.com/schools/UniversityofConnecticut/ignite-2026/pages/ignite-student-orgs/uconn-a-minor";
const CHANGE_EVENT = "a-minor-ignite-fundraiser-change";

let dismissedInMemory = false;

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

function getSnapshot() {
  // Browsers may copy sessionStorage into a new tab opened from another page.
  // Treat an opener-backed tab as a fresh visit until this tab dismisses the modal.
  if (window.opener && !dismissedInMemory) return true;

  try {
    return window.sessionStorage.getItem(DISMISSED_KEY) !== "true";
  } catch {
    return !dismissedInMemory;
  }
}

function getServerSnapshot() {
  return false;
}

export function FundraiserModal() {
  const isOpen = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const dismiss = useCallback(() => {
    dismissedInMemory = true;
    try {
      window.sessionStorage.setItem(DISMISSED_KEY, "true");
    } catch {
      // The modal still closes for this page view if storage is unavailable.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismiss, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-denim-900/60 px-4 py-6"
      onClick={dismiss}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="ignite-modal-title"
        aria-describedby="ignite-modal-description"
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-denim-100 bg-beige-50 p-7 text-cocoa-700 shadow-2xl md:p-9"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-300/60" aria-hidden="true" />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismiss}
          aria-label="Close fundraiser message"
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-denim-700 transition hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative">
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-denim-700">
            PSA: We&apos;re fundraising!  
          </p>
          <h2 id="ignite-modal-title" className="mt-4 text-3xl leading-tight text-cocoa-700 md:text-4xl">
            IGNITE: Support A Minor
          </h2>
          <p id="ignite-modal-description" className="mt-4 leading-relaxed">
            We&apos;re part of <span className="font-semibold text-denim-900">IGNITE at UConn</span>, a fundraiser supporting student organizations. Every bit of support helps us prepare for our competition season and bond as a group!
          </p>
          <div className="mt-4 flex flex-col items-start gap-4">
            <p className="leading-relaxed">
              We&apos;ll be completing fun dares for every milestone we hit! Check out our{" "}
              <a
                href="https://www.instagram.com/uconnaminor/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-denim-700 underline decoration-denim-300 underline-offset-4 transition hover:text-denim-900"
              >
                Instagram
              </a>
              {" "}for more details.
            </p>
            <a
              href={FUNDRAISER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex self-center items-center justify-center rounded-full bg-denim-700 px-6 py-3 text-sm font-semibold text-beige-50 shadow-soft transition hover:-translate-y-0.5 hover:bg-denim-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-500 focus-visible:ring-offset-2"
            >
              Donate now!
            </a>
            <p className="self-center text-center text-xs text-cocoa-500">Peace, Love, A Minor 🩵</p>
          </div>
        </div>
      </section>
    </div>
  );
}
