import { baseApi } from "@/redux/api/baseApi";
import { TResponse } from "@/types/all";
import { Student } from "@/types/student";
// import { TResponse } from "@/types/all";
// import { Student } from "@/types/student";

const userCreateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    getAllStudent: builder.query({
      query: (args) => {
        console.log(args);
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
      transformResponse: (response) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

// quentin when useGetAllSemesterQuery
export const { useCreateStudentMutation, useGetAllStudentQuery } =
  userCreateApi;
