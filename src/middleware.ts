import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only enable password gate in production
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const BASIC_AUTH = process.env.BASIC_AUTH || "";
  const [user, pwd] = BASIC_AUTH.split(":");

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");
    if (scheme === "Basic") {
      const [givenUser, givenPwd] = atob(encoded).split(":");
      if (givenUser === user && givenPwd === pwd) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Auth required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};