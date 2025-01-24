import { BaseQueryApi } from "@reduxjs/toolkit/query";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TAcademicSemester = {
  _id: string;
  name: string; // Name of the semester, e.g., "Fall", "Spring"
  code: string; // Unique code representing the semester
  startingMonth: string; // The starting month of the semester, e.g., "January"
  endingMonth: string; // The ending month of the semester, e.g., "May"
  year: number; // Year of the semester, e.g., 2025
};
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};
export type TQuery = {
  name: string;
  value: boolean | React.Key;
};
export type TTextAndValue = {
  text: string;
  value: string;
};

export type TResponse<T> = {
  data?: T;
  meta?: TMeta;
  error?: TError;
};

export type TAcademicFaculty = {
  _id: string;
  name: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
