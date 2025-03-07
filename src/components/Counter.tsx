import { useState } from 'react';
import classes from './Counter.module.scss';
export const Counter = () => {
	const [count, setCount] = useState(0);
	const counter = () => {
		setCount(count + 1);
	};
	return (
		<div className={classes.btn}>
			<h1>{count}</h1>
			<button onClick={counter}>Счетчик</button>
		</div>
	);
};
