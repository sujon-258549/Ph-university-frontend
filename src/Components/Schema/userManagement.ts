import { z } from "zod";

// Define the Zod schema for the nested structure
export const studentSchema = z.object({
  //   password: z.string().min(8, "Password must be at least 8 characters long"), // Validates password length
  //   student: z.object({
  //     name: z.object({
  //       firstName: z.string().nonempty("First name is required"),
  //       middleName: z.string().optional(),
  //       lastName: z.string().nonempty("Last name is required"),
  //     }),
  //     email: z.string().email("Invalid email address"),
  //     dateOfBirth: z
  //       .string()
  //       .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  //     gender: z.enum(["Male", "Female", "Other"]), // Validates specific gender options
  //     phone: z
  //       .string()
  //       .regex(/^01\d{9}$/, "Invalid phone number format (Bangladeshi)"),
  //     address: z.string().nonempty("Address is required"),
  //     grade: z.string().nonempty("Grade is required"),
  //     section: z.string().nonempty("Section is required"),
  //     enrolledDate: z
  //       .string()
  //       .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  //     guardian: z.object({
  //       guardianName: z.string().nonempty("Guardian name is required"),
  //       guardianPhone: z
  //         .string()
  //         .regex(
  //           /^\+880\d{9}$/,
  //           "Invalid guardian phone number format (Bangladeshi)"
  //         ),
  //     }),
  //     nationality: z.string().nonempty("Nationality is required"),
  //     religion: z.string().nonempty("Religion is required"),
  //     hobbies: z.array(z.string()).optional(), // Array of hobbies as strings
  //     extracurriculars: z.array(z.string()).optional(), // Array of extracurriculars as strings
  //     previousSchool: z.string().optional(),
  //     emergencyContact: z
  //       .string()
  //       .regex(
  //         /^\+880\d{9}$/,
  //         "Invalid emergency contact number format (Bangladeshi)"
  //       ),
  //     bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  //     attendancePercentage: z
  //       .number()
  //       .min(0)
  //       .max(100, "Percentage must be between 0 and 100"),
  //     marks: z.record(z.string(), z.number().min(0).max(100)), // Subject marks
  //     admitionSamester: z.string().nonempty("Admission semester ID is required"),
  //     acadimicDepertment: z
  //       .string()
  //       .nonempty("Academic department ID is required"),
  //     comments: z.string().optional(),
  //   }),
});
