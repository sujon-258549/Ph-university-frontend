import { baseApi } from "@/redux/api/baseApi";

const createAcademicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semester/create-semester-for-student",
        method: "POST",
        body: data,
      }),
    }),
    getAllSemester: builder.query({
      query: () => ({
        url: "/academic-semester",
        method: "GET",
      }),
    }),
  }),
});

// quentin when useGetAllSemesterQuery
export const { useCreateAcademicSemesterMutation, useGetAllSemesterQuery } =
  createAcademicSemesterApi;
