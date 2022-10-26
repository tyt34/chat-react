import React, {FC} from 'react'
import './forma.scss'

const Forma: FC = () => {

  return (
    <div className="forma__area">
      <form className="forma__form">
        <textarea 
          className="forma__textarea"  
          name="text"
          placeholder="Напишите сообщение..."
        ></textarea>
        <div className="forma__buttons">
          <button className="forma__button" id="send-message">
            Отправить сообщение
          </button>
          <div className="forma__input-send">
            <label
              id="label-input"
              className="forma__input-label" 
              htmlFor="send-image"
            >
              <p>
                Прикрепить картинку
              </p>
            </label>
            <input 
              id="send-image"
              className="forma__input" 
              type="file"
              accept=".png,.jpeg,.ico,.gif,.jpg"
            />
            <div className="forma__input-prev">
              <p className="forma__prev-text">
                Файл не выбран
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Forma

