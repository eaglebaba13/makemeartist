/**
 * Lightweight analytics helpers.
 *
 * No analytics script is installed in this project yet. These wrappers fire
 * only when a Meta Pixel (`fbq`) or GA4 (`gtag`) is present on the page, so
 * adding either later requires no code changes here and nothing is duplicated.
 */

type AnyProps = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

const STORAGE_KEY = "mma_utm";

/** Persist UTM params from the current URL so they survive the checkout flow. */
export function captureUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  UTM_KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) found[k] = v;
  });
  try {
    if (Object.keys(found).length) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
      return found;
    }
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Record<string, string>) : {};
  } catch {
    return found;
  }
}

/** Append stored UTM params to an outbound checkout URL. */
export function withUtm(url: string): string {
  const utm = captureUtmParams();
  if (!Object.keys(utm).length) return url;
  try {
    const u = new URL(url);
    Object.entries(utm).forEach(([k, v]) => u.searchParams.set(k, v));
    return u.toString();
  } catch {
    return url;
  }
}

export function trackPixel(event: string, props?: AnyProps, standard = true) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq(standard ? "track" : "trackCustom", event, props);
}

export function trackGa(event: string, props?: AnyProps) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, props);
}

const item = (price: number, name: string) => ({
  content_name: name,
  content_ids: ["hair-artist-delhi-online-class"],
  content_type: "product",
  value: price,
  currency: "INR",
});

export function trackViewContent(price: number, name: string) {
  trackPixel("ViewContent", item(price, name));
  trackGa("view_item", {
    currency: "INR",
    value: price,
    items: [{ item_id: "hair-artist-delhi-online-class", item_name: name, price }],
  });
}

export function trackInitiateCheckout(price: number, name: string, location: string) {
  trackPixel("InitiateCheckout", { ...item(price, name), cta_location: location });
  trackGa("begin_checkout", {
    currency: "INR",
    value: price,
    cta_location: location,
    items: [{ item_id: "hair-artist-delhi-online-class", item_name: name, price }],
  });
}

export function trackWhatsAppClick(location: string) {
  trackPixel("Contact", { method: "whatsapp", location }, true);
  trackGa("whatsapp_click", { location });
}
