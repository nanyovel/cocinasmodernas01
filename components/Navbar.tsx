"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const cocinasSubmenu = [
  { href: "/cocinas/modulares", label: "Cocinas Modulares" },
  { href: "/cocinas/madera", label: "Cocinas en Madera" },
  { href: "/cocinas/con-isla", label: "Cocinas con Isla" },
  { href: "/cocinas/americanas", label: "Cocinas Americanas" },
  { href: "/cocinas/vintage", label: "Cocinas Vintage" },
  { href: "/cocinas/elegantes", label: "Cocinas Elegantes" },
  { href: "/cocinas/italianas", label: "Cocinas Italianas" },
  {
    href: "/cocinas/barra-desayunador",
    label: "Cocinas con Barra Desayunador",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCocinasOpen, setMobileCocinasOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const restLinks = [
    { href: "/servicios", label: "Servicios" },
    { href: "/galeria", label: "Galería" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* ── Logo ── */}
        <div className="flex gap-2">
          <img
            src="/images/logo transparent.png"
            alt="Cocinas Modernas RD"
            className="h-10 w-auto"
            width={100}
            height={200}
          />
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl font-light tracking-[0.2em] text-gold group-hover:text-gold-light transition-colors">
              COCINAS
            </span>
            <span className="font-body text-[10px] tracking-[0.5em] text-cream/50 uppercase">
              Modernas RD
            </span>
          </Link>
        </div>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-10">
          {/* Inicio */}
          <Link
            href="/"
            className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-300"
          >
            Inicio
          </Link>

          {/* Cocinas dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 font-body text-xs tracking-widest uppercase transition-colors duration-300 ${
                dropdownOpen ? "text-gold" : "text-cream/60 hover:text-gold"
              }`}
            >
              Cocinas
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 w-68 min-w-[260px] transition-all duration-300 origin-top ${
                dropdownOpen
                  ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {/* Arrow tip */}
              <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-obsidian-mid border-l border-t border-gold/20 z-10" />

              {/* Box */}
              <div className="relative bg-obsidian-mid border border-gold/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                {/* Top label */}
                <div className="px-5 pt-4 pb-3 border-b border-gold/10">
                  <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold/50">
                    Tipos de cocinas
                  </p>
                </div>

                {/* Items */}
                <ul className="py-2">
                  {cocinasSubmenu.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="group flex items-center gap-3 px-5 py-2.5 font-body text-[11px] tracking-wide text-cream/55 hover:text-gold hover:bg-white/[0.03] transition-all duration-200"
                      >
                        <span className="w-3 h-px bg-gold/25 group-hover:bg-gold group-hover:w-5 transition-all duration-300 flex-shrink-0" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA */}
                <div className="px-5 py-3 border-t border-gold/10 bg-obsidian-light/40">
                  <Link
                    href="/galeria"
                    onClick={() => setDropdownOpen(false)}
                    className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/70 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    Ver galería completa
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of links */}
          {restLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}

          <Link href="/contacto" className="btn-gold text-[10px] px-6 py-3">
            Cotizar Ahora
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span
            className={`block h-px w-6 bg-gold transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-gold transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-gold transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-obsidian-soft border-t border-gold/10 px-6 py-5 flex flex-col">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors py-3 border-b border-gold/5"
          >
            Inicio
          </Link>

          {/* Mobile Cocinas accordion */}
          <div className="border-b border-gold/5">
            <button
              onClick={() => setMobileCocinasOpen(!mobileCocinasOpen)}
              className="w-full flex items-center justify-between font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors py-3"
            >
              Cocinas
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${
                  mobileCocinasOpen ? "rotate-180 text-gold" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileCocinasOpen
                  ? "max-h-80 opacity-100 pb-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-l-2 border-gold/20 ml-1 pl-4 flex flex-col gap-0.5">
                {cocinasSubmenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileCocinasOpen(false);
                    }}
                    className="font-body text-[11px] text-cream/45 hover:text-gold transition-colors py-2 flex items-center gap-2.5"
                  >
                    <span className="w-2 h-px bg-gold/30 flex-shrink-0" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {restLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-xs tracking-widest uppercase text-cream/60 hover:text-gold transition-colors py-3 border-b border-gold/5"
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-5">
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="btn-gold text-center text-[10px] block"
            >
              Cotizar Ahora
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
