import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { App } from './app/app'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
