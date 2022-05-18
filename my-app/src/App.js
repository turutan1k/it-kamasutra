import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import ProfileContent from './components/ProfileContent/ProfileContent';
import { Dialogs } from './components/Dialogs/Dialogs';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar state={props.state.sideBar} />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ProfileContent
                                    profilePage={props.state.profilePage}
                                    addPost={props.addPost}
                                    updateNewPostText={props.updateNewPostText}
                                />
                            }
                        />
                        <Route
                            path="/dialogs/*"
                            element={
                                <Dialogs state={props.state.dialogsPage} />
                            }
                        />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
