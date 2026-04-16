// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const role = request.cookies.get('role')?.value;
  const { pathname } = request.nextUrl;

  // 1. Agar user login nahi hai aur dashboard access kar raha hai -> Redirect to Login
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // 2. Role-based protection: Student admin ka dashboard nahi dekh sakta
  if (pathname.startsWith('/dashboard/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard/student', request.url));
  }

  // 3. Agar user already login hai aur login page par ja raha hai -> Redirect to Dashboard
  if (pathname.startsWith('/auth') && token) {
    const dashboardPath = role === 'admin' ? '/dashboard/admin' : '/dashboard/student';
    return NextResponse.redirect(new URL(dashboardPath, request.url));
  }

  return NextResponse.next();
}

// Sirf in paths par middleware chalega
export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
}