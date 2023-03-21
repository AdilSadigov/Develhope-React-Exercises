import ReactDOM from 'react-dom';

const root = document.getElementById('root')
function getName (name) {
    return <h1>Hello, {name}</h1>
}

ReactDOM.render(getName(), root)

// if I understand the question correctly, if you don't pass the value of the name variable to the function, 
// it will return only "Hello," without a name