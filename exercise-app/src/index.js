import ReactDOM from 'react-dom';

const root = document.getElementById('root')
function getName (name) {
    return <h1>Hello, {name}</h1>
}

ReactDOM.render(getName('Adil'), root)