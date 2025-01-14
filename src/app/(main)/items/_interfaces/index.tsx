import { UploadFile } from "antd"
import { RcFile } from "antd/es/upload"

export interface Item {
  id: number,
  image: string,
  overripe: number,
  ripe: number,
  underripe: number,
  unripe: number,
  rotten: number,
  empty: number,
  filename: string,
}

// COMPONENT TYPES
export type ItemFormType = Omit<Item, 'id'> & {
  key: number | undefined,
  id: number
}

export interface FormItemProps {
  initialValues?: ItemFormType
  isView?: boolean
  handleSubmit?: (ItemData: ImportItemInputForm) => void
  loadingSubmit?: boolean
}

export interface FormScanProps {
  initialValues?: ItemFormType
  isView?: boolean
  handleSubmit: (ItemData: ScanItemInputForm) => void
  loadingSubmit?: boolean
}

// REPOSITORY types

// get-all-Item
export interface ItemsResponseType extends Item { }

export type CreateItemInputType = Omit<ItemFormType, 'key' | 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>

export type UpdateItemInputType = Omit<ItemFormType, 'key' | 'createdAt' | 'updatedAt' | 'deletedAt'>

export interface ImportItemInputForm{
  file: UploadFile
}

export interface ImportItemInputType{
  file: RcFile | undefined
}

export interface ScanItemInputForm{
  airwaybill: string
}

export interface CreateItemResponseType{
  message: string,
  status: number
}
