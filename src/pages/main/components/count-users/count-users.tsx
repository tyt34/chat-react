import React, { FC } from 'react'
import './count-users.scss'
import { hookListUsers } from '../../../../shared/hook'

const CountUsers: FC = () => {
  const list = hookListUsers()

  return (
    <div className="count-users__left-top">
      <span className="count-users__text-top">
        Online пользователей: {list.length}
      </span>
    </div>
  )
}

export default CountUsers
