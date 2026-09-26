"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useCallback } from "react";

const scrollPositions = new Map<string, number>();

export default function ScrollContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const prevPathname = useRef(pathname);

  // Save scroll position on every scroll
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      scrollPositions.set(pathname, containerRef.current.scrollTop);
    }
  }, [pathname]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // If we navigated to a new route, save old position first
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
    }

    // Restore scroll position for this route, or scroll to top if first visit
    const savedPosition = scrollPositions.get(pathname);
    container.scrollTop = savedPosition ?? 0;

    // Also handle mobile (window scroll)
    window.scrollTo(0, savedPosition ?? 0);

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, handleScroll]);

  return (
    <div
      ref={containerRef}
      className="flex-1 md:overflow-y-auto px-6 pt-8 md:pt-32 md:px-12 lg:px-24 pb-24 w-full"
    >
      <div className="max-w-5xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}
