import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Intro } from './intro'

const mockUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}))

describe('Тестирование компонента Intro.', () => {
  test('Тестирование отображения без props', () => {
    render(<Intro />)

    const searchEl1 = screen.getByText('Вход')

    expect(searchEl1).toBeInTheDocument()
  })
  test('Тестирование клика по кнопке', () => {
    render(<Intro />)

    const searchEl1 = screen.getByText('Вход')

    fireEvent.click(searchEl1)

    expect(mockUsedNavigate).toHaveBeenCalled()
  })
})
