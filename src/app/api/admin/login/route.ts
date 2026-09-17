import { NextRequest, NextResponse } from "next/server";
import { getExpectedAdminCredentials, setAdminSessionCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    const expected = getExpectedAdminCredentials();

    if (username !== expected.username || password !== expected.password) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    await setAdminSessionCookie(username);

    return NextResponse.json({
      success: true,
      message: "Authentication successful",
      user: { username },
    });
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { error: "An error occurred during authentication" },
      { status: 500 }
    );
  }
}
