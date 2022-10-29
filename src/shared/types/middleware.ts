export interface Action {
  type: any;
}

export interface Dispatch<S> {
  <A extends Action>(action: A): A
}

export interface MiddlewareAPI<S> {
  dispatch: Dispatch<S>
  getState(): S
}