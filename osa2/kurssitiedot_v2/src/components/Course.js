import React from 'react';

const Course = ({ course }) => {
	return (
		<>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</>
	);
};

const Header = ({ name }) => {
	return (
		<div>
			<h1>{name}</h1>
		</div>
	);
};

const Content = ({ parts }) => {
	return (
		<div>
			<Part parts={parts} />
		</div>
	);
};

const Part = ({ parts }) => {
	return (
		<div>
			{parts.map((part) => (
				<p key={part.id}>
					{part.name} {part.exercises}
				</p>
			))}
		</div>
	);
};

const Total = ({ parts }) => {
	const { exercises } = parts.reduce((a, b) => ({
		exercises: a.exercises + b.exercises,
	}));
	return <div>total of {exercises} exercises</div>;
};

export default Course;
