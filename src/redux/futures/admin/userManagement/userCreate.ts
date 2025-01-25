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
    // getAllSemester: builder.query({
    //   query: (args) => {
    //     console.log(args);
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((element: { name: string; value: string }) => {
    //         params.append(element.name, element.value);
    //       });
    //     }
    //     return {
    //       url: "/academic-semester",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
    //     console.log(response);
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
  }),
});

// quentin when useGetAllSemesterQuery
export const { useCreateStudentMutation } = userCreateApi;
