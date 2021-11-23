import React, { useState } from 'react';

const Button = (props) => {
	const setValue = () => {
		props.setter(props.value + 1);
	};

	return <button onClick={setValue}>{props.name}</button>;
};

const StatisticsLine = (props) => {
	return (
		<tr>
			<td>
				{props.text}: {props.value}
			</td>
		</tr>
	);
};

const Statistics = (props) => {
	const good = props.good;
	const neutral = props.neutral;
	const bad = props.bad;
	const total = good + neutral + bad;

	if (total === 0) {
		return 'no feedback given';
	} else {
		const average = (good - bad) / total;
		const positive = (good / total) * 100;
		return (
			<table>
				<tbody>
					<StatisticsLine text='good' value={good} />
					<StatisticsLine text='neutral' value={neutral} />
					<StatisticsLine text='bad' value={bad} />
					<StatisticsLine text='total' value={total} />
					<StatisticsLine text='average' value={average} />
					<StatisticsLine text='positive' value={positive + '%'} />
				</tbody>
			</table>
		);
	}
};

const App = () => {
	// tallenna napit omaan tilaansa
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>give feedback</h1>
			<div>
				<Button setter={setGood} value={good} name='Good' />
				<Button setter={setNeutral} value={neutral} name='Neutral' />
				<Button setter={setBad} value={bad} name='Bad' />
			</div>
			<h1>statistics</h1>
			<Statistics good={good} bad={bad} neutral={neutral} />
		</>
	);
};

export default App;
