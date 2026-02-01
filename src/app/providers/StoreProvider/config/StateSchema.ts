import { EnhancedStore } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { ProfileSchema } from 'entities/Profile';
import { ReducerManager } from './reducerManager';

export interface StateSchema {
    user: UserSchema;

    // Асинхронные редьюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}