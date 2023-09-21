import React, { FC } from 'react'
import { useUsers } from '../../../../shared/hook'
import './count-users.scss'

export const CountUsers: FC = () => {
  const list = useUsers()

  const amountUsers = list.length

  return (
    <div className="count-users__left-top">
      <span className="count-users__text-top">
        Online пользователей: {amountUsers}
      </span>
    </div>
  )
}
