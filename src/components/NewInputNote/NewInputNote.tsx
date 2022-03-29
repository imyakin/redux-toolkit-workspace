import React, { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { todoSlice } from '../../redux/todoSlice/todoSlice'
import styles from './NewInputNote.module.css'
import useInput from '../../Hooks/UseInput'
import Error from '../Error/Error'


const  NewInputNote: React.FC = () => {
    // const [note, setNote] = useState("")
    const dispatch = useAppDispatch()
    const {addTodo} = todoSlice.actions
    const note = useInput({minLength: 3, isEmpty: true})
    

    // const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    //    setNote(event.target.value)
    // }

    const onAddNoteClick = () => {
        dispatch(addTodo(note.value))
        note.setValue('')
        note.setIsEmpty(true)
        note.setMinLengthError(false)
    }

    // const keyHandler = (event: React.KeyboardEvent) => {
    //     if(event.key === 'Enter'){
    //         onAddNoteClick()
    //     }
    // }
    
    return (
        <>
            {(note.isDirty && note.isEmpty) && <Error text='Note cannot be empty'/>}
            {(note.isDirty && note.minLengthError) && <Error text='Note must be longer'/>}
            <div className={styles.flex}>
                <input
                    id='note' 
                    value={note.value} 
                    onChange={e => note.onChange(e)} 
                    type={'text'}
                    onBlur={e => note.onBlur(e)}
                    placeholder='enter your note'
                    className={styles.input}
                    // onKeyPress={keyHandler}
                />
                <button
                    className={styles.btn}
                    disabled={!note.inputValid}
                    onClick={onAddNoteClick}
                    type='submit'
                >Add Note</button>
            </div>
        </>
    )
}

export default NewInputNote
