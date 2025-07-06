import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllRoadmaps, getRoadmapById } from "./roadmapsApi";
import { Roadmap } from "@/types";

export const fetchRoadmaps = createAsyncThunk(
  "roadmaps/fetchRoadmaps",
  async () => {
    try {
      const res = await getAllRoadmaps();
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchRoadmapById = createAsyncThunk(
  "roadmap/fetchRoadmapById",
  async (roadmapId: string) => {
    try {
      const res = await getRoadmapById(roadmapId);
      return res;
    } catch (error) {
      throw error;
    }
  }
);

const initialState: {
  roadmaps: Roadmap[];
  singleRoadmap: Roadmap | null;
  loading: boolean;
  error: string;
} = {
  roadmaps: [],
  singleRoadmap: null,
  loading: false,
  error: "",
};

const roadmapSlice = createSlice({
  name: "roadmap",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoadmaps.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRoadmaps.fulfilled, (state, action) => {
        state.loading = false;
        state.roadmaps = action.payload || [];
      })
      .addCase(fetchRoadmaps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch courses";
      })
      .addCase(fetchRoadmapById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRoadmapById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleRoadmap = action.payload || null;
      })
      .addCase(fetchRoadmapById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch course details";
      });
  },
});

export default roadmapSlice.reducer;