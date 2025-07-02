"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, getToken } from "@/lib/utils";
import { hydrateUser } from "@/features/auth/authSlice";

const AuthInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = getUser();
    const token = getToken();
    if (user && token) {
      dispatch(hydrateUser({ user, token }));
    }
  }, [dispatch]);

  return null;
};

export default AuthInitializer;
