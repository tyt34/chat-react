import React, { FC } from 'react'
import './count-users.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../app/store'

const CountUsers: FC = () => {
  const listUsers = useSelector((store: RootState) => store.listUsers)

  return (
    <div className="count-users__left-top">
      <span className="count-users__text-top">
        Online пользователей: {listUsers.length}
      </span>
    </div>
  )
}

export default CountUsers
