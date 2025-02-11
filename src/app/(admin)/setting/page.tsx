"use client";

import FormGenerator from "@/components/forms/useFormGenerator";
import { z } from "zod";

const formInputs = [
  { name: "username", label: "Username", placeholder: "Enter username" },
  { name: "email", label: "Email", type: "text", placeholder: "Enter email" },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
];

// Define schema here or in a client-imported module
const validationSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Setting = () => {
  const handleFormSubmit = (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <FormGenerator
        inputs={formInputs}
        schema={validationSchema}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Setting;
