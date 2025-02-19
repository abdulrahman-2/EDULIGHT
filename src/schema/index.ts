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


export { CreateSchema, settingSchema };
