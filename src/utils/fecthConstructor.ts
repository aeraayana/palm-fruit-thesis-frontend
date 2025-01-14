import { AxiosRequestConfig } from 'axios'

import querystring from 'querystring'

import { formDataBuilder } from './formDataBuilder'
import { getToken } from './userUtils'
import axiosClient from './axiosClient'
import type { FetchContructorParams, ResponseWrapper } from './types'

const fetchConstructor = async <ResponseT, InputT = unknown>({
  method = 'get',
  path,
  headers,
  body,
  withAuth = true,
  isFormData = false,
}: FetchContructorParams<InputT>) => {
  let token
  let data
  let queryParams

  if (withAuth) {
    token = await getToken()
    if (token === undefined) window.location.href = '/auth'
  }

  if (isFormData) {
    const formData = new FormData()
    formDataBuilder(formData, body)
    data = formData
  } else if (['get', 'delete'].includes(method) && body) {
    const { sortParams, filterParams, ...params } = body

    const filter = (filterParams
         ? Object.keys(filterParams)
            .filter(key => filterParams[key] !== '')
            .map(key => `${key}:${filterParams[key]}`)
      : [])
    let finalFilter = {}
    if (filter.length != 0 && (filter[0].split(':')[0] !== 'a' && filter[0].split(':')[1] !== 'a')) {
      const filterKey = filter[0].split(':')[0]
      const filterValue = filter[0].split(':')[1]

      finalFilter = {
        [filterKey] : filterValue
      }
    } else {
      finalFilter = {}
    }

    queryParams = {
      ...(params as InputT),
      ...(sortParams
        ? { sort: `${sortParams.order_by}:${sortParams.order}` }
        : {}),
      ...(finalFilter)
      // ...(filterParams
      //   ? Object.keys(filterParams)
      //       .filter(key => filterParams[key] !== '')
      //       .map(key => `${key}:${filterParams[key]}`)
      //       .reduce(
      //         (prev, param, index) => ({
      //           ...prev,
      //           [`searches[${index}]`]: param,
      //         }),
      //         {},
      //       )
      //   : {}),
    }
  } else {
    data = JSON.stringify(body)
  }

  const reqConfig: AxiosRequestConfig = {
    headers: {
      ...headers,
      ...(withAuth && {
        Authorization: `Bearer ${token?.token}`,
      }),
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    },
  }

  return await (['get', 'delete'].includes(method)
    ? axiosClient[method]<ResponseWrapper<ResponseT>>(
        path + (body ? `?${querystring.stringify(queryParams)}` : ''),
        reqConfig,
      )
    : axiosClient[method]<ResponseWrapper<ResponseT>>(path, data, reqConfig))
}

export default fetchConstructor
