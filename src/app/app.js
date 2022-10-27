import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routes, RouteNames } from '../router'

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
