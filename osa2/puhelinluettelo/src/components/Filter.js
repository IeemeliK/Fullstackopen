import React from 'react';

const Filter = ({ handler }) => {
	return (
		<div>
			filter shown with
			<input placeholder='filter' onChange={handler} />
		</div>
	);
};

export default Filter;
