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
  const slideSelector = "[data-gallery-slide]";

  /* ── Proximity effect: scale + saturation based on distance to center ── */
  const updateProximity = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;

    const vpRect = el.getBoundingClientRect();
    const vpCenter = vpRect.left + vpRect.width / 2;
    const maxDist = vpRect.width * 0.75;

    el.querySelectorAll<HTMLElement>(slideSelector).forEach((fig) => {
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
      const firstFig = el.querySelector<HTMLElement>(slideSelector);
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
    <div className="relative w-full">
      <button
        className="absolute left-1.5 top-1/2 z-30 inline-flex -translate-y-1/2 items-center justify-center p-2 text-white/70 transition hover:-translate-x-0.5 hover:-translate-y-1/2 hover:text-white/95 active:-translate-y-1/2 active:scale-95 md:left-[clamp(0.6rem,2vw,2rem)] md:p-3"
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
        className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Horizontale Bildergalerie"
      >
        <div className="flex items-center gap-[clamp(0.9rem,2vw,1.6rem)] px-3 md:px-[clamp(1rem,3vw,3rem)]">
          {images.map((img, i) => (
            <figure key={img.src} data-gallery-slide className="m-0 shrink-0">
              <img
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? undefined : "lazy"}
                draggable={false}
                className="block h-[clamp(220px,56vw,440px)] w-auto max-w-[clamp(290px,82vw,680px)] select-none rounded-[0.35rem] object-contain [filter:saturate(0.55)] [transform:scale(0.9)] [transform-origin:center] [will-change:transform,filter] md:h-[clamp(230px,45vw,620px)] md:max-w-[clamp(320px,70vw,980px)]"
              />
            </figure>
          ))}
        </div>
      </div>

      <button
        className="absolute right-1.5 top-1/2 z-30 inline-flex -translate-y-1/2 items-center justify-center p-2 text-white/70 transition hover:translate-x-0.5 hover:-translate-y-1/2 hover:text-white/95 active:-translate-y-1/2 active:scale-95 md:right-[clamp(0.6rem,2vw,2rem)] md:p-3"
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
