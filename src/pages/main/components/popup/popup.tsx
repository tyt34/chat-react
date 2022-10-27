import React, {FC} from 'react'
import './popup.scss'
import defAva from "../../assets/def-ava.png"

const Popup: FC = () => {

  return (
    <section className="popup">
      <div className="popup__container">
        <button className="popup__close">
          x
        </button>
        <img 
          className="popup__img" 
          src={defAva}
          alt="Увеличенное изображение для просмотра"
        />
      </div>
    </section>
  )
}

export default Popup

