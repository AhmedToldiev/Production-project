import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classnames/classNames';
import { Text } from 'widgets/Text/Text';
import { Button, ButtonTheme } from 'widgets/Button/Button';
import { Input } from 'widgets/Input/Input';
import { getProfileData, getProfileError, getProfileIsLoading } from '../../model/selectors/getProfileData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    classname?: string;
}

export const ProfileCard = ({ classname }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [classname])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.last}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
