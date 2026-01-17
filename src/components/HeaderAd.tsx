"use client";

import { useEffect, useRef } from "react";

export default function HeaderAd() {
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
    <div
      ref={adRef}
      className="w-full min-w-[300px] min-h-[90px] flex justify-center bg-zinc-100 py-2"
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-3940256099942544"
        data-ad-slot="6300978111"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
