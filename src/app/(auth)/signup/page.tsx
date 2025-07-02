"use client";

import Image from "next/image";
import signUpImg from "@/assets/home-images/signup-img.png";
import googleImg from "@/assets/home-images/google.svg";
import facebookImg from "@/assets/home-images/facebook.svg";
import FormGenerator from "@/components/forms/useFormGenerator";
import { createAccountSchema } from "@/schema";
import { signUpInputs } from "@/constants/formInputs";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { signup } from "@/features/auth/authSlice";
import { getToken } from "@/lib/utils";
import { useEffect } from "react";
import { AppDispatch } from "@/store/store";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const token = getToken();

  useEffect(() => {
    if (token) {
      redirect("/login");
    }
  }, [token]);

  const handleFormSubmit = async (data: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const apiData = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      };

      const res = await dispatch(signup(apiData)).unwrap();
      router.push("/login");
      console.log("Success:", res);
    } catch (error: any) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="md:h-screen">
        <Image
          src={signUpImg}
          width={500}
          height={500}
          priority
          alt="sign up"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-[600px] mx-auto rounded-lg shadow-sm">
        <div className="p-5">
          <h1 className="text-3xl text-center font-bold mb-4">
            Create your account
          </h1>

          <FormGenerator
            inputs={signUpInputs}
            schema={createAccountSchema}
            onSubmit={handleFormSubmit}
            btnName="Create account"
          />

          <div className="flex items-center justify-center gap-3 mt-4">
            <input type="checkbox" />
            <span className=" text-gray-600 dark:text-gray-400">
              I agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
            </span>
          </div>

          <p className="text-gray-600 text-center dark:text-gray-400 font-semibold mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>

          <div className="flex items-center justify-center gap-3 mt-4 w-full">
            <span className="w-full h-[1px] bg-gray-500 rounded-lg"></span>
            <span className="text-gray-600 text-nowrap">Sign Up With</span>
            <span className="w-full h-[1px] bg-gray-500 rounded-lg"></span>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-6 border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out">
              <Image
                src={googleImg}
                width={30}
                height={30}
                alt="google"
                className="w-8 h-8 cursor-pointer"
              />
              <span>Google</span>
            </div>

            <div className="flex items-center gap-6 border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out">
              <Image
                src={facebookImg}
                width={30}
                height={30}
                alt="facebook"
                className="w-8 h-8 cursor-pointer"
              />
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
