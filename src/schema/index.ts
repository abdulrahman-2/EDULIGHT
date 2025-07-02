import { z } from "zod";

const CreateSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  image: z.any(),
  description: z.string().min(2, "Description must be at least 2 characters"),
  category: z.string().min(2, "Category is required"),
  price: z.string().min(1, "Price is required"),
  language: z.string().min(2, "Language is required"),
  level: z.string().min(2, "Level is required"),
  duration: z.string().min(2, "Duration is required"),
});

// Define schema here or in a client-imported module
const settingSchema = z.object({
  image: z.any(),
  username: z.string().min(2, "name must be at least 2 characters"),
  oldPassword: z.string().min(6, "Password must be at least 6 characters"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
});

const passwordValidation = z
  .string()
  .min(6, "Password must be at least 6 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character"
  );

const createAccountSchema = z
  .object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: passwordValidation,
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
const contactSchema = z.object({
  fName: z.string().min(4, "Name must be at least 4 characters"),
  lName: z.string().min(4, "Name must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(4, "Message must be at least 4 characters"),

});
const faqsSchema = z.object({
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(4, "Message must be at least 4 characters"),
})
const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
})

const profileSettingSchema = z.object({
  username: z.string().min(2, "name must be at least 2 characters"),
  title: z.string().min(5, "Title must be at least 5 characters"),
  image: z.any(),
  lastName: z.string().min(2, "name must be at least 2 characters"),
  firstName: z.string().min(2, "name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
})
const changePasswordSchema = z.object({
  currentPassword: z.string().min(6, "Password must be at least 6 characters"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters"),
})
export { CreateSchema, settingSchema, createAccountSchema, loginSchema, contactSchema,faqsSchema,emailSchema,profileSettingSchema,changePasswordSchema };
