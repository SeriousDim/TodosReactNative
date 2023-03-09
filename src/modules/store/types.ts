import {configureStore} from '@reduxjs/toolkit';
import {store} from './store';

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = typeof store.dispatch;
