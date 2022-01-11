import React, { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { ITodo } from '../../redux/models/ITodo'
import { todoSlice } from '../../redux/todoSlice/todoSlice'
import {MdDelete} from 'react-icons/md'

import styles from './Notes.module.css'

const Notes: React.FC = () => {
    const {todos} = useAppSelector(state => state.todoSlice)
    const dispatch = useAppDispatch()
    const {removeTodo, toggleTodo} = todoSlice.actions

    const onDeleteClick = (todo: ITodo) => {
        const currentIndex = todos.indexOf(todo)
        dispatch(removeTodo(currentIndex))
    }

    const toggleHandler = (todo: ITodo) => {
        const currentIndex = todos.indexOf(todo)
        dispatch(toggleTodo(currentIndex))
    }

    return (
         <div>
             {todos.length < 1 ? <p>You don't have any notes now</p>
             : <ul className={styles.collection}>
                 {todos.map(todo => <li className={styles.item} key={todo.id}>
                     <>
                        <input type="checkbox" checked={todo.completed} onChange={toggleHandler.bind(null, todo)}/>
                        <span>{todo.name}</span>
                     </>
                     <MdDelete className={styles.delete_btn} onClick={()=>onDeleteClick(todo)}/>
                     </li>)}
                </ul>
             }
         </div>
    )
}

export default Notes
