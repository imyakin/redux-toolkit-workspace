import React from 'react'

interface ErrorProps {
    text: string
}

const Error: React.FC<ErrorProps> = ({text}) => {
    return (
        <div>
            <label style={{color: "red"}}>{text}</label>
        </div>
    )
}

export default Error
