import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { parseCookies, setCookie as setNookie, destroyCookie } from 'nookies';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get a cookie by name
export function getCookie(name: string): string | undefined {
  const cookies = parseCookies();
  return cookies[name];
}

// Set a cookie
export function setCookie(name: string, value: string, options: any = {}): void {
  setNookie(null, name, value, {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
    ...options,
  });
}

// Delete a cookie by name
export function deleteCookie(name: string): void {
  destroyCookie(null, name);
}

// Delete all cookies
export function deleteAllCookies(): void {
  const cookies = parseCookies();
  Object.keys(cookies).forEach(cookie => {
    destroyCookie(null, cookie);
  });
}
 


