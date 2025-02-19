import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface SelectProps {
  items: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string; 
}

export function CustomSelect({
  items,
  value,
  onChange,
  className,
  placeholder
}: SelectProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className={cn("w-full", className)}>
      <SelectValue placeholder={placeholder ? placeholder : "Select an option"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
