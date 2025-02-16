"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { CustomSelect } from "../common/CustomSelect";
import { cn } from "@/lib/utils";

const FormGenerator = ({
  inputs,
  schema,
  onSubmit,
  className,
  btnName = "Submit",
}: {
  inputs: any[];
  schema: any;
  onSubmit: (data: any) => void;
  className?: string;
  btnName?: string;
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {inputs.map((group: any, index: number) => {
        // If `group.fields` exists, it's a grouped row, otherwise treat it as a single input
        const fields = group.fields ? group.fields : [group];

        return (
          <div
            key={index}
            className={cn(
              "flex gap-4",
              group.fields ? "flex-col md:flex-row" : "flex-col"
            )}
          >
            {fields.map((input: any) => (
              <div key={input.name} className="flex flex-col w-full">
                <label htmlFor={input.name} className="mb-1 font-semibold">
                  {input.label}
                </label>

                <Controller
                  name={input.name}
                  control={control}
                  defaultValue={input.defaultValue || ""}
                  render={({ field }) =>
                    input.type === "file" ? (
                      <Input
                        type="file"
                        accept={input.accept || "*"}
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          field.onChange(file);
                        }}
                        className={cn(
                          "border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                          errors[input.name]
                            ? "border-red-500"
                            : "border-gray-300",
                          className
                        )}
                      />
                    ) : input.type === "select" ? (
                      <CustomSelect
                        className="h-12"
                        items={input.options || []}
                        {...field}
                        onChange={(value) => field.onChange(value)}
                      />
                    ) : (
                      <Input
                        {...field}
                        type={input.type || "text"}
                        placeholder={input.placeholder || ""}
                        className={cn(
                          "border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                          errors[input.name]
                            ? "border-red-500"
                            : "border-gray-300",
                          className
                        )}
                      />
                    )
                  }
                />

                {errors[input.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[input.name]?.message?.toString()}
                  </p>
                )}
              </div>
            ))}
          </div>
        );
      })}
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary w-full"
      >
        {btnName}
      </button>
    </form>
  );
};

export default FormGenerator;
