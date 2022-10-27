import React, {FC, useState} from 'react'
import './forma.scss'
import { addMessageMainUser } from '../../main.slice'
import { useDispatch, useSelector } from 'react-redux'

const Forma: FC = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  function handleChangeText(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setText(e.target.value)
  }

  function handleButtonSend(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log(' click button ')
    dispatch(addMessageMainUser(text))
    setText('')
  }

  return (
    <div className="forma__area">
      <form className="forma__form">
        <textarea 
          className="forma__textarea" 
          value={text}
          onChange={handleChangeText}
          name="text"
          placeholder="Напишите сообщение..."
        />
        <div className="forma__buttons">
          <button 
            className="forma__button" 
            onClick={handleButtonSend}
            id="send-message"
          >
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

