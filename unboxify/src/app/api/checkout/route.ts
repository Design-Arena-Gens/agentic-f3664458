import { NextResponse } from "next/server";
import { artworks } from "@/data/artworks";

export async function POST(request: Request) {
  const body = await request.json();
  const { slug, email } = body ?? {};

  if (!slug || !email) {
    return NextResponse.json({ error: "Missing slug or email" }, { status: 400 });
  }

  const artwork = artworks.find((item) => item.slug === slug);

  if (!artwork) {
    return NextResponse.json({ error: "Artwork not found" }, { status: 404 });
  }

  return NextResponse.json({
    downloadLinks: artwork.formats.map((format) => ({
      label: format.label,
      url: format.url,
      fileType: format.fileType,
    })),
    license: artwork.license,
  });
}
