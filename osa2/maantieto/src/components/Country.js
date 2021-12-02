import React from 'react';

const Country = ({ country, handler }) => {
	return (
		<tr>
			<td>{`${country.name.common}`}</td>
			<td>
				<button
					name='showButton'
					onClick={(e) => {
						handler(country.name.common);
					}}
				>
					Show
				</button>
			</td>
		</tr>
	);
};

export default Country;
