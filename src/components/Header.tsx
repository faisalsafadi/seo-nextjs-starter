"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, SunMoon, X } from "lucide-react";
import Brand from "./Brand";
import { siteName } from "@/config";

export default function Header({ contactEmail }: { contactEmail: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function toggleTheme() {
    const dark =
      document.documentElement.dataset.theme === "dark" ||
      (!document.documentElement.dataset.theme &&
        matchMedia("(prefers-color-scheme: dark)").matches);
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  const navigation: [string, string][] = [
    ["Examples", "/examples"],
    ["About", "/about"],
  ];

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" aria-label={`${siteName} home`}>
          <Brand />
        </Link>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            <SunMoon size={18} />
          </button>
          <a className="button button-dark header-deploy" href={`mailto:${contactEmail}`}>
            Contact <span aria-hidden="true">✉</span>
          </a>
          <button
            className="icon-button menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-controls="main-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}