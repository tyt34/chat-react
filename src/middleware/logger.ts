import { Middleware } from 'redux'
import {
  MiddlewareAPI,
  Dispatch,
  Action
} from '../shared/types/middleware'

export const Logger: Middleware =
  (store: MiddlewareAPI<void>) =>
  (next: Dispatch<void>) =>
  <A extends Action>(action: A) => {
    console.info(' dis: ', action)
    console.info(' bef: ', store.getState())
    const result = next(action)
    console.info(' aft: ', store.getState())
    return result
  }
