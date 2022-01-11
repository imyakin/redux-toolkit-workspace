import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import {ITodo} from '../models/ITodo'

interface TodoState {
    todos: ITodo[]
}
const initialState: TodoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<ITodo>) => {
                state.todos.push(action.payload)
            },
            prepare: (name: string) =>{
                const id = nanoid()
                const completed = false;
                return { payload: {id, name, completed}}
            }
        },
        removeTodo: (state, action)=>{
            state.todos.splice(action.payload, 1)
        },
        toggleTodo: (state, action) => {
            state.todos[action.payload].completed = !state.todos[action.payload].completed
        }
    }
})

export default todoSlice.reducer