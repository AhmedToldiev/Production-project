import classNames from 'shared/config/lib/classnames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
	className?: string;
}
export function Navbar({ className }: NavbarProps) {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={classNames(cls.links)}>
				<AppLink
					theme={AppLinkTheme.PRIMARY}
					className={classNames(cls.mainLink)}
					to={'/'}
				>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
					О себе
				</AppLink>
			</div>
		</div>
	);
}
