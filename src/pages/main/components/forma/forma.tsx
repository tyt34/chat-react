import React, { FC, useState, useRef } from 'react'
import './forma.scss'
import { addMessageMainUser } from '../../../../app/app.slice'
import { useAppDispatch } from '../../../../shared/hook'
import { socketOptions } from '../../../../shared/constants/main'
import { Socket } from 'socket.io-client'
import { InputFile } from './components'
import { textForFile } from '../../../../shared/constants/main'

interface Props {
  socket: Socket
}

const Forma: FC<Props> = ({ socket }: Props) => {
  const dispatch = useAppDispatch()
  const inputFile = useRef<any>(null)
  const [text, setText] = useState('')
  const [nameFile, setNameFile] = useState(textForFile)
  const [imgInBase64, setImgInBase64] = useState('')

  const setNameForFile = (name: string): void => {
    setNameFile(name)
  }

  const setImgBase64 = (base64: any): void => {
    setImgInBase64(base64)
  }
    
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value)
  }
  
  const handleButtonSend = (e: React.FormEvent<HTMLButtonElement>): void => {
    if (text !== '' || imgInBase64 !== '' ) {

      /**
       * смещение скролла, только если сам пользователь написал сообщение
       */
      const scrollToDown = (): void => {
        const scrollBlock = document.getElementsByClassName('list-messages')[0]
        scrollBlock.scrollTo(0, scrollBlock.scrollHeight)
      }
      setTimeout(scrollToDown, 250)

      dispatch(addMessageMainUser({ text, imgInBase64 }))
      socket.emit(socketOptions.sendChatMessage, {
        message: text,
        imageFile: imgInBase64
      })
      inputFile.current.value = null
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
            type='button'
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

export default Forma