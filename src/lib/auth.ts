import crypto from "crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE_NAME = "bgs_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecretKey(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    "bgs_fallback_secure_key_2026_sidlaghatta_bgs_school_pu"
  );
}

export function getExpectedAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || "BGSSDLLOGIN",
    password: process.env.ADMIN_PASSWORD || "leaRN@649448",
  };
}

export function createSessionToken(username: string): string {
  const issuedAt = Date.now();
  const payload = JSON.stringify({
    username,
    issuedAt,
  });

  const secret = getSecretKey();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const token = Buffer.from(payload).toString("base64url") + "." + signature;
  return token;
}

export function verifySessionToken(token: string): { valid: boolean; username?: string } {
  if (!token || !token.includes(".")) {
    return { valid: false };
  }

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) {
    return { valid: false };
  }

  const secret = getSecretKey();
  const payload = Buffer.from(encodedPayload, "base64url").toString("utf-8");

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return { valid: false };
  }

  try {
    const data = JSON.parse(payload);
    // Check expiration (7 days)
    if (Date.now() - data.issuedAt > SESSION_MAX_AGE_SECONDS * 1000) {
      return { valid: false };
    }
    return { valid: true, username: data.username };
  } catch {
    return { valid: false };
  }
}

export async function setAdminSessionCookie(username: string) {
  const token = createSessionToken(username);
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function checkAdminSession(): Promise<{ authenticated: boolean; username?: string }> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionCookie || !sessionCookie.value) {
    return { authenticated: false };
  }

  const verified = verifySessionToken(sessionCookie.value);
  if (!verified.valid) {
    return { authenticated: false };
  }

  return { authenticated: true, username: verified.username };
}
