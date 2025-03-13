import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import classNames from 'shared/config/lib/classnames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export default function App() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Поменять тему</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О себе</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPage />}></Route>
					<Route path='/about' element={< AboutPage/>}></Route>
				</Routes>
			</Suspense>
		</div>
	);
}
