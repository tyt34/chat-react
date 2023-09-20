import React, { FC, memo } from 'react'
import './user.scss'

interface Props {
  name: string
  avatar: string
}

const UserComponent: FC<Props> = ({ name, avatar }: Props) => (
  <li className="user">
    <p className="user-text">{name}</p>
    <img
      className="user-ava"
      src={avatar}
      alt="аватарка"
    />
  </li>
)

export const User = memo(UserComponent)
