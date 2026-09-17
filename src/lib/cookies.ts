"use client";

export type ConsentType = "all" | "essential" | "custom";

export interface ConsentPreferences {
  type: ConsentType | null;
  analytics: boolean;
  essential: boolean;
  timestamp?: string;
}

export const COOKIE_KEYS = {
  CONSENT: "bgs_cookie_consent",
  VISITOR_ID: "bgs_visitor_id",
  SESSION_ID: "bgs_session_id",
  VISIT_COUNT: "bgs_visit_count",
  LAST_VISITED: "bgs_last_visited",
  ADMISSIONS_POPUP_DISMISSED: "bgs_admissions_dismissed",
  RESULT_POPUP_DISMISSED: "bgs_result_dismissed",
  GALLERY_TAB: "bgs_gallery_last_tab",
  ADMIN_SESSION: "bgs_admin_session", // HttpOnly on server
} as const;

/**
 * Read a cookie by name from document.cookie
 */
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const nameEq = `${name}=`;
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEq) === 0) {
      return decodeURIComponent(c.substring(nameEq.length));
    }
  }
  return null;
}

/**
 * Set a cookie on document.cookie
 */
export function setCookie(
  name: string,
  value: string,
  days: number = 365,
  sameSite: "Lax" | "Strict" | "None" = "Lax"
): void {
  if (typeof document === "undefined") return;

  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }

  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}${expires}; path=/; SameSite=${sameSite}${secure}`;
}

/**
 * Delete a cookie by expiring it
 */
export function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
}

/**
 * Get current user cookie consent
 */
export function getConsent(): ConsentPreferences {
  if (typeof window === "undefined") {
    return { type: null, analytics: false, essential: true };
  }

  try {
    const raw = localStorage.getItem(COOKIE_KEYS.CONSENT);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        type: parsed.type || "essential",
        analytics: Boolean(parsed.analytics),
        essential: true,
        timestamp: parsed.timestamp,
      };
    }
  } catch {
    // fallback to document.cookie
    const cookieVal = getCookie(COOKIE_KEYS.CONSENT);
    if (cookieVal) {
      const isAll = cookieVal === "all";
      return {
        type: cookieVal as ConsentType,
        analytics: isAll,
        essential: true,
      };
    }
  }

  return { type: null, analytics: false, essential: true };
}

/**
 * Check if a cookie category is permitted
 */
export function hasConsentFor(category: "essential" | "analytics"): boolean {
  if (category === "essential") return true;
  const consent = getConsent();
  return consent.analytics === true;
}

/**
 * Save user cookie consent preferences
 */
export function setConsent(type: ConsentType, analyticsAllowed: boolean = type === "all"): void {
  const data: ConsentPreferences = {
    type,
    analytics: analyticsAllowed,
    essential: true,
    timestamp: new Date().toISOString(),
  };

  try {
    localStorage.setItem(COOKIE_KEYS.CONSENT, JSON.stringify(data));
  } catch (e) {
    console.warn("localStorage unavailable:", e);
  }

  // Set the consent cookie (valid for 1 year)
  setCookie(COOKIE_KEYS.CONSENT, type, 365);

  if (analyticsAllowed) {
    // Initialize active tracking cookies
    initVisitorTracking();
  } else {
    // Purge non-essential cookies
    clearNonEssentialCookies();
  }
}

/**
 * Clear all optional / analytics tracking cookies
 */
export function clearNonEssentialCookies(): void {
  deleteCookie(COOKIE_KEYS.VISITOR_ID);
  deleteCookie(COOKIE_KEYS.SESSION_ID);
  deleteCookie(COOKIE_KEYS.VISIT_COUNT);
  deleteCookie(COOKIE_KEYS.LAST_VISITED);
  deleteCookie(COOKIE_KEYS.GALLERY_TAB);
}

/**
 * Active Visitor Analytics & Session Cookies
 * Called automatically when user permits cookies.
 */
export function initVisitorTracking(): void {
  if (!hasConsentFor("analytics")) {
    return;
  }

  // 1. Visitor ID (Unique identifier, 365 days)
  let visitorId = getCookie(COOKIE_KEYS.VISITOR_ID);
  if (!visitorId) {
    visitorId = "bgs_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
    setCookie(COOKIE_KEYS.VISITOR_ID, visitorId, 365);
  }

  // 2. Active Session ID (expires when browser session ends)
  let sessionId = getCookie(COOKIE_KEYS.SESSION_ID);
  if (!sessionId) {
    sessionId = "sess_" + Math.random().toString(36).substring(2, 9);
    setCookie(COOKIE_KEYS.SESSION_ID, sessionId, 0); // session cookie
  }

  // 3. Visit Count (increments on new session)
  const currentCount = parseInt(getCookie(COOKIE_KEYS.VISIT_COUNT) || "0", 10);
  if (!sessionId || currentCount === 0) {
    setCookie(COOKIE_KEYS.VISIT_COUNT, (currentCount + 1).toString(), 365);
  }

  // 4. Last Visited Timestamp
  setCookie(COOKIE_KEYS.LAST_VISITED, new Date().toISOString(), 365);
}
