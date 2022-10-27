import React, {FC, useEffect, useState} from 'react'
import './main.scss'
import { 
  CountUsers,
  Forma,
  ListMessages,
  ListUsers,
  MainUser,
  Popup
} from './components'
import io from 'socket.io-client';

const socket = io('http://localhost:3001/')

const socketOptions = {
  sendChatMessage: 'chat message',
  giveName: 'give a name',
  giveAllUsers: 'now list users',
  getNewUser: 'add new user',
  getOldUser: 'remove user',
  getNewMessage: 'message for all'
}

interface IUser {
  id: string
  avatar: string
  name: string
}

const Main: FC = () => {
  const [mainUser, setMainUser] = useState({
    id: '',
    avatar: '',
    name: ''
  })

  useEffect(() => {
    socket.emit(socketOptions.giveName)

    socket.on(socketOptions.giveName, (user) => {
      const { avatar, id, name} = user
      console.log(' user: ', user)
      setMainUser({
        id,
        avatar,
        name
      })
    })

    socket.on(socketOptions.giveAllUsers, (users) => {
      console.log(' users: ', users)
    })

    socket.on(socketOptions.getNewUser, (user) => {
      const { avatar, id, name} = user
      console.log(' new user: ', user)
    })

    socket.on(socketOptions.getOldUser, (idUser) => {
      console.log(' off user (id):', idUser)
    })

    socket.on(socketOptions.getNewMessage, (messageObj) => {
      const { avatar, id, imageFile, message, name} = messageObj
      console.log(' new mess: ', message)
    })
  }, [])

  return (
    <section
      className='main'
    >
      <section className="main__left">
        <CountUsers />
        <ListUsers />
        <MainUser 
          user={mainUser}
        />
      </section>

      <section className='main__right'>
        <ListMessages />
        <Forma/>
      </section>

      <Popup />
    </section>
  )
}

export default Main

