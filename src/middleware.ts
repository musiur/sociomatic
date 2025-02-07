// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const isAuthenticated = checkAuthentication(req); // Your authentication logic

  const protectedPaths = ['/dashboard']; // Example protected routes

  const pathname = req.nextUrl.pathname;

  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtectedPath && !isAuthenticated) {
    // Redirect to login or show an unauthorized message
    const url = req.nextUrl.clone();
    url.pathname = '/login'; // Or wherever your login page is
    return NextResponse.redirect(url);

     //OR, if you prefer to show a message on the same page:
     // return new NextResponse('Unauthorized. Please Login.', { status: 401 });

  }

  if (pathname === '/login' && isAuthenticated) {
     const url = req.nextUrl.clone();
     url.pathname = '/'; // Redirect to home or dashboard after successful login
     return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Example authentication check (replace with your actual logic)
function checkAuthentication(req: NextRequest): boolean {
  // Check for a token in cookies, local storage, or headers
  const token = req.cookies.get('token'); // Example using cookies

  // Or check local storage:
  // const token = localStorage.getItem('token'); // This won't work directly in middleware, see below.

  // Or check headers:
  // const authHeader = req.headers.get('Authorization');

  // Validate the token (e.g., against your backend)
  if (token) {
    //  Add your token verification logic here.  This is crucial.
    //  For example, you might fetch user data using the token and check if the session is valid.
    return true; //  Return true ONLY if the token is valid.
  }

  return false;
}


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'], // Match all routes EXCEPT those listed
};