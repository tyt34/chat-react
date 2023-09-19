import React, { FC, useEffect, useState, memo } from 'react'
import { IMessage } from '../../../../../../shared/types/main'
import { useMainUser } from '../../../../../../shared/hook'
import './message.scss'

export interface Props extends IMessage {
  setImagePopup: (image: string) => void
}

const MessageComponent: FC<Props> = ({
  id,
  name,
  avatar,
  imageFile,
  message,
  setImagePopup
}: Props) => {
  const [imageBlob, setImageBlob] = useState<string>('')
  const mainUser = useMainUser()

  const classLi =
    mainUser.id === id ? 'message message_main' : 'message'

  const isImg = imageFile !== ''

  useEffect(() => {
    if (imageFile !== '') {
      const imageFromBase = async (base: string) => {
        const resultFetch = await fetch(base)
        const blob = await resultFetch.blob()
        setImageBlob(window.URL.createObjectURL(blob))
        return resultFetch
      }

      imageFromBase(imageFile)
    }
  }, [])

  const handleClick = (): void => {
    setImagePopup(imageBlob)
  }

  return (
    <li className={classLi}>
      <div className="message-top">
        <p className="message-user">{name}</p>
        <img
          className="message__user-ava"
          src={avatar}
          alt="аватарка"
        />
      </div>
      <div className="message-bottom">
        <p className="message-text">{message}</p>
      </div>

      {isImg ? (
        <div className="message__img">
          <p className="message__img-title">
            Прикрепленное изображение:
          </p>
          <img
            onClick={handleClick}
            className="message__img-mini"
            src={imageBlob}
            alt="Изображение, которое прикрепил пользователь"
          />
        </div>
      ) : null}
    </li>
  )
}

/**
 * так как для сообщений доступно только одно действие:
 * добавление на страницу при отправке / получение
 * то для перерендера случаев нет
 */
export const Message = memo(MessageComponent)
