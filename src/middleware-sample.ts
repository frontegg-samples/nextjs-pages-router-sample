// Rename this file to middleware.ts to wrap the entire application
// and enable automatic redirection to the login page or main app.
import { NextRequest } from "next/server";
import { handleSessionOnEdge } from "@frontegg/nextjs/edge";

export const middleware = async (request: NextRequest) => {
  const { pathname, searchParams } = request.nextUrl;
  const headers = request.headers;

  // Skip middleware for static files like images
  if (pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp)$/i)) {
    return;
  }

  return handleSessionOnEdge({ request, pathname, searchParams, headers });
};

export const config = {
  matcher: "/(.*)",
};
