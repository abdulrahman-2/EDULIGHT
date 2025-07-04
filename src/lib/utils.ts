import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Check if running on client
const isClient = typeof window !== "undefined";

// Save user to localStorage
export const saveUser = (user: any) => {
  if (isClient) {
    localStorage.setItem("EduLightUser", JSON.stringify(user));
  }
};

// Get user from localStorage
export const getUser = () => {
  if (isClient) {
    const user = localStorage.getItem("EduLightUser");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

// Remove user from localStorage
export const removeUser = () => {
  if (isClient) {
    localStorage.removeItem("EduLightUser");
  }
};

// Save token to localStorage
export const saveToken = (token: string) => {
  if (isClient) {
    localStorage.setItem("EduLightToken", token);
  }
};

// Get token from localStorage
export const getToken = () => {
  if (isClient) {
    return localStorage.getItem("EduLightToken");
  }
  return null;
};

// Remove token from localStorage
export const removeToken = () => {
  if (isClient) {
    localStorage.removeItem("EduLightToken");
  }
};
