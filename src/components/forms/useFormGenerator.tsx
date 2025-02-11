"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormGenerator = ({ inputs, schema, onSubmit }: any) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      {inputs.map((input: any) => (
        <div key={input.name} className="flex flex-col">
          <label htmlFor={input.name} className="mb-1 font-semibold">
            {input.label}
          </label>
          <Controller
            name={input.name}
            control={control}
            defaultValue={input.defaultValue || ""}
            render={({ field }) => (
              <input
                {...field}
                type={input.type || "text"}
                placeholder={input.placeholder || ""}
                className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors[input.name] ? "border-red-500" : "border-gray-300"
                }`}
              />
            )}
          />
          {errors[input.name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[input.name]?.message?.toString()}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
