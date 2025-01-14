import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { USER_LOCAL_STORAGE_KEY, USER_LOCAL_STORAGE_KEY_EXTERNAL } from '@/constants'
import { saveExternalAccessToken, saveUser } from './utils/userUtils'

export async function middleware(request: NextRequest) {
  // get user request cookie
  // const userCookie = request.cookies.get(USER_LOCAL_STORAGE_KEY)?.value ?? ''
  // let isTokenValid = false

  // check if user cookie is in request
  // if (userCookie) {
  //   // TODO: hit api to get token validity
  //   isTokenValid = true
  // }
  // console.log('token is valid', isTokenValid, typeof userCookie)
  // validate if user token is valid
  // if (isTokenValid && userCookie) {
  //   // if valid delete cookie and use new token valid data
  //   request.cookies.delete(USER_LOCAL_STORAGE_KEY)

  //   // check if request path name if from auth or default path redirect to dashboard
  //   const response = ['/auth', '/'].includes(request.nextUrl.pathname)
  //   // ? NextResponse.redirect(new URL('/dashboard', request.url))
  //   ? NextResponse.redirect(new URL('/items', request.url))
  //     : NextResponse.next()

  //   // TODO: set new cookie data base on token valid data, when refresh token is valid
  //   saveUser(JSON.parse(userCookie))

  //   // return response
  //   return response
  // }

  
  //if url contains access token
  // if (request.nextUrl.searchParams.has("accessToken") && request.nextUrl.searchParams.get("accessToken") !== "") {
  //   const response = NextResponse.redirect(new URL("/auth?token=" + request.nextUrl.searchParams.get("accessToken") , request.url))
  //   saveExternalAccessToken({ token: request.nextUrl.searchParams.get("accessToken") ?? "" })
  //   return response
  // }

  // const response = request.nextUrl.pathname === '/auth' && request.nextUrl.searchParams.has("token")
  //     ? NextResponse.next()
  //     : NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_POPS_URL + "", request.url))
  // user cookie doesn't exit or token isn't valid redirect to auth

  const response = request.nextUrl.pathname === '/'
    ? NextResponse.redirect(new URL('/dashboard', request.url))
    : NextResponse.next()
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
