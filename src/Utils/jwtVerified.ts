import { jwtDecode } from "jwt-decode";

export const varifytoken = (token: string) => {
  return jwtDecode(token);
};
