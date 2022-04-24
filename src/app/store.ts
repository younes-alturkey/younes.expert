import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import uiReducer from '@/src/features/uiSlice'

export const store = configureStore({
    reducer: {
        ui: uiReducer,
    },
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
