import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logger from '../../utils/logger.js';
import { setUser } from '../reducers/userReducer.js';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        e.target.username.value = '';
        e.target.password.value = '';

        try {
            const response = await axios.post(
                'http://localhost:3001/api/users/login',
                {
                    username,
                    password,
                },
            );

            dispatch(setUser(response.data));
            navigate('/home');
        } catch (error) {
            logger.error(error);
            alert(error.response.data.error);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;
