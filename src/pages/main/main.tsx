import React, { FC } from 'react'
import {
  ChangeTheme,
  CountUsers,
  Forma,
  ListMessages,
  ListUsers,
  MainUser,
} from './components'
import { Socket } from 'socket.io-client'
import './main.scss'

interface Props {
  socket: Socket
}

export const Main: FC<Props> = ({ socket }: Props) => (
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

    <ChangeTheme />
  </section>
)
