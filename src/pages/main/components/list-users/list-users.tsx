import React, { FC } from 'react'
import './list-users.scss'
import { User } from './components'
import { hookListUsers } from '../../../../shared/hook'

const ListUsers: FC = () => {
  const list = hookListUsers()

  return (
    <div className="list-users__left-mid">
      <ul className="list-users__list">
        {
          list &&
          list.map((user) => (
            <User
              key={user.id}
              name={user.name}
              avatar={user.avatar}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default ListUsers
