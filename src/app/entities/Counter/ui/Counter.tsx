import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'widgets/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const dicrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid='value-title'>
                {counterValue}
            </h1>
            <Button data-testid='increment-btn' onClick={increment}>
                {t('Увеличить')}
            </Button>
            <Button data-testid='decrement-btn' onClick={dicrement}>
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
