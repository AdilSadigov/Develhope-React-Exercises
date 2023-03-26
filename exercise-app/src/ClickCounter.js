import React, { useEffect, useState } from "react";

export function ClickCounter({initialValue = 0, incrementBy = 1, onCounterChange}) {
    
    const [count, setCount] = useState(initialValue)

    function counterIncrement() {
        setCount ((c) => c + incrementBy)
    }

    function onCounterChange(e) {
        console.log(e)
    }

    useEffect(() => {
        onCounterChange(count)
    }, [count, onCounterChange])

    return ( 
        <div>
            <h1>Count: {count}</h1>
            <button onClick={counterIncrement}>Click Me!</button>
        </div>
    )
    
}

