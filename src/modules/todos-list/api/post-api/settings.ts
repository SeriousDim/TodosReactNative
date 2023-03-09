import {FetchBaseQueryArgs} from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

export const REDUCER_PATH = 'api/post';

export const FETCH_SETTINGS: FetchBaseQueryArgs = {
  baseUrl: "http://192.168.0.101:3001/",
  prepareHeaders: (headers, {getState}) => {
    // headers.set('Authorization', 'Bearer <token>');
    return headers;
  }
};

export const TAGS = {
  postTag: 'POST_TAG'
};

export const TAGS_ARRAY = Object.values(TAGS);
