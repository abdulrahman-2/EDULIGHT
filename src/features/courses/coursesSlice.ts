import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCourses, getCourseById } from "./coursesApi";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const res = await getAllCourses();
      return res;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCourseById = createAsyncThunk(
  "courses/fetchCourseById",
  async (courseId: string) => {
    try {
      const res = await getCourseById(courseId);
      return res;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  courses: [],
  singleCourse: null,
  loading: false,
  error: "",
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload || [];
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch courses";
      })
      .addCase(fetchCourseById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleCourse = action.payload || null;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch course details";
      });
  },
});

export default courseSlice.reducer;