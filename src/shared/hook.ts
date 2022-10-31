import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState, AppDispatch } from "../app/store"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useMessages = () => useAppSelector((store: RootState) => store.listMessages)
export const useUsers = () => useAppSelector((store: RootState) => store.listUsers)
export const useMainUser = () => useAppSelector((store: RootState) => store.mainUser)

