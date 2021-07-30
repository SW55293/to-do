import React, {useState} from 'react'

function App() {

    const [ count, setCount ] = useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    function multiply() {
    setCount(prevCount => prevCount * 2)
}

    return (
        <div>
            <h1>{count}</h1>
            {/* This bottom line is one way of doing it */}
            {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Change</button> */}
            <button onClick={add}>Go Up</button>
            <button onClick={subtract}>Go Down</button>
            <button onClick={multiply}>X2</button>
        </div>

    )

}

export default App 