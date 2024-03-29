import React, { FC, memo } from 'react'
import './popup.scss'

interface Props {
  imgPopup: string
  setImagePopup: (image: string) => void
}

const PopupComponent: FC<Props> = ({
  imgPopup,
  setImagePopup,
}: Props) => {
  const handleClick = (): void => {
    setImagePopup('')
  }

  return (
    <section className={imgPopup !== '' ? 'popup popup_open' : 'popup'}>
      <div className="popup__container">
        <button
          onClick={handleClick}
          className="popup__close"
        >
          x
        </button>
        <img
          className="popup__img"
          src={imgPopup}
          alt="Увеличенное изображение для просмотра"
        />
      </div>
    </section>
  )
}

export const Popup = memo(PopupComponent)
