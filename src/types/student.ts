export interface Guardian {
  guardianName?: string;
  guardianPhone?: string;
}

// Name Interface
export interface FullName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

// Student Interface for TypeScript
export interface TStudent {
  user: string;
  id: string;
  name: FullName;
  email: string;
  profileImg?: string;
  dateOfBirth: Date;
  gender: "Male" | "Female" | "Other";
  phone?: string;
  address?: string;
  grade: string;
  section?: string;
  enrolledDate: Date;
  guardian: Guardian;
  nationality?: string;
  religion?: string;
  hobbies?: string[];
  extracurriculars?: string[];
  previousSchool?: string;
  emergencyContact?: number;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  attendancePercentage?: number;
  marks?: { [subject: string]: number };
  admitionSamester: string;
  acadimicDepertment: string;
  acadimicFaculty: string;
  isDeleted: boolean;
  comments?: string;
}

export interface Student {
  _id: string; // ObjectId
  user: string; // ObjectId
  id: string; // Student ID
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  profileImg: string;
  dateOfBirth: string; // ISO Date string
  gender: string;
  phone: string;
  address: string;
  grade: string;
  section: string;
  enrolledDate: string; // ISO Date string
  guardian: {
    guardianName: string;
    guardianPhone: string;
  };
  nationality: string;
  religion: string;
  hobbies: string[];
  extracurriculars: string[];
  previousSchool: string;
  emergencyContact: number;
  bloodGroup: string;
  attendancePercentage: number; // Double
  marks: {
    Science: number;
    Math: number;
    Geography: number;
  };
  admitionSamester: string; // ObjectId
  acadimicDepertment: string; // ObjectId
  acadimicFaculty: string; // ObjectId
  isDeleted: boolean;
  comments: string;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  __v: number;
}
