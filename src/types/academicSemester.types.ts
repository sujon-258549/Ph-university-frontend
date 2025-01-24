export type TAcademicSemester = {
  _id: string;
  name: string;
  code: string;
  year: string;
  startingMonth: string;
  endingMonth: string;
  createdAt: string; // Use Date type if parsing to Date objects
  updatedAt: string; // Use Date type if parsing to Date objects
  __v: number;
};
