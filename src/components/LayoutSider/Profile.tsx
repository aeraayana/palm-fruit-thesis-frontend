import React, { useContext, useEffect } from 'react'

import { Typography } from 'antd'
import { AuthContext } from '@/global_context/Auth'

const { Text } = Typography

const Profile = () => {
  const { user, logout, getUser } = useContext(AuthContext)

  useEffect(() => {
    if (user === undefined)
      getUser()
  }, [getUser, user])
  
  return (
    <div className="flex-shrink-0 flex border-t border-green-200 bg-primary p-4 absolute bottom-0 right-0 left-0">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-9 w-9 rounded-full"
            src={user?.employee.image_path ?? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
            alt=""
          />
        </div>
        <div className="ml-3 flex flex-col">
          <Text className="text-sm font-medium !text-white">{ user?.username }</Text>
          <Text
            className="text-xs font-medium !text-indigo-200 !group-hover:text-white hover:cursor-pointer"
            onClick={logout}
          >
            Log Out
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Profile
