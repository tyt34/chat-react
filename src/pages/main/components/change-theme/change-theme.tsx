import React, { useEffect, useState, useLayoutEffect } from 'react'
import './change-theme.scss'

type ThemeType = 'green' | 'red'

const mainColorGreen = 'greenyellow'
const secondColorGreen = 'red'

const mainColorRed = '#ef4846'
const secondColorRed = '#7cdbd3'

const dct = document.documentElement.style

export const ChangeTheme = () => {
  const [theme, setTheme] = useState<ThemeType>('green')

  useLayoutEffect(() => {
    setTheme(
      sessionStorage.getItem('theme')
        ? (sessionStorage.getItem('theme') as ThemeType)
        : 'green'
    )
  }, [])

  const handleButton = () => {
    const newTheme: ThemeType = theme === 'green' ? 'red' : 'green'
    setTheme(newTheme)
    sessionStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (theme === 'green') {
      dct.setProperty('--mainColor', mainColorGreen)
      dct.setProperty('--hoverBackgroundColor', secondColorGreen)
    }
    if (theme === 'red') {
      dct.setProperty('--mainColor', mainColorRed)
      dct.setProperty('--hoverBackgroundColor', secondColorRed)
    }
  }, [theme])

  return (
    <button
      className="forma__button button-theme"
      onClick={handleButton}
      id="send-message"
      type="button"
    >
      theme
    </button>
  )
}
