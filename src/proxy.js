
import { NextResponse } from "next/server";

export function proxy(request) {
  const demoSession = request.cookies.get("demo-session")?.value;

  if (demoSession !== "authenticated") {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("next", request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
