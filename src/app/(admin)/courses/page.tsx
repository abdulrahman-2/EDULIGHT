import { CustomSelect } from "@/components/common/CustomSelect";
import Search from "@/components/common/Search";
import CourseCard from "@/components/layout/dashboard/CourseCard";



const Course = () => {
  return (
    <div className="flex flex-col">
        <h1 className="my-5 text-3xl font-semibold">My Courses</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 ">
        <div className="col-span-2 flex flex-col space-y-1">
          <span className="text-[12px] text-gray-400 ml-2">Search:</span>
          <Search placeholder="Search in your courses..." />
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-[12px] text-gray-400 ml-2">Sort by:</span>
          <CustomSelect items={["Latest", "Oldest", "a-z", "z-a"]} />
        </div>
        <div className="flex flex-col space-y-1 ">
          <span className="text-[12px] text-gray-400 ml-2 ">Category:</span>
          <CustomSelect items={["Web", "Mobile", "Design"]}  />
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-[12px] text-gray-400 ml-2">Rating:</span>
          <CustomSelect
            items={["4 Star & Up", "3 Star & Up", "2 Star & Up", "1 Star & Up"]}
          />
        </div>
      </div>
  {/* Cards  */}
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
<CourseCard/>
</div>
    </div>
  );
};

export default Course;
