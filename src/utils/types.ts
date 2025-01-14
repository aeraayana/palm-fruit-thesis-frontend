import { PaginationResponseType } from "@/types"

export interface FetchContructorParams<InputT> {
  method?: 'get' | 'post' | 'delete' | 'put' | 'patch'
  path: string
  headers?: Record<string, string>
  body?: {
    sortParams?: { order: string; order_by: string }
    filterParams?: Record<string, string>
  } & InputT
  withAuth?: boolean
  isFormData?: boolean
}

// TODO: will be used as general type response
export interface ResponseWrapper<T> {
  status: number
  success: string
  message: string | string[]
  token: string
  data: DataWrapper<T> | T
  count: number
}

export interface DataWrapper<T> extends PaginationResponseType {
  data: T
  message: string | string[]
}
