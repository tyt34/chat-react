import React, {FC, useState, useEffect} from 'react'
import './list-users.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../app/store'
import { User } from './components'

const ListUsers: FC = () => {
  const listUsers = useSelector((store: RootState) => store.listUsers)

  console.log(' users: ', listUsers)

  return (
    <div className="list-users__left-mid">
      <ul className="list-users__list">
        { 
          listUsers && 
          listUsers.map((user) => (
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

