'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import {
  Button,
  Table,
} from 'antd'
import Title from 'antd/es/typography/Title'


import defaultImage from '@/assets/default.png'

import type { ItemFormType, ItemsResponseType } from './_interfaces'
import Image from 'next/image'



const columns = (
) => [
  {
    title: 'No',
    dataIndex: 'key',
    key: 'key',
    width: 20
  },
  {
    title: 'Image',
    dataIndex: '',
    key: 'image',
    width: 200,
    render: (slug: string, record: ItemFormType, index: number) => {
      return (
        <div className='flex-cols'>
          <div className="w-32 h-32 relative">
            <Image
              src={record.image ?? defaultImage}
              alt="employee picture"
              layout="fill"
              objectFit="cover"
              loading="eager"
            />
          </div>
          <div className='w-32 text-center'>
            {record.filename ?? '-'}
          </div>
        
        </div>
      )
    }
  },
  {
    title: 'Overripe',
    dataIndex: 'overripe',
    key: 'overripe',
    render: (key: number) => {
      return (<>{key ?? '-'}%</>)
    }
  },
  {
    title: 'Ripe',
    dataIndex: 'ripe',
    key: 'ripe',
    render: (key: number) => {
      return (<>{key ?? '-'}%</>)
    }
  },
  {
    title: 'Underripe',
    dataIndex: 'underripe',
    key: 'underripe',
    render: (key: number) => {
      return (<>{key ?? '-'}%</>)
    }
  },
  {
    title: 'Unripe',
    dataIndex: 'unripe',
    key: 'unripe',
    render: (key: number) => {
      return (<>{key ?? '-'}%</>)
    }
  },
  {
    title: 'Rotten',
    dataIndex: 'rotten',
    key: 'rotten',
    render: (key: number) => {
      return (<>{key ?? '-'}%</>)
    }
  },
  {
    title: 'Empty',
    dataIndex: 'empty',
    key: 'empty',
    render: (key: number) => {
      return (<>{key ?? '-'}%</>)
    }
  },
  // {
  //   title: 'Action',
  //   dataIndex: 'key',
  //   key: 'action',
  //   render: (key: string, record: ItemFormType) => (
  //     <div className="flex gap-2">
  //       {/* <Tooltip title="view">
  //         <Button
  //           type="default"
  //           icon={<EyeOutlined />}
  //           onClick={() => handleView(record.id)}
  //         />
  //       </Tooltip> */}
  //       <Tooltip title="update">
  //         <Button
  //           type="primary"
  //           icon={<FormOutlined />}
  //           onClick={() => handleUpdate(record)
              
  //           }
  //         />
  //       </Tooltip>
  //       <Tooltip title="delete">
  //         <Button
  //           type="primary"
  //           icon={<DeleteOutlined />}
  //           onClick={() => handleDelete(record.id)}
  //           danger
  //         />
  //       </Tooltip>
  //     </div>
  //   ),
  // },
]

const ItemMaster = () => {
  const router = useRouter()

  // const [loading, setLoading] = useState(false);

  const handleRedirectImport = useCallback(() => {
    router.push('/items/import')
  }, [router])

  const handleRedirectScan = useCallback(() => {
    router.push('/items/scan')
  }, [router]);

  const data: Array<ItemsResponseType> = [
    {
      id: 1,
      filename: 'A.png',
      empty: 1,
      overripe: 2,
      ripe: 3,
      rotten: 4,
      underripe: 5,
      unripe: 6,
      image: "https://www.bpdp.or.id/uploads/images/image_750x_5e5a5b984db0b.jpg"
    }
  ]


  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <Title level={3} className="!my-0">
          Item
        </Title>
        <div className='flex gap-4'>
          <Button type="primary" onClick={handleRedirectImport}>
            Import Image
          </Button>
        </div>
      </div>
      {/* {loadingItems && (
        <div className="w-full text-center p-10">Loading Items...</div>
      )} */}

      {/* {!loadingItems && errorItems && (
        <div className="w-full text-center p-10 flex flex-col justify-center gap-4">
          Error fetching data!
          <Button className="m-auto" onClick={handleRefetchItems}>
            Try Again
          </Button>
        </div>
      )} */}

      <Table
            dataSource={data.map((o, idx) => ({
              ...o,
              key:
                idx + 1,
            }))}
            scroll={{ x: 1024 }}
            columns={columns(
            )}
          />
    </div>
  )
}

export default ItemMaster
