interface SidebarCheckboxItemProps {
  id: string;
  label: string;
  quantity: number;
}

const SidebarCheckboxItem = ({
  id,
  label,
  quantity,
}: SidebarCheckboxItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <input id={id} type="checkbox" className="w-4 h-4 accent-blue-600" />
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      </div>
      <span className="text-gray-400">{quantity}</span>
    </div>
  );
};

export default SidebarCheckboxItem;
