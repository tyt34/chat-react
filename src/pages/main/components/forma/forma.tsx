import React, { FC, useState, useRef } from 'react'
import './forma.scss'
import { addMessageMainUser } from '../../main.slice'
import { useDispatch } from 'react-redux'
import { socketOptions } from '../../main'

interface Props {
  socket: any
}

const textForFile = 'Файл не выбран'

const Forma: FC<Props> = ({ socket }: Props) => {
  const [text, setText] = useState('')
  const [nameFile, setNameFile] = useState(textForFile)
  const dispatch = useDispatch()
  const inputFile = useRef<any>(null)

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value)
  }

  const handleButtonSend = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (text !== '') {
      let imgInBase64: any = ''

      if (inputFile.current?.files?.[0] !== undefined) { // для отправки картинки и текста
        const reader = new FileReader()
        reader.addEventListener('load', () => {
          imgInBase64 = reader.result
          dispatch(addMessageMainUser({ text, imgInBase64 }))
          socket.emit(socketOptions.sendChatMessage, {
            message: text,
            imageFile: imgInBase64
          })
          setText('')
        })
        reader.readAsDataURL(inputFile.current?.files?.[0])
        inputFile.current.value = null
        setNameFile(textForFile)
      } else { // для отправки текста
        dispatch(addMessageMainUser({ text, imgInBase64: '' }))
        socket.emit(socketOptions.sendChatMessage, {
          message: text,
          imageFile: ''
        })
        setText('')
      }
    }
  }

  const handleChange = (): void => {
    if (inputFile.current?.files?.[0] !== undefined) {
      setNameFile(inputFile.current?.files?.[0].name)
      setText((prevText) => { return prevText + ' ' })
    }
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
              onChange={handleChange}
              ref={inputFile}
              id="send-image"
              className="forma__input"
              type="file"
              accept=".png,.jpeg,.ico,.gif,.jpg"
            />
            <div className="forma__input-prev">
              <p className="forma__prev-text">
                {nameFile}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Forma
