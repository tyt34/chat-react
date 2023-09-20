import React, {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { Message, Popup } from './components'
import { WrapperScroll } from '../wrapper-scroll'
import { useMessages, useMainUser } from '../../../../shared/hook'
import './list-messages.scss'

export const ListMessages: FC = () => {
  const list = useMessages()
  const ulList = useRef<HTMLUListElement>(null)
  const { name } = useMainUser()
  const [imgPopup, setImgPopup] = useState('')

  const memoSetImagePopup = useCallback(
    (image: string) => {
      setImgPopup(image)
    },
    [imgPopup]
  )

  /**
   * смещение скролла, только если пользователь написал сообщение
   * то есть на входящие сообщения смещения не будет
   */
  useEffect(() => {
    if (list.at(-1)?.name === name) {
      ulList?.current?.scrollTo(0, ulList.current?.scrollHeight)
    }
  }, [list])

  /**
   * в данном случае, message.id это id пользователя, который отправляет сообщение
   * и так как для сообщений доступно только одно действие -
   * добавление на страницу, то в качестве key используется индекс массива
   */
  return (
    <>
      <ul
        className="list-messages"
        ref={ulList}
      >
        <WrapperScroll type="messages">
          <div className="list-messages__inside">
            {list.length !== 0
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
              : null}
          </div>
        </WrapperScroll>
      </ul>

      <Popup
        imgPopup={imgPopup}
        setImagePopup={memoSetImagePopup}
      />
    </>
  )
}
