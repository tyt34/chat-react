import React, { FC } from 'react'
import './main.scss'
import { Socket } from 'socket.io-client'
import {
  CountUsers,
  Forma,
  ListMessages,
  ListUsers,
  MainUser
} from './components'

interface Props {
  socket: Socket
}

export const Main: FC<Props> = ({ socket }: Props) => {
  return (
    <section className="main">
      <section className="main__left">
        <CountUsers />
        <ListUsers />
        <MainUser />
      </section>

      <section className="main__right">
        <ListMessages />
        <Forma socket={socket} />
      </section>
    </section>
  )
}
