import React, { FC } from 'react'
import './main-user.scss'
import defAva from '../../assets/def-ava.png'
import { useMainUser } from '../../../../shared/hook'

const MainUser: FC = () => {
  const { avatar, name } = useMainUser()
  console.log(' => > ', name)

  return (
    <div className="main-user__user">
      <p className="main-user__user-name">
        { name ? 'Вы: ' + name : 'Ваше имя'}
      </p>
      <img
        className="main-user__user-ava main-user__ava-norm"
        id="user-ava"
        src={ avatar && avatar !== 'default' ? avatar : defAva}
        alt="аватарка"
      />
    </div>
  )
}

export default MainUser
