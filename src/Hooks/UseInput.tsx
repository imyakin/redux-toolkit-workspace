import {ChangeEvent, useEffect, useState} from "react"
interface Valid {
    isEmpty: boolean
    minLength: number
}


const useValidation = (value: string, validations: Valid) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for(let validation in validations){
            switch(validation){
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break; 
                case "isEmpty":
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;
            }
        }
    }, [value, validations])

    useEffect(() => {
        if(isEmpty || minLengthError){
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError])

    return {
        isEmpty,
        setIsEmpty,
        minLengthError,
        setMinLengthError,
        inputValid
    }
}

const useInput = (validations: Valid) => {
    const [value, setValue] = useState('')
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const onBlur = (event: ChangeEvent<HTMLInputElement>) => {
        setIsDirty(true)
        setTimeout(() => {
            setIsDirty(false)
        }, 2000)
    }

    return {
        value,
        setValue,
        onChange,
        onBlur,
        isDirty,
        setIsDirty,
        ...valid
    }
}

export default useInput