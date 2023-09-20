import React, { FC, useState, useRef } from 'react'
import {
  socketOptions,
  textForFile
} from '../../../../shared/constants/main'
import { InputFile } from './components'
import { Socket } from 'socket.io-client'
import { addMessageMainUser } from '../../../../app/app.slice'
import { useAppDispatch } from '../../../../shared/hook'
import './forma.scss'

interface Props {
  socket: Socket
}

export const Forma: FC<Props> = ({ socket }: Props) => {
  const dispatch = useAppDispatch()
  const inputFile = useRef<null | HTMLInputElement | { value: null }>(
    null
  )
  const [text, setText] = useState('')
  const [nameFile, setNameFile] = useState(textForFile)
  const [imgInBase64, setImgInBase64] = useState('')

  const setNameForFile = (name: string): void => {
    setNameFile(name)
  }

  const setImgBase64 = (base64: string): void => {
    setImgInBase64(base64)
  }

  const handleChangeText = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setText(e.target.value)
  }

  const handleButtonSend = (): void => {
    if (text !== '' || imgInBase64 !== '') {
      dispatch(addMessageMainUser({ text, imgInBase64 }))
      socket.emit(socketOptions.sendChatMessage, {
        message: text,
        imageFile: imgInBase64
      })
      if (inputFile.current !== null) {
        inputFile.current.value = null
      }
      setNameFile(textForFile)
      setImgInBase64('')
      setText('')
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
            type="button"
          >
            Отправить сообщение
          </button>
          <InputFile
            inputFile={inputFile}
            setNameFile={setNameForFile}
            nameFile={nameFile}
            setImgInBase64={setImgBase64}
          />
        </div>
      </form>
    </div>
  )
}
