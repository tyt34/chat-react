import React, { FC } from 'react'
import { RouteNames } from '../../router'
import { useNavigate } from 'react-router-dom'
import './intro.scss'

export const Intro: FC = () => {
  const navigate = useNavigate()

  const changePage = (): void => {
    navigate(RouteNames.MAIN)
  }

  const href = `#${RouteNames.MAIN}`

  return (
    <section className="intro">
      <div className="intro__container">
        <div>
          <p className="intro__welcome">
            Данное приложение - однокомнатный чат.
          </p>
          <p className="intro__welcome">
            При нажатие на &apos;Вход&apos; вам будет присвоено
            случайное имя, после чего вы сможете общаться сдругими
            участниками чата.
          </p>
        </div>

        <a
          className="intro__link"
          onClick={changePage}
          href={href}
        >
          <button>Вход</button>
        </a>
      </div>
    </section>
  )
}
