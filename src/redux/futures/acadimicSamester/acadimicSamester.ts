import { baseApi } from "@/redux/api/baseApi";

const acadimicSamesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: "/academic-semester",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery } = acadimicSamesterApi;
