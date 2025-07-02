import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authApi";
import toast from "react-hot-toast";
import { saveToken, saveUser, removeToken, removeUser } from "@/lib/utils";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data: { fullName: string; email: string; password: string }) => {
    const res = await register(data);
    return res;
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (data: { email: string; password: string }) => {
    const res = await login(data);
    return res;
  }
);

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = "";
      removeUser();
      removeToken();
    },
    hydrateUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
        toast.success("User registration successful");
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Registration failed";
        toast.error(state.error);
      })
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        const { username, email, role, token } = action.payload;
        const user = { username, email, role };
        state.user = user as any;
        state.token = token;

        saveUser(user);
        saveToken(token);

        toast.success("User login successful");
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
        toast.error(state.error);
      });
  },
});

export const { logout, hydrateUser } = authSlice.actions;

export default authSlice.reducer;
