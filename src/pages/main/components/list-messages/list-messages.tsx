import React, { FC, useState, useCallback } from 'react'
import './list-messages.scss'
import { Message, Popup } from './components'
import { hookListMessages } from '../../../../shared/hook'

const ListMessages: FC = () => {
  const list = hookListMessages()
  const [imgPopup, setImgPopup] = useState('')

  const memoSetImagePopup = useCallback((image: string) => {
    setImgPopup(image)
  }, [imgPopup])

  return (
    <>
      <ul className="list-messages">
        {
          list &&
          list.map((message, i) => (
            <Message
              key={message.id + i.toString()}
              id={message.id}
              name={message.name}
              avatar={message.avatar}
              imageFile={message.imageFile}
              message={message.message}
              setImagePopup={memoSetImagePopup}
            />
          ))
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
