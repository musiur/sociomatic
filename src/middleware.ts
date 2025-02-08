import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const privateRoutes = ["/dashboard"];
  const publicRoutes = ["/login", "/register", "/reset-password", "/forget-password", "/change-password", "/checkout"];

  const isPrivateRoute = privateRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token = request.cookies.get('token')?.value || '';
  const from = request.cookies.get('from')?.value || "/dashboard";

  console.log(path, isPrivateRoute, token, from);

  // If the user is trying to access a private route without a token, redirect to login
  if (isPrivateRoute && !token) {
    (await cookies()).set("from", path);
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If the user is trying to access a public route with a token, redirect to the 'from' URL
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL(from, request.url));
  }

  // Security headers
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

export const config = {
  matcher: [
    "/dashboard", "/login", "/register", "/reset-password", "/forget-password", "/change-password", "/checkout"
    // '/((?!_next/static|_next/image|favicon.ico|api|static).*)',
  ],
};