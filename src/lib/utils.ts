import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// save user in localStorage
export const saveUser = (user: any) => {
  localStorage.setItem("EduLightUser", JSON.stringify(user));
};

// get user from localStorage
export const getUser = () => {
   if (typeof window !== "undefined") {
    const user = localStorage.getItem("EduLightUser");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

// remove user from localStorage
export const removeUser = () => {
  localStorage.removeItem("EduLightUser");
};

// save token in localStorage
export const saveToken = (token: string) => {
  localStorage.setItem("EduLightToken", token);
};

// get token from localStorage
export const getToken = () => {
  return localStorage.getItem("EduLightToken");
};

// remove token from localStorage
export const removeToken = () => {
  localStorage.removeItem("EduLightToken");
};
