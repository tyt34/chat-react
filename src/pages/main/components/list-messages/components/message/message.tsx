import React, { FC, useEffect, useState } from 'react'
import './message.scss'
import { IMessage } from '../../../../../../shared/types/main'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../main.slice'

export interface Props extends IMessage {
  setImagePopup: (image: string) => void
}

const Message: FC<Props> = ({ id, name, avatar, imageFile, message, setImagePopup }: Props) => {
  const [imageBlob, setImageBlob] = useState<any>('')
  const mainUser = useSelector((store: RootState) => store.mainUser)

  useEffect(() => {
    if (imageFile !== '') {
      fetch(imageFile)
      .then(res => res.blob())
      .then(blob => {
        setImageBlob(window.URL.createObjectURL(blob))
      })
    }
  },[])

  const handleClick = (): void => {
    setImagePopup(imageFile)
  }

  return (
    <>
      <li
        className={
          mainUser.id === id ? 'message message_main' : 'message'
        }
      >
        <div className="message-top">

          <p className="message-user">
            {name}
          </p>
          <img
            className="message__user-ava"
            src={avatar}
            alt="аватарка"
          />

        </div>
        <div className="message-bottom">

          <p className="message-text">
            {message}
          </p>

        </div>

        {
        imageFile &&
        <div className="message__img">
          <p className="message__img-title">
            Прикрепленное изображение:
          </p>
          <img
            onClick={handleClick}
            className="message__img-mini"
            src={imageBlob}
            alt="изображение, которое прикрепил пользователь"
          />
        </div>
        }
      </li>
    </>
  )
}

export default Message
