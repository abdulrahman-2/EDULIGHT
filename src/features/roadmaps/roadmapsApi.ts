import axiosInstance from "@/services/axios";

export const getAllRoadmaps = async () => {
  try {
    const res = await axiosInstance.get("/Roadmap/GetAllRoadmaps");
    return res.data;

  } catch (error) {
    throw error;
  }
};

export const getRoadmapById = async (roadmapId: string) => {
  try {
    const res = await axiosInstance.get(
      `/Roadmap/GetAllRoadmaps/${roadmapId}`
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
