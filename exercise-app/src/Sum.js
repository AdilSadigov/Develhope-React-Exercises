export function Sum (props) {

    const sum = props.numbers.reduce((a, b) => a + b)

    return <h1>Sum: {sum}</h1>
}