import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        initializeNotes(state, action) {
            return action.payload;
        },
        addNote(state, action) {
            state.push({
                important: false,
                ...action.payload,
            });
        },
    },
});

export const { initializeNotes, addNote } = notesSlice.actions;

export default notesSlice.reducer;
