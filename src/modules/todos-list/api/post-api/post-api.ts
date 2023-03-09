import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {FETCH_SETTINGS, REDUCER_PATH, TAGS_ARRAY} from './settings';
import {ENDPOINTS} from './endpoints';

export const POST_API = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery(FETCH_SETTINGS),
  tagTypes: TAGS_ARRAY,
  endpoints: ENDPOINTS
});
