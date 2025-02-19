"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";

export interface UploadedImage {
  src: string;
  alt: string;
}

export async function uploadFile(formData: FormData): Promise<UploadedImage> {
  const file = formData.get("image") as File;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  await fs.writeFile(`./public/uploads/${file.name}`, buffer);

  revalidatePath("/");
  return { src: `/uploads/${file.name}`, alt: formData.get("alt") as string };
}