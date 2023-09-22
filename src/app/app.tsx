import React, { FC, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RouteNames } from '../router'
import { io } from 'socket.io-client'
import { addUser, setMainUser, addSocketId } from './app.slice'
import { IUser } from '../shared/types/main'
import { socketOptions, urlApi } from '../shared/constants/main'
import { useAppDispatch } from '../shared/hook'
import { Intro, Main } from '../pages'

const socket = io(urlApi)

export const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.emit(socketOptions.giveAllUsers)
    socket.on(socketOptions.giveAllUsers, (users) => {
      users.forEach((u: IUser) => {
        dispatch(addUser(u))
      })
    })

    const storageData: IUser = {
      avatar: sessionStorage.getItem('avatar') ?? '',
      id: sessionStorage.getItem('id') ?? '',
      name: sessionStorage.getItem('name') ?? ''
    }

    if (storageData.id) {
      dispatch(setMainUser(storageData))
      socket.emit(socketOptions.addOldUser, storageData)

      socket.on(socketOptions.addOldUser, (socketId: string) => {
        dispatch(addSocketId(socketId))
      })
    } else {
      socket.emit(socketOptions.giveName)

      socket.on(socketOptions.giveName, (user: IUser) => {
        sessionStorage.setItem('avatar', user.avatar)
        sessionStorage.setItem('id', user.id)
        sessionStorage.setItem('name', user.name)
        dispatch(setMainUser(user))
      })
    }
  }, [])

  return (
    <section className="app">
      <HashRouter basename={'/'}>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                replace
                to={RouteNames.INTRO}
              />
            }
          />
          <Route
            path={RouteNames.INTRO}
            element={<Intro />}
          />
          <Route
            path={RouteNames.MAIN}
            element={<Main socket={socket} />}
          />
        </Routes>
      </HashRouter>
    </section>
  )
}
