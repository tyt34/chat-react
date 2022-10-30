import React, { FC, memo } from 'react'
import './user.scss'
import defAva from '../../../../assets/def-ava.png'

interface Props {
  name: string
  avatar: string
}

const User: FC<Props> = ({ name, avatar }: Props) => {
  return (
    <li className="user">
      <p className="user-text">
       {name}
      </p>
      <img
        className="user-ava"
        src={ avatar !== '' && avatar !== 'default' ? avatar : defAva}
        alt="аватарка"
      />
    </li>
  )
}

export default memo(User)
