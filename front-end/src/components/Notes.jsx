import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addNote, initializeNotes } from '../reducers/notesReducer.js';

const Notes = () => {
    const dispatch = useDispatch();

    const notes = useSelector((state) => state.notes);
    const user = useSelector((state) => state.user);

    async function handleSubmit(e) {
        e.preventDefault();

        const content = e.target.inputNote.value;
        e.target.inputNote.value = '';

        const note = {
            important: false,
            content,
            user: user.id,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const response = await axios.post(
            'http://localhost:3001/api/notes',
            note,
            config,
        );

        const savedNote = response.data;

        dispatch(addNote(savedNote));
    }

    useEffect(() => {
        axios.get('http://localhost:3001/api/notes').then((response) => {
            dispatch(initializeNotes(response.data));
        });
    }, []);

    return (
        <>
            <h1>Notes</h1>

            {user && (
                <section>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="inputNoteId">New note: </label>
                        <input id="inputNoteId" name="inputNote" type="text" />
                        <button type="submit">Save</button>
                    </form>
                </section>
            )}

            <section>
                <ul>
                    {notes.map((note) => (
                        <li key={note.id}>{note.content}</li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Notes;
