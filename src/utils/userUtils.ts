import { setCookie, getCookie, deleteCookie } from 'cookies-next'

import { USER_LOCAL_STORAGE_KEY, USER_LOCAL_STORAGE_KEY_EXTERNAL } from '@/constants'

interface UserToken {
  // accessToken: string
  // refreshToken: string
  token: string
}

export function saveUser(user: UserToken): void {
  const expire = new Date()
  expire.setDate(expire.getDate() + 1)
  setCookie(USER_LOCAL_STORAGE_KEY, JSON.stringify(user), {
    maxAge: 60 * 60 * 24,
    expires: expire,
    path: '/',
  })
}

export function saveExternalAccessToken(user: UserToken): void{
  const expire = new Date()
  expire.setDate(expire.getDate() + 1)
  setCookie(USER_LOCAL_STORAGE_KEY_EXTERNAL, JSON.stringify(user), {
    maxAge: 60 * 60 * 24,
    expires: expire,
    path: '/',
  })
}

export function getToken(): UserToken | undefined {
  const user = getCookie(USER_LOCAL_STORAGE_KEY)
  return user !== undefined
    ? (JSON.parse(user as string) as UserToken)
    : undefined
}

export function getExternalAccessToken(): UserToken | undefined{
  const user = getCookie(USER_LOCAL_STORAGE_KEY_EXTERNAL)
  return user !== undefined
    ? (JSON.parse(user as string) as UserToken)
    : undefined
}

export function removeUser(): void {
  deleteCookie(USER_LOCAL_STORAGE_KEY)
  deleteCookie(USER_LOCAL_STORAGE_KEY_EXTERNAL)
}
