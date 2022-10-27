import React, {FC, useEffect, useState} from 'react'
import './main.scss'
import { useDispatch, useSelector } from 'react-redux'
import { 
  CountUsers,
  Forma,
  ListMessages,
  ListUsers,
  MainUser,
  Popup
} from './components'
import io from 'socket.io-client'
import { 
  addUser, 
  removeUser, 
  setMainUser, 
  addMessageOtherUser 
} from './main.slice'
import { IUser } from '../../shared/types/main'
import { RootState } from './main.slice'

const socket = io('http://localhost:3001/')

const socketOptions = {
  sendChatMessage: 'chat message',
  giveName: 'give a name',
  giveAllUsers: 'now list users',
  getNewUser: 'add new user',
  getOldUser: 'remove user',
  getNewMessage: 'message for all'
}

const Main: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    socket.emit(socketOptions.giveName)

    socket.on(socketOptions.giveName, (user) => {
      console.log(' you user: ', user)
      dispatch(setMainUser(user))
    })

    socket.on(socketOptions.giveAllUsers, (users) => {
      console.log(' users: ', users)
      users.forEach((u: IUser) => {
        dispatch(addUser(u))
      })
    })

    socket.on(socketOptions.getNewUser, (user) => {
      console.log(' new user: ', user)
      dispatch(addUser(user))
    })

    socket.on(socketOptions.getOldUser, (idUser) => {
      console.log(' off user (id):', idUser)
      dispatch(removeUser(idUser))
    })

    socket.on(socketOptions.getNewMessage, (messageObj) => {
      console.log(' new mess: ', messageObj.message, messageObj.id)
      dispatch(addMessageOtherUser(messageObj))
    })
  }, [])

  return (
    <section
      className='main'
    >
      <section className="main__left">
        <CountUsers />
        <ListUsers />
        <MainUser />
      </section>

      <section className='main__right'>
        <ListMessages />
        <Forma
          socket={socket}
        />
      </section>

      <Popup />
    </section>
  )
}

export default Main

