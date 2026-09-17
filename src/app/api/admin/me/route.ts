import { NextResponse } from "next/server";
import { checkAdminSession } from "@/lib/auth";
import { isCloudinaryConfigured } from "@/lib/cloudinary";

export async function GET() {
  try {
    const session = await checkAdminSession();
    return NextResponse.json({
      authenticated: session.authenticated,
      username: session.username || null,
      cloudinaryConfigured: isCloudinaryConfigured(),
    });
  } catch (error) {
    console.error("Admin me error:", error);
    return NextResponse.json(
      { authenticated: false, cloudinaryConfigured: false },
      { status: 500 }
    );
  }
}
