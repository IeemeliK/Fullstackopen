import React from 'react';

const Persons = ({ persons }) => {
	const Contact = ({ person }) => {
		return (
			<tr>
				<td>
					{person.name} {person.number}
				</td>
			</tr>
		);
	};

	return (
		<table>
			<thead>
				<tr>
					<th>
						<h2>Numbers</h2>
					</th>
				</tr>
			</thead>
			<tbody>
				{persons.map((person) => (
					<Contact key={person.name} person={person} />
				))}
			</tbody>
		</table>
	);
};

export default Persons;
