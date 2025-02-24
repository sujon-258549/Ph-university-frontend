/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

const userCreateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
    getAllStudent: builder.query({
      query: (args) => {
        // console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/student",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllFaculty: builder.query({
      query: (args) => {
        // console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/faculty",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

// quentin when useGetAllSemesterQuery
export const {
  useCreateStudentMutation,
  useGetAllStudentQuery,
  useGetAllFacultyQuery,
  useChangePasswordMutation,
} = userCreateApi;
