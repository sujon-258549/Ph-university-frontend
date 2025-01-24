import { baseApi } from "@/redux/api/baseApi";
import { TAcademicSemester, TResponseRedux } from "@/types/all";

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
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/academic-semester",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    createAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    gatAllAcademicFaculty: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/academic-faculties",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

// quentin when useGetAllSemesterQuery
export const {
  useCreateAcademicSemesterMutation,
  useGetAllSemesterQuery,
  useCreateAcademicFacultyMutation,
  useGatAllAcademicFacultyQuery,
} = createAcademicSemesterApi;
