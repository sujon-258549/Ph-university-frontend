/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TResponseRedux } from "@/types/all";

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
      transformResponse: (response: any) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createcourse: builder.mutation({
      query: (data) => ({
        url: "/course/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["course"],
    }),
    getAllCourse: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/course",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["course"],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    getCourseFaculty: builder.query({
      query: (id) => {
        return {
          url: `/course/${id}/get-facultys`,
          method: "GET",
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
    assignFaculty: builder.mutation({
      query: (args) => ({
        url: `/course/${args.courseId}/assign-faculty`,
        method: "PUT",
        body: args.data,
      }),
      // invalidatesTags: ["course"],
    }),
    assignOfferCourse: builder.mutation({
      query: (data) => ({
        url: "/offerd-course/create-offered-course",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["course"],
    }),
    getAllOfferCourse: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: "/offerd-course",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["course"],
      transformResponse: (response: TResponseRedux<any>) => {
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
  useCreatecourseMutation,
  useGetAllCourseQuery,
  useAssignFacultyMutation,
  useGetAllOfferCourseQuery,
  useGetCourseFacultyQuery,
  useAssignOfferCourseMutation,
} = courseManagementApi;
