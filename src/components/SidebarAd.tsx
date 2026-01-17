"use client";

import { useEffect, useRef } from "react";

export default function SidebarAd() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!adRef.current) return;

      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error(err);
      }
    }, 500); // ⏱ delay is VERY IMPORTANT

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside
      ref={adRef}
      className="hidden lg:flex w-[300px] min-h-[250px] justify-center p-2"
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "300px", height: "250px" }}
        data-ad-client="ca-pub-3940256099942544"
        data-ad-slot="6300978111"
      />
    </aside>
  );
}
