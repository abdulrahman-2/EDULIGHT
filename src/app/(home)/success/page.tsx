"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setActiveTab } from "@/features/profile/profileSlice";
import { Suspense } from "react";
import { clearCart } from "@/features/cart/cartSlice";

const SuccessHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      dispatch(clearCart()); 
    }
  }, [sessionId, dispatch]);

  useEffect(() => {
    const handleNavigateToProfile = () => {
      router.push("/profile");
      dispatch(setActiveTab("Courses"));
    };

    const saveToLocalStorage = async () => {
      if (!sessionId) return;

      try {
        const { data } = await axios.get(
          `/api/stripe-session?sessionId=${sessionId}`
        );

        const newCourses = data.matchedCourses || [];

        const existing = JSON.parse(
          localStorage.getItem("purchasedCourses") || "[]"
        );

        const merged = [
          ...existing,
          ...newCourses.filter(
            (course: any) => !existing.some((e: any) => e.id === course.id)
          ),
        ];

        localStorage.setItem("purchasedCourses", JSON.stringify(merged));
        handleNavigateToProfile();
      } catch (error) {
        console.error("Failed to save purchased courses:", error);
      }
    };

    saveToLocalStorage();
  }, [router, dispatch, sessionId]);

  return null;
};

const SuccessPage = () => {
  return (
    <>
      <Suspense
        fallback={
          <p className="p-10 text-center text-xl h-[calc(100vh-100px)]">
            Processing your order...
          </p>
        }
      >
        <SuccessHandler />
      </Suspense>
      <p className="p-10 text-center text-xl h-[calc(100vh-100px)]">
        Processing your order...
      </p>
    </>
  );
};

export default SuccessPage;
