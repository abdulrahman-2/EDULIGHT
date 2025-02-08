import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  items: string[];
}

export function CustomSelect({ items }: SelectProps) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={items[0]} />
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
