import React, { FC, useState } from 'react'
import './list-messages.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../main.slice'
import { Message, Popup } from './components'

const ListMessages: FC = () => {
  const listMessages = useSelector((store: RootState) => store.listMessages)
  const [imgPopup, setImgPopup] = useState('')

  const setImagePopup = (image: string): void => {
    setImgPopup(image)
  }

  return (
    <>
      <ul className="list-messages">
        {
          listMessages &&
          listMessages.map((message, i) => (
            <Message
              key={message.id + i.toString()}
              id={message.id}
              name={message.name}
              avatar={message.avatar}
              imageFile={message.imageFile}
              message={message.message}
              setImagePopup={setImagePopup}
            />
          ))
        }
      </ul>

      <Popup
        imgPopup={imgPopup}
        setImagePopup={setImagePopup}
      />
    </>
  )
}

export default ListMessages
