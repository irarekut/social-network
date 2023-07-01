import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
    }),
    getComments: builder.query({
      query: (id) => `/posts/${id}/comments`,
    }),
    getUserPosts: builder.query({
      query: (id) => `/users/${id}/posts`,
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
  tagTypes: ["Post"],
});

export const {
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetUserPostsQuery,
  useGetUserQuery,
} = apiSlice;
