"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/travel", label: "Travel" },
  { href: "/things-to-do", label: "Things To Do" },
  { href: "/lodging", label: "Lodging" },
  { href: "/faqs", label: "FAQs" },
  { href: "/rsvp", label: "RSVP" },
];

const wordmarkStyle = { fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.2 };

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const Hamburger = ({ onClick, label }: { onClick: () => void; label: string }) => (
    <button
      className="flex flex-col gap-1.5 p-2 text-sage"
      onClick={onClick}
      aria-label={label}
    >
      <span
        className={`block w-6 h-px bg-sage transition-transform origin-center ${
          menuOpen ? "translate-y-[5px] rotate-45" : ""
        }`}
      />
      <span
        className={`block w-6 h-px bg-sage transition-opacity ${
          menuOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-6 h-px bg-sage transition-transform origin-center ${
          menuOpen ? "-translate-y-[9px] -rotate-45" : ""
        }`}
      />
    </button>
  );

  return (
    <header className="relative pt-8 pb-4 px-6 text-center">

      {/* Mobile: flex row — spacer | wordmark | hamburger — so wordmark is truly centered */}
      <div className="flex items-center md:hidden">
        <div className="flex-1" />
        <Link
          href="/"
          className="font-script text-sage hover:text-sage-deep transition-colors whitespace-nowrap"
          style={wordmarkStyle}
          aria-label="Cinnia & Henry — Home"
        >
          Cinnia &amp; Henry
        </Link>
        <div className="flex-1 flex justify-end">
          <Hamburger
            onClick={() => setMenuOpen((o) => !o)}
            label={menuOpen ? "Close menu" : "Open menu"}
          />
        </div>
      </div>

      {/* Desktop: centered wordmark */}
      <Link
        href="/"
        className="hidden md:inline font-script text-sage hover:text-sage-deep transition-colors"
        style={wordmarkStyle}
        aria-label="Cinnia & Henry — Home"
      >
        Cinnia &amp; Henry
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex justify-center gap-8 mt-5" aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={[
              "font-serif text-sage text-[15px] tracking-wide pb-0.5 transition-colors",
              isActive(href)
                ? "border-b border-sage text-sage"
                : "hover:text-sage-deep border-b border-transparent",
            ].join(" ")}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile overlay nav */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col items-center justify-center gap-8">
          <div className="absolute top-8 right-6">
            <Hamburger
              onClick={() => setMenuOpen(false)}
              label="Close menu"
            />
          </div>

          <Link
            href="/"
            className="font-script text-sage"
            style={wordmarkStyle}
            onClick={() => setMenuOpen(false)}
            aria-label="Cinnia & Henry — Home"
          >
            Cinnia &amp; Henry
          </Link>

          <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "font-serif text-sage text-xl tracking-wide pb-0.5 transition-colors",
                  isActive(href)
                    ? "border-b border-sage"
                    : "hover:text-sage-deep border-b border-transparent",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
