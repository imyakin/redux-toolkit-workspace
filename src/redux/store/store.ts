import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todoSlice/todoSlice";


const rootReducer = combineReducers({
    todoSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch