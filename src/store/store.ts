import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/features/sidebar/sidebarSlice";
import profileReducer from "@/features/profile/profileSlice";
import authReducer from "@/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    profile: profileReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
