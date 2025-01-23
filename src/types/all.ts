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

export type TResponse = {
  data?: any;
  error?: TError;
};
