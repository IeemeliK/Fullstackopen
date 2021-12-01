import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

function App() {
	const [countries, setCountries] = useState([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((response) => {
			console.log(response);
			setCountries(response.data);
		});
	}, []);

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	};

	const countriesToShow = countries.filter((country) =>
		country.name.common.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<>
			<Filter handler={handleFilterChange} />
			<Countries countries={countriesToShow} />
		</>
	);
}

export default App;
