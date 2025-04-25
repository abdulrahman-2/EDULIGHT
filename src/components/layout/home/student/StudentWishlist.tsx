import { studentCard } from "@/constants";
import React from "react";
import courseImage from "@/assets/das-images/Course Images.png";
import { FaHeart, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { Heart } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "The Ultimate Drawing Course – Beginner to Advanced",
    rating: 4.6,
    reviews: "451,444",
    price: "$37.00",
    originalPrice: "$49.00",
    image: courseImage,
    instructors: ["Harry Potter", "John Wick"],
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass - 23 Courses in 1",
    rating: 4.8,
    reviews: "451,444",
    price: "$24.00",
    originalPrice: "",
    image: courseImage,
    instructors: ["Nobody"],
  },
  {
    id: 3,
    title: "Angular - The Complete Guide (2021 Edition)",
    rating: 4.7,
    reviews: "451,444",
    price: "$13.00",
    originalPrice: "",
    image: courseImage,
    instructors: ["Kevin Gilbert"],
  },
];
const StudentWishlist = () => {
  return (
    <main>
      <div className="flex flex-col gap-6 pt-10">
        <div className="container md:px-0">
          <h1 className="text-2xl font-semibold">
            Wishlist <span className="font-normal">({courses.length})</span>
          </h1>
        </div>

        <div className="container md:px-0">
          <div className="overflow-x-auto  mt-10 border rounded-lg">
            <div className="lg:grid grid-cols-3 font-semibold text-gray-500 border-b p-3 px-4 hidden">
              <span>COURSE</span>
              <span className="text-center ">PRICES</span>
              <span className="text-center ">ACTION</span>
            </div>

            {courses.map((course) => (
              <div
                key={course.id}
                className="flex items-center flex-col lg:flex-row justify-between p-4 border-b"
              >
                <div className="flex items-center ">
                  <div className="lg:max-w-[500px] flex flex-col sm:flex-row items-center gap-4 ">
                    {" "}
                    <div className="relative w-[260px]  h-[120px]">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex items-center justify-center md:justify-start flex-col">
                      <div className="flex items-center  gap-2 text-sm font-semibold">
                        <span className="flex items-center gap-1">
                          <FaStar className="text-[#FD8E1F] text-lg" />{" "}
                          {course.rating}
                        </span>
                        <span className="text-gray-400 font-normal">
                          ({course.reviews} Reviews)
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg my-1 sm:my-2 text-center sm:text-left">
                
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 sm:mt-1">
                        Course by: {course.instructors.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-8 lg:mt-0 lg:w-[calc(100%-600px)] w-full justify-evenly lg:justify-between">
                  <div className="text-center flex items-center flex-row sm:flex-col md:flex-row gap-1 mb-3 sm:mb-0">
                    <p className="text-lg font-semibold text-blue-600 flex gap-1">
                      <span className="font-normal text-black block lg:hidden ">
                        Price:
                      </span>
                      {course.price}
                    </p>
                    {course.originalPrice && (
                      <p className="text-sm line-through text-gray-400">
                        {course.originalPrice}
                      </p>
                    )}
                  </div>

                  <div className="flex  items-center gap-2">
                    <button className="px-3 md:px-4 lg:px-6 py-2 md:py-3 hover:bg-gray-100 bg-gray-200 duration-200 text-gray-700 rounded-lg ">
                      Buy Now
                    </button>
                    <button className="px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-primary text-white rounded-lg hover:bg-primary/90 duration-200 ">
                      Add To Cart
                    </button>
                    <button className="text-gray-400  bg-gray-200 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center hover:text-primary duration-200 transition-colors">
                      <FaHeart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentWishlist;
