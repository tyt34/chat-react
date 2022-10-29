import { Middleware } from "redux"
import { MiddlewareAPI, Dispatch, Action } from "../shared/types/middleware"

export const Logger: Middleware =
  (store: MiddlewareAPI<void>) => 
  (next: Dispatch<void>) => 
  <A extends Action>(action: A) => {
   console.log(' dis: ', action)
   console.log(' bef: ', store.getState())
   let result = next(action)
   console.log(' aft: ', store.getState())
   return result
  } 