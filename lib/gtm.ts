import type { NextWebVitalsMetric } from "next/app";

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

interface Event {
  event: string;
  page?: string;
  event_category?: string;
  event_action?: string;
  event_value?: number;
  event_label?: string;
}

interface GTMWindow extends Window {
  dataLayer?: Event[];
}

function push(event: Event): void {
  const gtmWindow = window as unknown as GTMWindow;
  if (!gtmWindow.dataLayer) {
    console.log("(gtm) initializing dataLayer array");
    gtmWindow.dataLayer = [];
  }
  gtmWindow.dataLayer.push(event);
}

export function reportPageView(url: string) {
  console.log("(gtm) pageview", url);
  push({
    event: "pageview",
    page: url,
  });
}

export function reportWebVital({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  console.log("(gtm) webvital", id, name, label, value);
  push({
    event: "web-vitals",
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    event_action: name,
    event_value: Math.round(name === "CLS" ? value * 1000 : value),
    event_label: id,
  });
}
