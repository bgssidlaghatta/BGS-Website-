import { NextRequest, NextResponse } from "next/server";
import { checkAdminSession } from "@/lib/auth";
import { isCloudinaryConfigured, uploadImageToCloudinary } from "@/lib/cloudinary";
import { addGalleryItem, GalleryItem } from "@/lib/gallery-store";

export async function POST(req: NextRequest) {
  try {
    const session = await checkAdminSession();
    if (!session.authenticated) {
      return NextResponse.json(
        { error: "Unauthorized. Please log in first." },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = (formData.get("title") as string) || "";
    const category = (formData.get("category") as string) || "Campus";

    if (!file) {
      return NextResponse.json(
        { error: "No image file provided." },
        { status: 400 }
      );
    }

    // Validate mime type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "File must be a valid image (JPG, PNG, WebP, etc.)." },
        { status: 400 }
      );
    }

    // Limit size to 15MB
    if (file.size > 15 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Image file is too large (maximum 15MB allowed)." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let secureUrl = "";
    let publicId = "";

    if (isCloudinaryConfigured()) {
      const cloudinaryResult = await uploadImageToCloudinary(
        buffer,
        file.name,
        category
      );
      secureUrl = cloudinaryResult.secure_url;
      publicId = cloudinaryResult.public_id;
    } else {
      // In development or if Cloudinary keys are not yet provided in .env.local,
      // return a clear actionable message to the admin.
      return NextResponse.json(
        {
          error:
            "Cloudinary credentials are not configured. Please open .env.local and add your CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.",
          code: "CLOUDINARY_NOT_CONFIGURED",
        },
        { status: 400 }
      );
    }

    const newItem: GalleryItem = {
      id: publicId || `img-${Date.now()}`,
      public_id: publicId,
      src: secureUrl,
      alt: title.trim() || file.name.replace(/\.[^/.]+$/, ""),
      category: category.trim() || "Campus",
      createdAt: new Date().toISOString(),
    };

    await addGalleryItem(newItem);

    return NextResponse.json({
      success: true,
      message: "Photo uploaded successfully to Cloudinary and added to gallery!",
      item: newItem,
    });
  } catch (error: any) {
    console.error("Gallery upload error:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to upload photo. Please check Cloudinary credentials and network.",
      },
      { status: 500 }
    );
  }
}
