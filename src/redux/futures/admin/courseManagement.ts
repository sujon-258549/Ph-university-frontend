import { baseApi } from "@/redux/api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRagistaction: builder.mutation({
      query: (data) => ({
        url: "/registration/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),
    updataSemesterRagistaction: builder.mutation({
      query: (data) => ({
        url: `/registration/${data.id}`,
        method: "PATCH",
        body: data.data,
      }),
      invalidatesTags: ["semester"],
    }),
    getAllRagistactionSemesterRagistaction: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/registration",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semester"],
      transformResponse: (response) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const {
  useCreateRagistactionMutation,
  useGetAllRagistactionSemesterRagistactionQuery,
  useUpdataSemesterRagistactionMutation,
} = courseManagementApi;
