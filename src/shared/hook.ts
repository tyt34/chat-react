import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState, AppDispatch } from "../app/store"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const hookListMessages = () => useAppSelector((store: RootState) => store.listMessages)
export const hookListUsers = () => useAppSelector((store: RootState) => store.listUsers)
export const hookMainUser = () => useAppSelector((store: RootState) => store.mainUser)
