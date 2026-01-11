import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  return NextResponse.json(
    {
      status: "received",
      message: "Our team will get in touch shortly.",
    },
    { status: 200 },
  );
}
