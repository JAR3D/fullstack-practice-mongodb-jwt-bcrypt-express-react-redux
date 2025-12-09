import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/Home';
import Notes from './components/Notes';
import Users from './components/Users';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    const user = useSelector((state) => state.user);

    return (
        <BrowserRouter>
            <main>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/notes">notes</Link>
                        </li>
                        <li>
                            <Link to="/users">users</Link>
                        </li>
                        {user ? (
                            <li>
                                <em>{user.username} logged in</em>
                                <input type="button" value="logout" />
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">login</Link>
                                </li>
                                <li>
                                    <Link to="/register">register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
