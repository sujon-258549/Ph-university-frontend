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
      //   transformResponse: (response) => {
      //     console.log(response);
      //     return {
      //       response,
      //       //   data: response.data,
      //       //   meta: response.meta,
      //     };
      //   },
    }),
  }),
});

// quentin when useGetAllSemesterQuery
export const { useCreateAcademicSemesterMutation, useGetAllSemesterQuery } =
  createAcademicSemesterApi;
