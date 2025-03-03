import { useState } from 'react';
import './Counter.scss';
export const Counter = () => {
	const [count, setCount] = useState(0);
	const counter = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={counter}>Счетчик</button>
		</div>
	);
};
