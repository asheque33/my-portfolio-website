import { baseApi } from "../baseApi";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),
    }),
    getBlogs: build.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateBlogMutation, useGetBlogsQuery } = blogsApi;
