import React from 'react'

interface ErrorProps {
    text: string
}

const Error: React.FC<ErrorProps> = ({text}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default Error
