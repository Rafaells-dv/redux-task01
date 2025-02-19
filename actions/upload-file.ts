"use server";
import { put } from "@vercel/blob";

export async function uploadFile(formData: FormData) {
    const file = formData.get("image") as File;
    if (!file) throw new Error("Nenhum arquivo enviado.");

    const fileBuffer = await file.arrayBuffer();

    const token = process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN;
    if (!token) throw new Error("BLOB_READ_WRITE_TOKEN não está definido.");

    const blob = await put(`uploads/${file.name}`, fileBuffer, {
        access: "public",
        contentType: file.type,
        token,
    });

    return { src: blob.url, alt: formData.get("alt") as string };
}