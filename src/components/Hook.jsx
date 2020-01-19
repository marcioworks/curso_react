import React, { useState,useEffect } from 'react'

export default props => {
    const [count,setCount] = useState(100)
    const [status, evenOrOdd] = useState('Even')

    useEffect(()=>{
        count % 2 === 0 ? evenOrOdd('Even'):evenOrOdd('Odd')
    })
    return (
        <div>
            <h1>{count}</h1>
            <h3>{status}</h3>
            <button onClick={() => setCount(count + 1)} >Inc</button>
        </div>
    )
}