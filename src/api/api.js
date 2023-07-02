import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/users/1/posts`,
    }),
    getComments: builder.query({
      query: () => "/posts/1/comments",
    }),
  }),
  tagTypes: ["Posts"],
});

export const { useGetPostsQuery, useGetCommentsQuery } = apiSlice;
