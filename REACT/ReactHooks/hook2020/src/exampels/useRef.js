import React, {useEffect, useRef, useState} from 'react';

function App() {


    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current)
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div className="App">
            <h1>renderCount:{renderCount.current}</h1>
            <h2>prevValue:{prevValue.current}</h2>
            <input
                ref={inputRef}
                type="text"
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            <button onClick={focus}>Focuse</button>
        </div>
    );
}

export default App;
