import axiosInstance from "@/services/axios";

export const register = async (body: any) => {
  try {
    const response = await axiosInstance.post("/Auth/RegisterStudent", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (body: any) => {
  try {
    const response = await axiosInstance.post("/Auth/LoginStudent", body);
    return response.data;
  } catch (error) {
    throw error;
  }
};
