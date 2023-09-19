import React, { FC } from 'react'
import { User } from './components'
import { WrapperScroll } from '../wrapper-scroll'
import { useUsers } from '../../../../shared/hook'
import './list-users.scss'

export const ListUsers: FC = () => {
  const list = useUsers()

  return (
    <ul className="list-users__list">
      <WrapperScroll type="users">
        <div className="list-users__inside">
          {list.length !== 0
            ? list.map((user) => (
                <User
                  key={user.id}
                  name={user.name}
                  avatar={user.avatar}
                />
              ))
            : null}
        </div>
      </WrapperScroll>
    </ul>
  )
}
