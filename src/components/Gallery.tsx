import { useRef, useEffect, useCallback } from "react";

const images = [
  { src: "/imgs/On_The_Moon_ZQ_015.jpeg", alt: "ON THE MOON Performance" },
  { src: "/imgs/On_The_Moon_ZQ_075.jpeg", alt: "ON THE MOON Performance" },
  { src: "/imgs/On_The_Moon_ZQ_086.jpeg", alt: "ON THE MOON Performance" },
  { src: "/imgs/On_The_Moon_ZW_062.jpeg", alt: "ON THE MOON Performance" },
  { src: "/imgs/On_The_Moon_ZW_077.jpeg", alt: "ON THE MOON Performance" },
  { src: "/imgs/On_The_Moon_ZW_087.jpeg", alt: "ON THE MOON Performance" },
  { src: "/imgs/On_The_Moon_ZW_141.jpeg", alt: "ON THE MOON Performance" },
];

export default function Gallery() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  /* ── Proximity effect: scale + saturation based on distance to center ── */
  const updateProximity = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;

    const vpRect = el.getBoundingClientRect();
    const vpCenter = vpRect.left + vpRect.width / 2;
    const maxDist = vpRect.width * 0.75;

    el.querySelectorAll<HTMLElement>(".gallery-slide").forEach((fig) => {
      const figRect = fig.getBoundingClientRect();
      const figCenter = figRect.left + figRect.width / 2;
      const dist = Math.abs(vpCenter - figCenter);
      const t = Math.max(0, 1 - dist / maxDist); // 1 at center, 0 at edges
      const scale = 0.9 + t * 0.1; //  0.9 → 1.0
      const sat = 0.55 + t * 0.45; // 0.55 → 1.0

      const img = fig.querySelector<HTMLImageElement>("img");
      if (img) {
        img.style.transform = `scale(${scale})`;
        img.style.filter = `saturate(${sat})`;
      }
    });
  }, []);

  /* ── Mount: center first image, wire up scroll listener ── */
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const centerFirst = () => {
      const firstFig = el.querySelector<HTMLElement>(".gallery-slide");
      if (!firstFig) return;
      const figRect = firstFig.getBoundingClientRect();
      const vpRect = el.getBoundingClientRect();
      el.scrollLeft +=
        figRect.left + figRect.width / 2 - (vpRect.left + vpRect.width / 2);
      updateProximity();
    };

    // Wait for the first image so layout dimensions are correct
    const firstImg = el.querySelector<HTMLImageElement>("img");
    if (firstImg && !firstImg.complete) {
      firstImg.addEventListener(
        "load",
        () => requestAnimationFrame(centerFirst),
        { once: true },
      );
    } else {
      requestAnimationFrame(centerFirst);
    }

    // Throttle scroll updates to one per frame
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProximity);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateProximity]);

  /* ── Nav buttons: smooth native scroll ── */
  const scrollBy = useCallback((dir: number) => {
    const el = viewportRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.5, behavior: "smooth" });
  }, []);

  return (
    <div className="gallery-carousel">
      <button
        className="gallery-nav gallery-nav-prev"
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Vorheriges Bild"
      >
        <svg
          width="20"
          height="36"
          viewBox="0 0 20 36"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 3L5 18L15 33" />
        </svg>
      </button>

      <div
        ref={viewportRef}
        className="gallery-viewport"
        aria-label="Horizontale Bildergalerie"
      >
        <div className="gallery-track">
          {images.map((img, i) => (
            <figure key={img.src} className="gallery-slide">
              <img
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? undefined : "lazy"}
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>

      <button
        className="gallery-nav gallery-nav-next"
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Nächstes Bild"
      >
        <svg
          width="20"
          height="36"
          viewBox="0 0 20 36"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 3L15 18L5 33" />
        </svg>
      </button>
    </div>
  );
}
