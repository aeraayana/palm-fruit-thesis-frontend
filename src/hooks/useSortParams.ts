import { useSearchParams } from 'next/navigation'

const useSortParams = () => {
  const params = useSearchParams()

  const orderParams = params?.get('order') ?? ''
  const orderByParam = params?.get('order_by') ?? ''
  const sortParams = {
    order: orderParams,
    order_by: orderByParam,
  }

  return sortParams
}

export default useSortParams
