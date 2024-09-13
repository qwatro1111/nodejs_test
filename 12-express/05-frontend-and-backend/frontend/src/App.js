import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [person, setPerson] = useState();
    useEffect(() => {
        fetch('http://localhost:3001/')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPerson(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="App">
            {person && (
                <>
                    <h1>Hello {person.name}!</h1>
                </>
            )}
        </div>
    );
}

export default App;
