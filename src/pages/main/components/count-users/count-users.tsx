import React, {FC} from 'react'
import './count-users.scss'

const CountUsers: FC = () => {

  return (
    <div className="count-users__left-top">
      <span className="count-users__text-top">
        Online пользователей: 
      </span>
    </div>
  )
}

export default CountUsers

