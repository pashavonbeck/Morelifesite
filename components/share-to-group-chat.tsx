"use client";

import { useState } from "react";

// "Send this to the group chat": uses the phone's share sheet when available,
// otherwise copies the page link.
export function ShareToGroupChat({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, text: `Found this. Who\u2019s in? ${url}` });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* share sheet dismissed */
    }
  };
  return (
    <button type="button" className="gc-button gc-button-outline" onClick={share}>
      {copied ? "Link copied" : "Send this to the group chat"}
    </button>
  );
}
