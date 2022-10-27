import React, {FC} from 'react'
import './main-user.scss'
import defAva from "../../assets/def-ava.png"

interface Props {
  user: {
    avatar: string
    name: string
  }
}

const MainUser: FC<Props> = ({user}: Props) => {
  const {avatar, name} = user

  console.log(' name: ', name)

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

