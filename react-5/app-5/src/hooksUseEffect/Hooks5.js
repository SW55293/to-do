import React, { useState, useEffect } from 'react'
import randomcolor from 'randomcolor'

function App() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")



    useEffect(() => {
        setColor(randomcolor())

		

    }, [count])

	useEffect(() => {
		// the set interval will add 1 to the count at every 1000 miliseconds
        const intervalId = setInterval(() => {
			setCount(prevCount => prevCount + 1)
        }, 1000)
		return () => clearInterval(intervalId)

	}, [])
	//empty array means only run once

    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
           

        </div>

    )

}

export default App