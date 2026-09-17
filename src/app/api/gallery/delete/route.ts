import { NextRequest, NextResponse } from "next/server";
import { checkAdminSession } from "@/lib/auth";
import { deleteImageFromCloudinary } from "@/lib/cloudinary";
import { deleteGalleryItem } from "@/lib/gallery-store";

export async function POST(req: NextRequest) {
  try {
    const session = await checkAdminSession();
    if (!session.authenticated) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in first." },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { id, public_id } = body;
    const targetId = id || public_id;

    if (!targetId) {
      return NextResponse.json(
        { error: "Missing photo id or public_id." },
        { status: 400 }
      );
    }

    const { deleted, items } = await deleteGalleryItem(targetId);

    if (!deleted) {
      return NextResponse.json(
        { error: "Photo not found in gallery." },
        { status: 404 }
      );
    }

    // If it's a Cloudinary asset (not a static seed item), delete from Cloudinary
    if (deleted.public_id && !deleted.isSeed) {
      try {
        await deleteImageFromCloudinary(deleted.public_id);
      } catch (cloudErr) {
        console.warn(
          "Could not delete from Cloudinary (asset may have already been removed):",
          cloudErr
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Photo deleted successfully from gallery and Cloudinary.",
      remainingCount: items.length,
    });
  } catch (error: any) {
    console.error("Gallery delete error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to delete photo from gallery." },
      { status: 500 }
    );
  }
}
