import React, { FC, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RouteNames } from '../router'
import Intro from '../pages/intro/intro'
import Main from '../pages/main/main'
import { io } from 'socket.io-client'
import {
  addUser,
  setMainUser
} from './app.slice'
import { IUser } from '../shared/types/main'
import { socketOptions, urlApi } from '../shared/constants/main'
import { useAppDispatch } from '../shared/hook'

const socket = io(urlApi)

const App: FC = () => {
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
    <section className="app">
      <HashRouter basename={'/'}>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                replace to={RouteNames.INTRO}
              />
            }
          />
          <Route
            path={RouteNames.INTRO}
            element={
              <>
                <Intro />
              </>
            }
          />
          <Route
            path={RouteNames.MAIN}
            element={
              <>
                <Main
                  socket={socket}
                />
              </>
            }
          />
        </Routes>
      </HashRouter>
    </section>
  )
}

export default App
