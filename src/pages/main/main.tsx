import React, { FC, useEffect } from 'react'
import './main.scss'
import { useAppDispatch } from '../../shared/hook'
import {
  CountUsers,
  Forma,
  ListMessages,
  ListUsers,
  MainUser
} from './components'
import io from 'socket.io-client'
import {
  addUser,
  setMainUser
} from './main.slice'
import { IUser } from '../../shared/types/main'
import { socketOptions, urlApi } from '../../shared/constants/main'

const socket = io(urlApi)

const Main: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.emit(socketOptions.giveName)

    socket.on(socketOptions.giveName, (user) => {
      dispatch(setMainUser(user))
    })

    socket.on(socketOptions.giveAllUsers, (users) => {
      users.forEach((u: IUser) => {
        dispatch(addUser(u))
      })
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
    </section>
  )
}

export default Main
