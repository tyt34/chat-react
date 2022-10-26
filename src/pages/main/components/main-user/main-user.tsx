import React, {FC} from 'react'
import './main-user.scss'

const MainUser: FC = () => {

  return (
    <div className="main-user__user">
      <p className="main-user__user-name">
        Ваше имя
      </p>
      <img 
        className="main-user__user-ava main-user__ava-norm"
        id="user-ava" 
        src="./images/def-ava.png" 
        alt="аватарка"
      />
    </div>
  )
}

export default MainUser

