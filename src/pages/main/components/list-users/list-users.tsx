import React, { FC } from 'react'
import './list-users.scss'
import { User } from './components'
import { useUsers } from '../../../../shared/hook'

const ListUsers: FC = () => {
  const list = useUsers()

  return (
    <div className="list-users__left-mid">
      <ul className="list-users__list">
        {
          list.length !== 0
            ? list.map((user) => (
              <User
                key={user.id}
                name={user.name}
                avatar={user.avatar}
              />
            ))
            : null
        }
      </ul>
    </div>
  )
}

export default ListUsers
