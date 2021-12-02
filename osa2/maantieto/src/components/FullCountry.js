import React from 'react';

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

export default FullCountry;
