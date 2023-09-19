import React, { FC } from 'react'
import './count-users.scss'
import { useUsers } from '../../../../shared/hook'

export const CountUsers: FC = () => {
  const list = useUsers()

  return (
    <div className="count-users__left-top">
      <span className="count-users__text-top">
        Online пользователей: {list.length}
      </span>
    </div>
  )
}
