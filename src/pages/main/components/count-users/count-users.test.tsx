import React from 'react'
import { CountUsers } from './count-users'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { initialState, mainSlice } from '../../../../app/app.slice'
import { render, screen } from '@testing-library/react'
import { sleep } from '../../../../shared/utils/test-utils'
import { store } from '../../../../app/store'

const exampleUser = {
  avatar: 'a',
  id: 'a',
  name: 'a',
}

afterEach(async () => {
  await sleep(100)
})

const customStore = configureStore({
  reducer: mainSlice.reducer,
  preloadedState: { ...initialState, listUsers: [exampleUser] },
})

describe('Тестирование компонента CountUsers. 1', () => {
  test('Тестирование отображения, когда 0 пользователей', () => {
    render(
      <Provider store={store}>
        <CountUsers />
      </Provider>,
    )

    const searchEl = screen.getByText('Online пользователей: 0')

    expect(searchEl).toBeInTheDocument()
  })
  test('Тестирование отображения, когда 1 пользователь', () => {
    render(
      <Provider store={customStore}>
        <CountUsers />
      </Provider>,
    )

    expect(
      screen.getByText('Online пользователей: 1'),
    ).toBeInTheDocument()
  })
})
