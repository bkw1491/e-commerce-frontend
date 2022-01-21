import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '@store/store'

//pre-typed selector hooks, saves importing types on every use
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector