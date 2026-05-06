"use client";

import { useEffect } from "react";

/**
 * Global scroll-driven effects, ported from the prototype's <script>:
 *   - Adds .scrolled to #nav past 40px
 *   - Translates #heroParallax and #bannerParallax for the parallax effect
 *   - Reveals .reveal elements on scroll via IntersectionObserver
 *   - Smooth-scrolls in-page anchor links with a 72px nav offset
 *
 * Renders no DOM. Mounted once in app/layout.tsx.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const heroParallax = document.getElementById("heroParallax");
    const bannerParallax = document.getElementById("bannerParallax");

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (nav) nav.classList.toggle("scrolled", scrollY > 40);
      if (heroParallax) {
        heroParallax.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
      if (bannerParallax) {
        const banner = bannerParallax.closest(".parallax-banner");
        if (banner) {
          const rect = banner.getBoundingClientRect();
          const offset = window.innerHeight / 2 - rect.top - rect.height / 2;
          bannerParallax.style.transform = `translateY(${offset * 0.25}px)`;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveal-on-scroll
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));

    // Smooth in-page anchor links with nav offset
    const anchors =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const onAnchorClick = (e: MouseEvent) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top =
          (target as HTMLElement).getBoundingClientRect().top +
          window.scrollY -
          72;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    anchors.forEach((a) => a.addEventListener("click", onAnchorClick));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      anchors.forEach((a) => a.removeEventListener("click", onAnchorClick));
    };
  }, []);

  return null;
}
