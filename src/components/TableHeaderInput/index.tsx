
import { useQueryParam } from '@/hooks/useQueryParam'
import { OptionItemType } from '@/types'
import {
  CaretDownOutlined,
  CaretUpOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { DatePicker, Divider, Input, InputNumber, Select } from 'antd'
import dayjs from 'dayjs'

export interface TableHeaderInputProps {
  title: string
  filterKeys?: string[]
  filterKey: string
  placeholder?: string
  order?: string
  order_by?: string
  isAsync?: boolean
  isAsyncSort?: boolean
  defaultValue?: string
  disableSort?: boolean
  disableSearch?: boolean
  onFilterChange?: (newFilter: Record<string, string | number>) => void
  onSortChange?: (order: 'asc' | 'desc', order_by: string) => void
  type?: 'input' | 'inputNumber' | 'select' | 'date' | 'daterange'
  options?: OptionItemType[]
}

const TableHeaderFilter = ({
  title,
  defaultValue,
  order,
  order_by,
  placeholder,
  filterKey,
  isAsyncSort,
  onFilterChange,
  onSortChange,
  type = 'input',
  disableSort = false,
  disableSearch = false,
  options,
}: TableHeaderInputProps) => {
  return (
    <div className="flex flex-col justify-center gap-1">
      {isAsyncSort && (
        <>
          <div
            className={`flex justify-between items-center ${
              !disableSort ? 'hover:cursor-pointer' : 'hover:cursor-default'
            }`}
            onClick={() => {
              if (!disableSort && onSortChange)
                onSortChange(
                  order === 'desc' || order === undefined ? 'asc' : 'desc',
                  filterKey,
                )
            }}
          >
            {title}{' '}
            {!disableSort && (
              <div
                className="flex flex-col justify-center items-center gap-0"
                onClick={() => {
                  if (onSortChange)
                    onSortChange(
                      order === 'desc' || order === undefined ? 'asc' : 'desc',
                      filterKey,
                    )
                }}
              >
                <CaretUpOutlined
                  className="!m-0 h-2"
                  style={{
                    color:
                      order_by && order_by === filterKey && order === 'asc'
                        ? '#009ef7'
                        : '#bbbbbb',
                  }}
                />
                <CaretDownOutlined
                  className="!m-0 h-2"
                  style={{
                    color:
                      order_by && order_by === filterKey && order === 'desc'
                        ? '#009ef7'
                        : '#bbbbbb',
                  }}
                />
              </div>
            )}
          </div>
          {!disableSearch && (
            <Divider
              className="!my-2"
              style={{
                width: 'calc(100% + 32px)',
                left: '-16px',
                position: 'relative',
              }}
            />
          )}
        </>
      )}

      {!disableSearch && (
        <>
          {type === 'input' && (
            <Input
              prefix={<SearchOutlined />}
              defaultValue={defaultValue}
              placeholder={placeholder}
              onChange={evt => {
                if (onFilterChange)
                  onFilterChange({ [filterKey]: evt.target.value })
              }}
            />
          )}

          {type === 'inputNumber' && (
            <InputNumber
              prefix={<SearchOutlined />}
              defaultValue={defaultValue}
              placeholder={placeholder}
              onChange={value => {
                if (onFilterChange && value)
                  onFilterChange({ [filterKey]: value })
              }}
            />
          )}

          {type === 'select' && (
            <Select
              allowClear
              defaultValue={
                defaultValue && defaultValue !== '' ? defaultValue : undefined
              }
              placeholder={placeholder}
              options={options}
              onChange={value => {
                if (onFilterChange) onFilterChange({ [filterKey]: value })
              }}
            />
          )}

          {type === 'date' && (
            <DatePicker
              {...(defaultValue ? { defaultValue: dayjs(defaultValue) } : {})}
              placeholder={placeholder}
              onChange={value => {
                if (onFilterChange)
                  onFilterChange({
                    [filterKey]: value
                      ? dayjs(value).format('YYYY-MM-DDTHH:mm:ss')
                      : '',
                  })
              }}
            />
          )}
        </>
      )}
    </div>
  )
}

const TableHeaderAsync = (props: TableHeaderInputProps) => {
  const { filterParams, sortParams, handleFilterChange, handleSortChange } =
    useQueryParam(props.filterKeys)

  return (
    <TableHeaderFilter
      {...props}
      {...sortParams}
      defaultValue={filterParams[props.filterKey]}
      onFilterChange={handleFilterChange}
      onSortChange={handleSortChange}
      isAsyncSort
    />
  )
}

const TableHeaderInput = ({
  isAsync = false,
  ...props
}: TableHeaderInputProps) => {
  if (isAsync) return <TableHeaderAsync {...props} />

  return <TableHeaderFilter {...props} />
}

export default TableHeaderInput
