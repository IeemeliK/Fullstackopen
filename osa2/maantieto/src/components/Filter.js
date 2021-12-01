import React from 'react';

const Filter = ({ handler }) => {
	return (
		<div>
			<input placeholder='filter' onChange={handler} />
		</div>
	);
};

export default Filter;
