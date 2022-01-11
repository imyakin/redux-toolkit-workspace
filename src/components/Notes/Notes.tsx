import React, { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { ITodo } from '../../redux/models/ITodo'
import { todoSlice } from '../../redux/todoSlice/todoSlice'
import {MdDelete, MdEditNote} from 'react-icons/md'

import styles from './Notes.module.css'

const Notes: React.FC = () => {
    const {todos} = useAppSelector(state => state.todoSlice)
    const dispatch = useAppDispatch()
    const {removeTodo, editTodo, toggleTodo} = todoSlice.actions

    const toggleHandler = (todo: ITodo) => {
        const currentIndex = todos.indexOf(todo)
        dispatch(toggleTodo(currentIndex))
    }

    const onDeleteClick = (todo: ITodo) => {
        const currentIndex = todos.indexOf(todo)
        dispatch(removeTodo(currentIndex))
    }

    const onEditClick = (todo: ITodo):void => {
        const currentIndex = todos.indexOf(todo)
        const newNote: string = String(prompt('Change current note'))
        if(!newNote.trim()){
            alert('Error: "Empty note, try again"')
            return onEditClick(todo)
        }
        dispatch(editTodo([currentIndex, newNote]))
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
                        <div className={styles.icons}>
                            <MdEditNote size={25} className={styles.edit_btn} onClick={()=>onEditClick(todo)}/>
                            <MdDelete size={25} className={styles.delete_btn} onClick={()=>onDeleteClick(todo)}/> 
                        </div>
                     </li>)}
                </ul>
             }
         </div>
    )
}

export default Notes
