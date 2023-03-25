import React from "react";

export function Sum ({numbers = [1, 2, 3, 4]}) {

    const sum = numbers.reduce((a, b) => a + b)

    return <h1>Sum: {sum}</h1>
}