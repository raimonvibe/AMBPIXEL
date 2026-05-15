"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  type?: string;
  className?: string;
  /** Hero / above-the-fold: load sooner */
  priority?: boolean;
};

function prefersReducedData(): boolean {
  if (typeof navigator === "undefined") return false;
  const conn = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  return conn.effectiveType === "slow-2g" || conn.effectiveType === "2g";
}

export default function LazyVideo({
  src,
  type = "video/mp4",
  className,
  priority = false,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(priority && !prefersReducedData());

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!active) setActive(true);
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: priority ? "0px" : "120px", threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [active, priority]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !active) return;
    void el.play().catch(() => {});
  }, [active, src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload={active ? "auto" : "none"}
      className={className}
    >
      {active && <source src={src} type={type} />}
    </video>
  );
}
