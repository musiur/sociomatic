import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const privateRoutes = [
    "/dashboard",
    "/checkout",
  ];
  const publicRoutes = ["/login", "/register", "/reset-password", "/forget-password", "/change-password"];

  // Helper function to check if path matches any route pattern
  const matchesRoute = (path: string, routes: string[]) => {
    return routes.some(route => {
      // Exact match
      if (route === path) return true;
      // Check if path starts with route and next char is '/' or end of string
      if (route.endsWith('/')) {
        return path.startsWith(route);
      }
      return false;
    });
  };

  const isPrivateRoute = matchesRoute(path, privateRoutes);
  const isPublicRoute = matchesRoute(path, publicRoutes);

  const token = request.cookies.get('token')?.value || '';
  const from = request.cookies.get('from')?.value || "/dashboard";

  console.log(path, isPrivateRoute, token, from);

  // If the user is trying to access a private route without a token, redirect to login
  if (isPrivateRoute && !token) {
    const fullUrl = path + request.nextUrl.search; // Combine pathname with query parameters
    (await cookies()).set("from", fullUrl);
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
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static (public static files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|static).*)',
  ],
};