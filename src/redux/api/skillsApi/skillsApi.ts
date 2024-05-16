import { baseApi } from "../baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSkill: build.mutation({
      query: (data) => ({
        url: "/skill",
        method: "POST",
        body: data,
      }),
    }),
    getSkills: build.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateSkillMutation, useGetSkillsQuery } = skillsApi;
