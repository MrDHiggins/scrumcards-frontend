import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const backendResponse = await fetch(`http://localhost:8080/sessions?host_id=${data.host_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      return NextResponse.json({ error: errorText }, { status: backendResponse.status });
    }

    const result = await backendResponse.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error creating new game:", error);
    return NextResponse.json({ error: "Failed to create game session" }, { status: 500 });
  }
}