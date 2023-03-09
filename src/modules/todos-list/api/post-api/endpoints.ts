import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {IPost} from '../../model/IPost';
import {TAGS} from './settings';

export const ENDPOINTS = (build: EndpointBuilder<any, any, any>) => ({
  // =====
  allPosts: build.query<IPost[], void>({
    query: () => ({
      url: 'posts'
    })
  }),
  // =====
  posts: build.query<IPost[], number>({
    query: (limit: number = 5) => ({
      url: 'posts',
      params: {
        _limit: limit
      }
    }),
    providesTags: [TAGS.postTag]
  }),
  // =====
  createPost: build.mutation<IPost, IPost>({
    query: (post) => ({
      url: 'posts',
      method: 'POST',
      body: post
    }),
    invalidatesTags: [TAGS.postTag]
  })
});
