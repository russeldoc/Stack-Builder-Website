import { useState } from "react";
import logo from "../assets/logo-text.png";

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-10">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded bg-ink transition-transform ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 rounded bg-ink transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 rounded bg-ink transition-transform ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>

        {/* Logo: left on desktop, centered on mobile */}
        <a href="#home">
          <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
        </a>

        {/* Desktop nav links, centered */}
        <nav className="hidden items-center gap-8 md:mx-auto md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium ${
                link.active ? "text-pink-500" : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Sign In / Sign Up — present on both layouts */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a href="#" className="hidden text-sm font-medium text-ink hover:text-purple-600 sm:inline">
            Sign In
          </a>
          <a
            href="#"
            className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm sm:px-5"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-white px-5 pb-5 pt-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-2 text-sm font-medium ${link.active ? "text-pink-500" : "text-ink-soft"}`}
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="py-2 text-sm font-medium text-ink sm:hidden">
            Sign In
          </a>
        </nav>
      )}
    </header>
  );
}
