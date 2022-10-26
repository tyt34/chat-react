import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from '../pages/main/main'
import { routes, RouteNames } from '../router'

/////////////////////////
// не понимаю как вытащить компоненты из массива и добавить их в роуты

function App() {
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
          {
            routes.map(route => 
              <Route 
                key={route.path}
                path={route.path}
                element={
                  route.element
                }
              />  
            )
          }
        </Routes>
      </HashRouter>
    </section>
  )
}

export default App
