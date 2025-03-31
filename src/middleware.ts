import { NextRequest } from 'next/server';
import { handleSessionOnEdge } from '@frontegg/nextjs/edge';

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
  matcher: '/(.*)',
};
