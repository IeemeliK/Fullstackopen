import React from 'react';

const Countries = ({ countries }) => {
	const Country = ({ country }) => {
		return (
			<tr>
				<td>{`${country.name.common}`}</td>
			</tr>
		);
	};

	const FullCountry = ({ country }) => {
		return (
			<div>
				<h1>{country.name.common}</h1>
				<p>{`Capital: ${country.capital}`}</p>
				<p>{`Official name: ${country.name.official}`}</p>
				<h3>languages</h3>
				<ul>
					{Object.keys(country.languages).map((language) => {
						return <li key={language}>{language}</li>;
					})}
				</ul>
				<img
					src={country.flags.png}
					alt='flag of the country'
					width='200'
					height='100'
				/>
			</div>
		);
	};

	if (countries.length > 10) {
		return 'Too many matches, specify another filter';
	} else if (countries.length === 1) {
		return (
			<div>
				{countries.map((country) => (
					<FullCountry key={country.name.official} country={country} />
				))}
			</div>
		);
	} else {
		return (
			<table>
				<tbody>
					{countries.map((country) => (
						<Country key={country.name.official} country={country} />
					))}
				</tbody>
			</table>
		);
	}
};

export default Countries;
