import axiosInstance from "@/services/axios";

export const getAllCourses = async () => {
  try {
    const res = await axiosInstance.get("/Course/GetAllCoursesAsync");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCourseById = async (courseId: string) => {
  try {
    const res = await axiosInstance.get(
      `/Course/GetCourseByIdAsync/${courseId}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
