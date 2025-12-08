import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer.js';
import notesReducer from './reducers/notesReducer.js';

const store = configureStore({
    reducer: {
        user: userReducer,
        notes: notesReducer,
    },
});

export default store;
