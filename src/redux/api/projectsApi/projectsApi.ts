import { baseApi } from "../baseApi";

const projectsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProject: build.mutation({
      query: (data) => ({
        url: "/project/create",
        method: "POST",
        body: data,
      }),
    }),
    getProjects: build.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateProjectMutation, useGetProjectsQuery } = projectsApi;
