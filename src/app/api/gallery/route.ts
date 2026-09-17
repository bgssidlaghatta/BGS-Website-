import { NextRequest, NextResponse } from "next/server";
import { getGalleryItems } from "@/lib/gallery-store";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    let items = await getGalleryItems();

    if (category && category !== "All") {
      items = items.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    return NextResponse.json({
      success: true,
      items,
    });
  } catch (error) {
    console.error("Gallery GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery items", items: [] },
      { status: 500 }
    );
  }
}
