import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {POST_API} from '../todos-list/api/post-api';

export const store = configureStore({
  reducer: {
    [POST_API.reducerPath]: POST_API.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(POST_API.middleware)
})
