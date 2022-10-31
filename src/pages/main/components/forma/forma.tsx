import React, { FC, useState, useRef } from 'react'
import './forma.scss'
import { addMessageMainUser } from '../../../../app/app.slice'
import { useAppDispatch } from '../../../../shared/hook'
import { socketOptions } from '../../../../shared/constants/main'
import { Socket } from 'socket.io-client'

interface Props {
  socket: Socket
}

const textForFile = 'Файл не выбран'

const Forma: FC<Props> = ({ socket }: Props) => {
  const [text, setText] = useState('')
  const [nameFile, setNameFile] = useState(textForFile)
  const dispatch = useAppDispatch()
  const inputFile = useRef<any>(null)

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value)
  }

  const handleButtonSend = (e: React.FormEvent<HTMLButtonElement>): void => {
    if (text !== '') {
      let imgInBase64: any = ''

      /**
       * смещение скролла, только если сам пользователь написал сообщение
       */
      const scrollToDown = (): void => {
        const scrollBlock = document.getElementsByClassName('list-messages')[0]
        scrollBlock.scrollTo(0, scrollBlock.scrollHeight)
      }
      setTimeout(scrollToDown, 250)

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
            type='button'
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
