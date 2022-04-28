import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    alt="logo"
                    src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png"
                />
            </header>
            <nav className="nav">
                <div>
                    <a href="/#">Profile</a>
                    <div>
                        <a href="/#">Messages</a>
                    </div>
                    <div>
                        <a href="/#">News</a>
                    </div>
                    <div>
                        <a href="/#">Music</a>
                    </div>
                    <div>
                        <a href="/#">Settings</a>
                    </div>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
                </div>
                <div>
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
                </div>
                <div>
                    my posts
                    <div>
                        new post
                        <div>post 1</div>
                        <div>post 1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
