import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
const Search = ({ placeholder, onChange }: { placeholder: string, onChange?: any }) => {
  return (
    <div className="relative flex items-center bg-white dark:bg-transparent rounded-xl ">
      <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
      <Input
        placeholder={placeholder}
        onChange={onChange}
        className="w-full pl-8 dark:border-gray-600 rounded-lg"
      />
    </div>
  );
};

export default Search;
