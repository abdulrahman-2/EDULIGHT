import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
const Search = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="relative flex items-center bg-white dark:bg-transparent rounded-xl ">
      <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
      <Input
        placeholder={placeholder}
        className="w-full pl-8 dark:border-gray-600 rounded-lg placeholder:text-[12px]"
      />
    </div>
  );
};

export default Search;
