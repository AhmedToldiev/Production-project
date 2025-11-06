import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button/Button';
import { Input } from 'widgets/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('Введите логин')}
                autofocus
                type='text'
                className={cls.input}
            />
            <Input
                placeholder={t('Введите пароль')}
                type='text'
                className={cls.input}
            />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
