import React from 'react';
import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
            <h1>Hello React + Vite</h1>
            <p>
                Starter template with ESLint, Prettier, Vitest, jsdom, and React
                Hooks.
            </p>
            <button onClick={() => setCount((n) => n + 1)}>
                Clicked {count} times
            </button>
        </main>
    );
};

export default App;
