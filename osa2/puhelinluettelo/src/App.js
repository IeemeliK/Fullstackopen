import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' },
	]);
	const [newName, setNewName] = useState('a new name...');
	const [newNumber, setNewNumber] = useState('a new number...');
	const [newFilter, setNewFilter] = useState('');

	const addContact = (e) => {
		e.preventDefault();

		const personObject = {
			name: newName,
			number: newNumber,
		};

		for (let person of persons) {
			if (personObject.name.toLowerCase() === person.name.toLowerCase()) {
				window.alert(`${newName} is already added to the phonebook`);
				return;
			}
		}

		setPersons(persons.concat(personObject));
		setNewName('');
		setNewNumber('');
	};

	const handleContactNameChange = (e) => {
		console.log(e.target.value);
		setNewName(e.target.value);
	};

	const handleContactNumberChange = (e) => {
		console.log(e.target.value);
		setNewNumber(e.target.value);
	};

	const handleFilterChange = (e) => {
		setNewFilter(e.target.value);
	};

	const personsToShow = persons.filter((person) =>
		person.name.toLowerCase().includes(newFilter)
	);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter handler={handleFilterChange} />
			<h2>add a new contact</h2>
			<PersonForm
				submit={addContact}
				nameHandler={handleContactNameChange}
				numberHandler={handleContactNumberChange}
			/>
			<Persons persons={personsToShow} />
		</div>
	);
};

export default App;
