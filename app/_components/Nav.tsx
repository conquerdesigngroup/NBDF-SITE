"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav id="nav">
        <div className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/uploads/nbdf-logo-square.png"
            alt="No Boundaries Dance Foundation"
          />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#mission">About</a>
          </li>
          <li>
            <a href="#help">Get Involved</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
        </ul>
        <a href="#contact" className="nav-cta">
          Contact
        </a>
        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-overlay"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id="nav-overlay"
        className={`nav-overlay${open ? " is-open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <ul
          className="nav-overlay-links"
          // Tapping a link should close the overlay; ScrollEffects' anchor
          // handler (mounted after Nav) handles the smooth-scroll itself.
          // We deliberately don't preventDefault or stopPropagation here —
          // we want both behaviors to happen.
          onClick={() => setOpen(false)}
        >
          <li>
            <a href="#mission">About</a>
          </li>
          <li>
            <a href="#help">Get Involved</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#contact" className="nav-overlay-cta">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
