import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = ({ menu, i, open }: any) => {
  const pathName = usePathname();
  const isActive = pathName === menu?.link;
  return (
    <Link
      href={menu?.link}
      key={i}
      className={cn(
        `group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md`,
        menu?.margin && "mt-5",
        isActive
          ? "bg-primary text-white"
          : " hover:bg-[#EFF6FF] dark:hover:bg-[#172554] duration-300"
      )}
    >
      <div className="text-xl">{menu?.icon}</div>
      <h2
        style={{
          transitionDelay: `${i + 3}00ms`,
        }}
        className={`text-lg whitespace-pre duration-500 ${
          !open && "opacity-0 translate-x-28 overflow-hidden"
        }`}
      >
        {menu?.name}
      </h2>
      <h2
        className={`${
          open && "hidden"
        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
      >
        {menu?.name}
      </h2>
    </Link>
  );
};

export default LinkItem;
