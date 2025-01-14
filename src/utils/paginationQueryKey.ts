import { PaginationParamType } from '@/types'

export const paginationQueryKey = (
  key: string,
  params?: PaginationParamType,
  extraParam?: string,
) => {
  return [
    `get-${key}-data-${params?.page ?? 1}-${params?.limit ?? 10}-${
      JSON.stringify(params?.filterParams) ?? 'filterParams'
    }-${
      params?.sortParams
        ? `${params.sortParams.order_by}:${params.sortParams.order}`
        : '-sortparam'
    }` + extraParam,
  ]
}
