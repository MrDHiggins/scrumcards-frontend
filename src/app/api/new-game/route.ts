import { NextResponse } from "next/server";
import { env } from "process";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const backendUrl = env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); 

    const backendResponse = await fetch(`${backendUrl}/sessions?host_id=${data.host_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    clearTimeout(timeout)

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      console.error("Backend error:", errorText);
      return NextResponse.json({ error: errorText }, { status: backendResponse.status });
    }

    const result = await backendResponse.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error creating new game:", error);
    return NextResponse.json({ error: "Failed to create game session" }, { status: 500 });
  }
}