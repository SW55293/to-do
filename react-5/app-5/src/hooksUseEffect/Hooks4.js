import React, { useState, useEffect } from 'react'
import randomcolor from 'randomcolor'

function App() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }


    useEffect(() => {
        setColor(randomcolor())
        setInterval(() => {

        }, 1000)
    }, [count])

    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={add}>Go Up</button>
            <button onClick={subtract}>Go Down</button>

        </div>

    )

}

export default App