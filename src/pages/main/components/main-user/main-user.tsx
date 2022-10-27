import React, {FC} from 'react'
import './main-user.scss'
import { useSelector } from 'react-redux'
import defAva from "../../assets/def-ava.png"
import { RootState } from '../../main.slice'

const MainUser: FC = () => {
  const {id, avatar, name} = useSelector((store: RootState) => store.mainUser)

  //console.log(' main user: ', id, name, avatar)

  //const name = ''
  //const avatar = ''

  //console.log(' name: ', name)

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

