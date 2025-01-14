import React, { PropsWithChildren, useState } from 'react'
import { usePathname } from 'next/navigation'
import dayjs from 'dayjs'

import { Breadcrumb, Button, Drawer, Layout, Typography } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import Menus from './Menus'

const { Header, Content, Sider } = Layout
const { Title, Text } = Typography

const LayoutSider = ({ children }: PropsWithChildren) => {
  const path = usePathname()
  const [menuOpened, setMenuOpened] = useState(true)
  const [breakpoint, setBreakpoint] = useState(false)

  return (
    <Layout className="h-screen sticky top-0" hasSider={true}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsed={!menuOpened || breakpoint}
        onBreakpoint={broken => {
          setMenuOpened(!broken)
          setBreakpoint(broken)
        }}
      >
        <Menus isOpen={menuOpened} />
      </Sider>

      <Drawer
        placement="left"
        onClose={() => setMenuOpened(false)}
        open={menuOpened && breakpoint}
        bodyStyle={{ padding: 0 }}
        headerStyle={{ backgroundColor: '#9B3934' }}
      >
        <Menus
          onClick={() => {
            setMenuOpened(false)
          }}
          isOpen={menuOpened}
        />
      </Drawer>

      <Layout>
        <Header className="!bg-white !p-0 flex justify-between">
          <div className='flex gap-2 items-center'>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMenuOpened(!menuOpened)}
              className="text-base w-8 h-8 my-auto mx-2"
            />
          </div>
          <div className="!my-auto mx-2 flex flex-col items-start">
            <Title level={4} className="!m-0">
            </Title>
            <Text color='rgba(255,255,255,1)'>{dayjs().locale('id').format('dddd, D MMMM, YYYY')}</Text>
          </div>
        </Header>

        <Content className="px-4 py-4 overflow-auto flex flex-col">
          {path && (
            <Breadcrumb
              items={path
                .split('/')
                .filter(p => p !== '' && !p.match('^[0-9]'))
                .map(p => ({
                  title: p.charAt(0).toUpperCase() + p.slice(1),
                }))}
            />
          )}
          <div className="p-4 mt-4 bg-white flex-1">{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutSider
