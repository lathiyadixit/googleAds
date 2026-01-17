"use client";

import { useEffect } from "react";

export default function SidebarAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <aside className="hidden lg:block w-[220px] p-2">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXX"
        data-ad-slot="SIDEBAR_AD_SLOT"
        data-ad-format="auto"
      />
    </aside>
  );
}

