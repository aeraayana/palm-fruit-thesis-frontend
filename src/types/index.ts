export type FormType = 'create' | 'update' | 'view'

export interface PaginationParamType {
  limit?: number
  page:number
  sortParams?: { order: string; order_by: string }
  filterParams?: Record<string, string>
}

export interface PaginationResponseType {
  total: number,
  per_page: number,
  current_page: number,
  last_page: number,
  first_page_url: string,
  last_page_url: string,
  next_page_url: string | null,
  prev_page_url: string | null,
  path: string,
  from: number,
  to: number,
}

export interface OptionItemType {
  label: string
  value: string
}