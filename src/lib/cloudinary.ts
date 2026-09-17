import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

export function isCloudinaryConfigured(): boolean {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  return !!(
    cloudName &&
    apiKey &&
    apiSecret &&
    cloudName !== "your_cloudinary_cloud_name" &&
    apiKey !== "your_api_key" &&
    apiSecret !== "your_api_secret"
  );
}

export function configureCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  return cloudinary;
}

export async function uploadImageToCloudinary(
  fileBuffer: Buffer,
  fileName: string,
  category: string = "Campus"
): Promise<UploadApiResponse> {
  if (!isCloudinaryConfigured()) {
    throw new Error(
      "Cloudinary credentials are not configured. Please add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env.local."
    );
  }

  const client = configureCloudinary();

  return new Promise((resolve, reject) => {
    const uploadStream = client.uploader.upload_stream(
      {
        folder: "bgs_gallery",
        resource_type: "image",
        tags: ["bgs_gallery", category.toLowerCase().trim()],
        context: {
          category: category,
          original_filename: fileName,
        },
      },
      (error, result) => {
        if (error || !result) {
          return reject(error || new Error("Upload failed to return result"));
        }
        resolve(result);
      }
    );

    uploadStream.end(fileBuffer);
  });
}

export async function deleteImageFromCloudinary(publicId: string) {
  if (!isCloudinaryConfigured()) {
    return { result: "skipped_not_configured" };
  }

  const client = configureCloudinary();
  try {
    const res = await client.uploader.destroy(publicId);
    return res;
  } catch (error) {
    console.error("Cloudinary destroy error:", error);
    throw error;
  }
}
