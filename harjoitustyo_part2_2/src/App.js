import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Note from './components/Note';

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState('a new note...');

	useEffect(() => {
		console.log('effect');
		axios.get('http://localhost:3001/notes').then((response) => {
			console.log('promise fulfilled');
			setNotes(response.data);
		});
	}, []);
	console.log('rendered', notes.length, 'notes');

	const addNote = (event) => {
		event.preventDefault();
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() > 0.5,
			id: notes.length + 1,
		};

		setNotes(notes.concat(noteObject));
		setNewNote('');
	};

	const handleNoteChange = (event) => {
		console.log(event.target.value);
		setNewNote(event.target.value);
	};

	return (
		<div>
			<h1>Notes</h1>
			<ul>
				{notes.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
			<form onSubmit={addNote}>
				<input value={newNote} onChange={handleNoteChange} />
				<button type='submit'>save</button>
			</form>
		</div>
	);
};

export default App;
