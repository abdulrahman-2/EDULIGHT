import CustomHeading from "@/components/layout/home/CustomHeading";
import React from "react";
import courseImage from "@/assets/das-images/Course Images.png";
import { FaArrowRight, FaHeart, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
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
const page = () => {
  return (
    <main>
      <CustomHeading title="Shopping Cart" />
      <div className="flex flex-col gap-6 pt-10">
        <div className="container mx-auto max-w-7xl ">
          <h1 className="text-2xl font-semibold">
            Shopping Cart{" "}
            <span className="font-normal">({courses.length})</span>
          </h1>
          <div className="grid grid-cols-4 gap-10 py-5">
            <div className="overflow-x-auto  border rounded-lg col-span-4 lg:col-span-3">
              <div className="lg:grid grid-cols-4 font-semibold text-gray-500 border-b p-3 px-4 hidden">
                <span className="col-span-2">COURSE</span>
                <span className="text-left px-8 ">PRICES</span>
                <span className="text-left px-8">ACTION</span>
              </div>

              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center flex-col lg:flex-row justify-between p-4 border-b"
                >
                  <div className=" flex items-center ">
                    <div className="lg:max-w-[500px] flex flex-col sm:flex-row items-center gap-4 ">
                      <IoCloseCircleOutline className="text-4xl" />{" "}
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

                  <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-8 lg:mt-0  w-full px-8 justify-evenly lg:justify-between">
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

                    <div className="flex  items-center  gap-2">
                      <button className="px-3  py-2  text-primary  rounded-lg hover:bg-primary/10 hover:text-red-400 duration-200 ">
                        Move to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Checkout Section */}
            <div className="col-span-4 lg:col-span-1 border rounded-lg p-6  h-fit lg:sticky lg:top-5">
              <div className="flex justify-between mb-4">
                <span className="text-gray-500">Subtotal</span>
                <span>$61.97 USD</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-500">Coupon Discount</span>
                <span>8%</span>
              </div>
              <div className="flex justify-between mb-4 border-b pb-4">
                <span className="text-gray-500">Taxes</span>
                <span>$17.99 USD</span>
              </div>
              <div className="flex justify-between mb-2  text-lg">
                <span>Total:</span>
                <span className="font-semibold">$75.00 USD</span>
              </div>
              <div className="pb-4 border-b">
                <div className="flex justify-center items-center gap-2 text-white  group bg-primary py-2 px-4 rounded-lg mt-2 md:mt-0 ">
                  <Link
                    href="/checkout"
                    className="transition-colors duration-200"
                  >
                    Prosses to checkout
                  </Link>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 cursor-pointer" />
                </div>
              </div>
              <p className="py-4">Apply coupon code</p>
              <div>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border rounded-lg px-4 py-2 w-full relative"
                />
                <button className="bg-black hover:bg-black/80 duration-200 text-white py-2 px-4 rounded-lg absolute right-5">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
