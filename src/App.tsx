import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/Aboutpage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';

export default function App() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Поменять тему</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О себе</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />}></Route>
					<Route path='/about' element={<AboutPageAsync />}></Route>
				</Routes>
			</Suspense>
		</div>
	);
}
