import { Route, Routes } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/Aboutpage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

export default function App() {
	return (
		<div className='app'>
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
