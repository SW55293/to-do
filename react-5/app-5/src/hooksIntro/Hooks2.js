import React, {useState} from 'react'

function App() {

    const [ answer ] = useState("no")

    return (
        <div>
            <h1>are you ugly {answer}</h1>
        </div>

    )

}

export default App 