import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: " Please Select Name" }),
  year: z.string({ required_error: " Please Select Year " }),
  statingMonth: z.string({ required_error: "Please Select Start Month " }),
  endingMonth: z.string({ required_error: " Please Select End Month " }),
});
