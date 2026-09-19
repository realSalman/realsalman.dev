"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const ROUTES = ["/", "/now", "/projects", "/blogs"];

export default function ScrollNavigation({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);
  const lastNavigationTime = useRef<number>(0);

  useEffect(() => {
    // Scroll to top on route change to ensure smooth UX
    const container = containerRef.current;
    if (container) {
      container.scrollTo(0, 0);
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleNavigation = (direction: "next" | "prev") => {
      const now = Date.now();
      if (now - lastNavigationTime.current < 500) return; // .5s cooldown

      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return; // Ignore if not a main page (e.g. /projects/[slug])

      if (direction === "next" && currentIndex < ROUTES.length - 1) {
        lastNavigationTime.current = now;
        router.push(ROUTES[currentIndex + 1]);
      } else if (direction === "prev" && currentIndex > 0) {
        lastNavigationTime.current = now;
        router.push(ROUTES[currentIndex - 1]);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) return;

      let scrollTop, scrollHeight, clientHeight;

      if (isDesktop && containerRef.current) {
        scrollTop = containerRef.current.scrollTop;
        scrollHeight = containerRef.current.scrollHeight;
        clientHeight = containerRef.current.clientHeight;
      } else {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = window.innerHeight;
      }

      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 2;
      const isAtTop = scrollTop <= 2;

      // Ensure user is actually attempting to scroll past the edge
      if (e.deltaY > 20 && isAtBottom) {
        handleNavigation("next");
      } else if (e.deltaY < -20 && isAtTop) {
        handleNavigation("prev");
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY; // Positive = scrolling down

      let scrollTop, scrollHeight, clientHeight;

      if (isDesktop && containerRef.current) {
        scrollTop = containerRef.current.scrollTop;
        scrollHeight = containerRef.current.scrollHeight;
        clientHeight = containerRef.current.clientHeight;
      } else {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = window.innerHeight;
      }

      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 2;
      const isAtTop = scrollTop <= 2;

      if (deltaY > 50 && isAtBottom) {
        handleNavigation("next");
        touchStartY.current = null;
      } else if (deltaY < -50 && isAtTop) {
        handleNavigation("prev");
        touchStartY.current = null;
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
    };

    document.addEventListener("wheel", handleWheel, { passive: true });
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pathname, router]);

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
