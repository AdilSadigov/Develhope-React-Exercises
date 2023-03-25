import React, { useState } from "react";

export function ClickCounter({initialValue = 0, incrementBy = 1}) {
    
    const [count, setCount] = useState(initialValue)

    function counterIncrement() {
        setCount ((c) => c + incrementBy)
    }


    return ( 
        <div>
            <h1>Count: {count}</h1>
            <button onClick={counterIncrement}>Click Me!</button>
        </div>
    )
    
}

