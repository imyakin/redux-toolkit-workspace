import React, { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { todoSlice } from '../../redux/todoSlice/todoSlice'
import styles from './NewInputNote.module.css'


const  NewInputNote: React.FC = () => {
    const [note, setNote] = useState("")
    const dispatch = useAppDispatch()
    const {addTodo} = todoSlice.actions
    

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
       setNote(event.target.value)
    }

    const onAddNoteClick = () => {
        if(!note.trim()){
            alert('Error: "Empty note"')
            return
        }
        dispatch(addTodo(note))
        setNote('')
    }

    const keyHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            onAddNoteClick()
        }
    }
    
    return (
        <div className={styles.flex}>
            <input 
                value={note} 
                onChange={updateNote} 
                type={'text'} 
                placeholder='enter your note'
                className={styles.input}
                onKeyPress={keyHandler}
            />
            <button
            className={styles.btn} 
            onClick={onAddNoteClick}
            type='submit'
            >Add Note</button>
        </div>
    )
}

export default NewInputNote
