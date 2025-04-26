"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SidebarCheckboxItem from "./SidebarCheckboxItem";

interface SidebarSectionProps {
  title: string;
  items: { id: number; label: string; quantity: number }[];
}

const SidebarSection = ({ title, items }: SidebarSectionProps) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="border border-gray-200 rounded-md bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <button onClick={() => setCollapsed(!collapsed)}>
          <IoIosArrowDown
            size={20}
            className={`transition-transform duration-300 ${
              !collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {!collapsed && (
        <>
          <hr />
          <div className="p-4 space-y-2">
            {items.map((item) => (
              <SidebarCheckboxItem
                key={item.id}
                id={`${title}-${item.id}`}
                label={item.label}
                quantity={item.quantity}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SidebarSection;
