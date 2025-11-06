import { counterActions, counterReducer } from './CounterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('CounterSlice.test.ts', () => {
    test('Тест увеличения счётчика', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    test('Тест уменьшения счётчика', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('Тест пустого стейта', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
