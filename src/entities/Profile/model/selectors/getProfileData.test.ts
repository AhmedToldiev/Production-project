import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../Country/model/types/country';
import { Currency } from '../../../Currency/model/types/currency';
import {
    getProfileData,
    getProfileIsLoading,
    getProfileError,
    getProfileForm,
    getProfileReadonly,
} from './getProfileData';

const mockProfileData = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    last: 'Smith',
    first: 'Adam',
    city: 'Moscow',
    currency: Currency.USD,
};

describe('Profile selectors', () => {
    describe('getProfileData', () => {
        test('should return profile data', () => {
            const state: DeepPartial<StateSchema> = {
                profile: { data: mockProfileData },
            };
            expect(getProfileData(state as StateSchema)).toEqual(mockProfileData);
        });

        test('should return undefined with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileData(state as StateSchema)).toEqual(undefined);
        });
    });

    describe('getProfileIsLoading', () => {
        test('should return loading state', () => {
            const state: DeepPartial<StateSchema> = {
                profile: { isLoading: true },
            };
            expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
        });

        test('should return undefined with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
        });
    });

    describe('getProfileError', () => {
        test('should return error', () => {
            const state: DeepPartial<StateSchema> = {
                profile: { error: '123' },
            };
            expect(getProfileError(state as StateSchema)).toEqual('123');
        });

        test('should return undefined with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileError(state as StateSchema)).toEqual(undefined);
        });
    });

    describe('getProfileForm', () => {
        test('should return profile form data', () => {
            const state: DeepPartial<StateSchema> = {
                profile: { form: mockProfileData },
            };
            expect(getProfileForm(state as StateSchema)).toEqual(mockProfileData);
        });

        test('should return undefined with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileForm(state as StateSchema)).toEqual(undefined);
        });
    });

    describe('getProfileReadonly', () => {
        test('should return readonly state', () => {
            const state: DeepPartial<StateSchema> = {
                profile: { readonly: true },
            };
            expect(getProfileReadonly(state as StateSchema)).toEqual(true);
        });

        test('should return undefined with empty state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
        });
    });
});
