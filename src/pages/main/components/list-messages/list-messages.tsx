import React, {FC} from 'react'
import './list-messages.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../main.slice'
import { Message } from './components'

const ListMessages: FC = () => {
  const listMessages = useSelector((store: RootState) => store.listMessages)

  console.log(' mess: ', listMessages)

  return (
    <ul className="list-messages">
      {
        listMessages &&
        listMessages.map((message, i) => (
          <Message 
            key={message.id+i}
            id={message.id}
            name={message.name}
            avatar={message.avatar}
            imageFile={message.imageFile}
            message={message.message}
          />
        ))
      }
    </ul>
  )
}

export default ListMessages

