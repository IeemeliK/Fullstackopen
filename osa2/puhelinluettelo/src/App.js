import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('a new name...');
	const [newNumber, setNewNumber] = useState('a new number...');
	const [newFilter, setNewFilter] = useState('');

	useEffect(() => {
		axios.get('http://localhost:3001/persons').then((response) => {
			console.log('promise fulfilled');
			setPersons(response.data);
		});
	}, []);

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
		person.name.toLowerCase().includes(newFilter.toLowerCase())
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
