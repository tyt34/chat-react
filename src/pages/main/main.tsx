import React, {FC, useEffect} from 'react'
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

const socket = io()

const Main: FC = () => {

  useEffect(() => {
    /*
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('pong')
    };
    */
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
        <Forma/>
      </section>

      <Popup />
    </section>
  )
}

export default Main

