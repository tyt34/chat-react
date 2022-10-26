import React from "react"
import Intro from "../pages/intro/intro"
import Main from "../pages/main/main"

export interface IRoute {
  path: string
  element: JSX.Element
}

export enum RouteNames {
  INTRO = '/intro',
  MAIN = '/main'
}

export const routes: IRoute[] = [
  {
    path: RouteNames.INTRO,
    element: <Intro/>
  },
  {
    path: RouteNames.MAIN,
    element: <Main/>
  }
]