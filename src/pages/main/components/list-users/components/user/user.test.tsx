import React from 'react'
import { render, screen } from '@testing-library/react'
import { User } from './user'

const exampleName = 'name'
const exampleAva = 'ava'

describe('Тестирование компонента User.', () => {
  test('Тестирование отображения с props', () => {
    render(
      <User
        name={exampleName}
        avatar={exampleAva}
      />,
    )

    const searchEl1 = screen.getByText(exampleName)
    const searchEl2 = screen.getByRole('img')

    expect(searchEl1).toBeInTheDocument()
    expect(searchEl2).toHaveAttribute('src', exampleAva)
  })
})
