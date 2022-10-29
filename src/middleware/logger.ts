import { Middleware } from "redux";

interface Action {
  type: any;
}

interface Dispatch<S> {
  <A extends Action>(action: A): A;
}

interface MiddlewareAPI<S> {
  dispatch: Dispatch<S>;
  getState(): S;
}

export const Logger: Middleware =
  (api: MiddlewareAPI<void>) => 
  (next: Dispatch<void>) => 
  <A extends Action>(action: A) => {
   console.log(' dis: ', action)
   console.log(' bef: ', api.getState())
   let result = next(action)
   console.log(' aft: ', api.getState())
   return result
  };