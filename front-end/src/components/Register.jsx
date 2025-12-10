import React from 'react';
import axios from 'axios';
import logger from '../../utils/logger.js';

import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        e.target.username.value = '';
        e.target.password.value = '';

        try {
            await axios.post('http://localhost:3001/api/users', {
                username,
                password,
            });

            navigate('/login');
        } catch (error) {
            logger.error(error);
            alert(error.response.data.error);
        }
    }

    return (
        <>
            <h1>Register</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </section>
        </>
    );
};

export default Register;
