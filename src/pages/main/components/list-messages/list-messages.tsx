import React, { FC, useState, useCallback } from 'react'
import './list-messages.scss'
import { Message, Popup } from './components'
import { useMessages } from '../../../../shared/hook'

const ListMessages: FC = () => {
  const list = useMessages()
  console.log(' list: ', list)
  const [imgPopup, setImgPopup] = useState('')

  const memoSetImagePopup = useCallback((image: string) => {
    setImgPopup(image)
  }, [imgPopup])

  /**
   * в данном случае, message.id это id пользователя, который отправляет сообщение
   * и так как для сообщений доступно только одно действие -
   * добавление на страницу, то в качестве key используется индекс массива
   */
  return (
    <>
      <ul className="list-messages">
        {
          list.length !== 0
            ? list.map((message, i) => (
              <Message
                key={i}
                id={message.id}
                name={message.name}
                avatar={message.avatar}
                imageFile={message.imageFile}
                message={message.message}
                setImagePopup={memoSetImagePopup}
              />
            ))
            : null
        }
      </ul>

      <Popup
        imgPopup={imgPopup}
        setImagePopup={memoSetImagePopup}
      />
    </>
  )
}

export default ListMessages
