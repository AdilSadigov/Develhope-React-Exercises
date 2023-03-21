import ReactDOM from 'react-dom';

const root = document.getElementById('root')
function getName (name) {
    return <h1>Hello, {name}</h1>
}

ReactDOM.render(getName(<p>Adil</p>), root)

// if I understand the question correctly, this will work but the name will wrap to a new line