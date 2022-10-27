import React, {FC} from 'react'
import './list-messages.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../main.slice'

const ListMessages: FC = () => {
  const listMessages = useSelector((store: RootState) => store.listMessages)

  console.log(' mess: ', listMessages)

  return (
    <ul className="list-messages">

    </ul>
  )
}

export default ListMessages

