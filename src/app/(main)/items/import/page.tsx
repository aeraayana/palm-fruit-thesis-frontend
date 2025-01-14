'use client'

import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import Title from 'antd/es/typography/Title'
import FormItem from '../_components/Form/importCsv'
import { ImportItemInputForm } from '../_interfaces'

const ItemCreate = () => {

  const handleSubmit = useCallback(
    async (data: ImportItemInputForm) => {
      
    },
    [],
  )

  return (
    <div className="w-full">
      <Title level={3} className="!my-0 !mb-2">
        Import Image
      </Title>
      <FormItem
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default ItemCreate
