import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import classNames from 'shared/config/lib/classnames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './router';

export default function App() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Поменять тему</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О себе</Link>
			<AppRouter />
		</div>
	);
}
