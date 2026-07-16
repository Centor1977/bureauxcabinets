"use client";

import type { AnchorHTMLAttributes } from "react";
import { track } from "@/lib/tracking/track";

type TrackedCtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  trackingPayload?: Record<string, string | undefined>;
};

export function TrackedCtaLink({
  trackingPayload,
  onClick,
  ...props
}: TrackedCtaLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        track("cta_click", trackingPayload);
        onClick?.(event);
      }}
    />
  );
}
