import { usePathname, useRouter } from 'next/navigation'

import querystring from 'querystring'

import useFilterParams from './useFilterParams'
import usePaginationParam from './usePaginationParams'
import useSortPatams from './useSortParams'
import { debounce } from '@/utils/debounce'

export const useQueryParam = (paramNames?: string[]) => {
  const router = useRouter()
  const pathname = usePathname()
  const paginationParams = usePaginationParam()
  const filterParams = useFilterParams(paramNames)
  const sortParams = useSortPatams()

  const handlePageChange = (page: number, limit: number) => {
    router.push(`
        ${pathname}?${querystring.stringify({
          ...filterParams,
          ...sortParams,
          page,
          limit,
        })}`)
  }

  const handleSortChange = (order: 'asc' | 'desc', order_by: string) => {
    router.push(`
        ${pathname}?${querystring.stringify({
          ...filterParams,
          ...paginationParams,
          order,
          order_by,
        })}`)
  }

  const handleFilterChange = debounce(
    (newFilter: Record<string, string | number>) => {
      router.push(`
        ${pathname}?${querystring.stringify({
          ...filterParams,
          ...sortParams,
          ...paginationParams,
          page: 1,
          ...newFilter,
        })}`)
    },
    500,
  )

  return {
    paginationParams,
    filterParams,
    sortParams,
    handlePageChange,
    handleFilterChange,
    handleSortChange,
  }
}
