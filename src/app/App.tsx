import './styles/index.scss';
import classNames from 'shared/config/lib/classnames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';

export default function App() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleTheme}>Поменять тему</button>
		</div>
	);
}
