import React from 'react';
import Country from './Country';
import FullCountry from './FullCountry';

const Countries = ({ countries, buttonHandler }) => {
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
						<Country
							key={country.name.official}
							country={country}
							handler={buttonHandler}
						/>
					))}
				</tbody>
			</table>
		);
	}
};

export default Countries;
