import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import ProfileContent from './components/ProfileContent/ProfileContent';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

function App(props) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            {/* state={props.state.sideBar} */}
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<ProfileContent />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
