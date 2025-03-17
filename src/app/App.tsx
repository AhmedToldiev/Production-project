import './styles/index.scss';
import classNames from 'shared/config/lib/classnames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export default function App() {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
}
