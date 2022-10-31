import React, { FC, useEffect, useState, memo } from 'react'
import './message.scss'
import { IMessage } from '../../../../../../shared/types/main'
import { useMainUser } from '../../../../../../shared/hook'

export interface Props extends IMessage {
  setImagePopup: (image: string) => void
}

const Message: FC<Props> = ({ id, name, avatar, imageFile, message, setImagePopup }: Props) => {
  const [imageBlob, setImageBlob] = useState<any>('')
  const mainUser = useMainUser()

  useEffect(() => {
    if (imageFile !== '') {
      fetch(imageFile)
        .then(async res => await res.blob())
        .then(blob => {
          setImageBlob(window.URL.createObjectURL(blob))
        })
    }
  }, [])

  const handleClick = (): void => {
    setImagePopup(imageBlob)
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
          imageFile !== ''
            ? <div className="message__img">
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
            : null
        }
      </li>
    </>
  )
}

/**
 * так как для сообщений доступно только одно действие:
 * добавление на страницу при отправке / получение
 * то для перерендера случаев нет
 */
export default memo(Message, () => { return true })
