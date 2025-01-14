import { OptionItemType } from '@/types'
import React from 'react'
import TableHeaderInput from '..'

export function generateLocalTableHeaderInput<T>({
  key,
  sortOrder,
  utilProps,
  inputProps,
  isLocalSort = true,
  render,
  fixed,
  width = 400,
}: {
  key: keyof T
  sortOrder?: 'asc' | 'desc'
  utilProps: {
    filteredValue?: string | number
    sorter?: (a: T, b: T) => number
  }
  inputProps: {
    title: string
    placeholder?: string
    onFilterChange?: (newFilter: Record<string, string | number>) => void
    type?: 'input' | 'inputNumber' | 'select' | 'date' | 'daterange'
    onSortChange?:
      | ((order: 'desc' | 'asc', order_by: string) => void)
      | undefined
  }
  isLocalSort?: boolean
  fixed?: 'left' | 'right'
  render?: (prop: string) => React.ReactNode
  width?: number
}) {
  return {
    title: inputProps.title,
    children: [
      {
        title: (
          <TableHeaderInput
            filterKey={key as string}
            order={sortOrder}
            isAsyncSort={!isLocalSort}
            {...inputProps}
          />
        ),
        dataIndex: key,
        key: key,
        rowSpan: 2,
        align: 'center',
        render,
      },
    ],
    dataIndex: key,
    key: key,
    width,
    sorter: utilProps.sorter,
    ...(utilProps.filteredValue && {
      filteredValue: [utilProps.filteredValue],
      onFilter: (value: unknown, record: T) => {
        return typeof record[key] === 'string'
          ? (record[key] as string)
              .toLowerCase()
              .includes((utilProps.filteredValue as string).toLowerCase())
          : utilProps.filteredValue === record[key]
      },
    }),
    ...(isLocalSort && sortOrder && { sortOrder }),
    fixed,
  }
}

export function generateLocalTableHeaderInputAsync<T>({
  key,
  inputProps,
  fixed,
  render,
  width = 400,
}: {
  key: string
  inputProps: {
    title: string
    placeholder?: string
    type?: 'input' | 'inputNumber' | 'select' | 'date' | 'daterange'
    options?: OptionItemType[]
    disableSort?: boolean
    disableSearch?: boolean
    filterKeys: string[]
  }
  fixed?: 'left' | 'right'
  render?: (prop: string, row: T) => React.ReactNode
  width?: number
}) {
  return {
    title: <TableHeaderInput filterKey={key} {...inputProps} isAsync />,
    dataIndex: key,
    key: key,
    width,
    fixed,
    render,
  }
}
