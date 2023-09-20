import React, { FC } from 'react'
import defAva from '../../assets/def-ava.png'
import { useMainUser } from '../../../../shared/hook'
import './main-user.scss'

export const MainUser: FC = () => {
  const { avatar, name } = useMainUser()

  const textName = name !== '' ? 'Вы: ' + name : 'Ваше имя'
  const userAvatar = avatar === '' ? defAva : avatar

  return (
    <div className="main-user__user">
      <p className="main-user__user-name">{textName}</p>
      <img
        className="main-user__user-ava main-user__ava-norm"
        id="user-ava"
        src={userAvatar}
        alt="аватарка"
      />
    </div>
  )
}
