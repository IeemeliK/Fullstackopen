import React from 'react';

const PersonForm = ({ submit, nameHandler, numberHandler }) => {
	return (
		<>
			<form onSubmit={submit}>
				<div>
					name: <input placeholder='a new name...' onChange={nameHandler} />
				</div>
				<div>
					number:{' '}
					<input placeholder='a new number...' onChange={numberHandler} />
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
		</>
	);
};

export default PersonForm;
