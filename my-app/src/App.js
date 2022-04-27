import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <h1>--------------</h1>
            <Technologies />
        </div>
    );
}

function Header() {
    return (
        <div className="App">
            <a href="/#">Home</a>
            <a href="/#">Message</a>
            <a href="/#">News</a>
            <a href="/#">Feed</a>
        </div>
    );
}

function Technologies() {
    return (
        <div className="App">
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    );
}

export default App;
