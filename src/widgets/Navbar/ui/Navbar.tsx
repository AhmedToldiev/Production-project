import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to='/'
                    className={cls.mainLink}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to='/about'>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
}
