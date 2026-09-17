import fs from "fs/promises";
import path from "path";

export interface GalleryItem {
  id: string;
  public_id: string;
  src: string;
  alt: string;
  category: string;
  createdAt: string;
  isSeed?: boolean;
}

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "gallery.json");

export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const items: GalleryItem[] = JSON.parse(data);
    return items;
  } catch (error) {
    console.error("Error reading gallery data:", error);
    return [];
  }
}

export async function addGalleryItem(item: GalleryItem): Promise<GalleryItem[]> {
  try {
    const items = await getGalleryItems();
    // Newest items first
    const updated = [item, ...items];
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(updated, null, 2), "utf-8");
    return updated;
  } catch (error) {
    console.error("Error saving gallery item:", error);
    throw error;
  }
}

export async function deleteGalleryItem(idOrPublicId: string): Promise<{ deleted: GalleryItem | null; items: GalleryItem[] }> {
  try {
    const items = await getGalleryItems();
    const itemToDelete = items.find(
      (item) => item.id === idOrPublicId || item.public_id === idOrPublicId
    ) || null;

    if (!itemToDelete) {
      return { deleted: null, items };
    }

    const updated = items.filter(
      (item) => item.id !== idOrPublicId && item.public_id !== idOrPublicId
    );
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(updated, null, 2), "utf-8");
    return { deleted: itemToDelete, items: updated };
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    throw error;
  }
}
