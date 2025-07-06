import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/features/sidebar/sidebarSlice";
import profileReducer from "@/features/profile/profileSlice";
import authReducer from "@/features/auth/authSlice";
import courseReducer from "@/features/courses/coursesSlice";
import cartReducer from "@/features/cart/cartSlice";
import wishlistReducer from "@/features/wishlist/wishlistSlice";

// ✅ Utility: Load from localStorage
const loadFromLocalStorage = (key: string) => {
  if (typeof window === "undefined") return undefined;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : undefined;
  } catch (err) {
    console.error(`Error loading ${key} from localStorage:`, err);
    return undefined;
  }
};

// ✅ Load initial states
const cartFromStorage = loadFromLocalStorage("cart") || [];
const wishlistFromStorage = loadFromLocalStorage("wishlist") || [];
import roadmapSlice from "@/features/roadmaps/roadmapsSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    profile: profileReducer,
    auth: authReducer,
    course: courseReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
     roadmap: roadmapSlice,
  },
  preloadedState: {
    cart: { items: cartFromStorage },
    wishlist: { items: wishlistFromStorage },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// ✅ Subscribe to changes and save to localStorage
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart.items));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist.items));
  } catch (err) {
    console.error("Failed to save to localStorage:", err);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
