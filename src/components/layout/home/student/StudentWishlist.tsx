"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart } from "@/features/cart/cartSlice";
import { removeFromWishlist } from "@/features/wishlist/wishlistSlice";
import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";

const StudentWishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleAddToCart = (course: any) => {
    dispatch(addToCart(course));
    dispatch(removeFromWishlist(course.id));
    toast.success("Added to cart");
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <main>
      <div className="flex flex-col gap-6 pt-10">
        <div className="container">
          <h1 className="text-2xl font-semibold">
            Wishlist <span className="font-normal">({wishlist.length})</span>
          </h1>
        </div>

        <div className="container">
          <div className="overflow-x-auto mt-10 border rounded-lg">
            <div className="lg:grid grid-cols-3 font-semibold text-gray-500 border-b p-3 px-4 hidden">
              <span>COURSE</span>
              <span className="text-center">PRICES</span>
              <span className="text-center">ACTION</span>
            </div>

            {wishlist.map((course) => (
              <div
                key={course.id}
                className="flex items-center flex-col lg:flex-row justify-between p-4 border-b"
              >
                <div className="flex items-center">
                  <div className="lg:max-w-[500px] flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative w-[260px] h-[120px]">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className="flex items-center gap-1">
                          <FaStar className="text-[#FD8E1F] text-lg" />
                          {course.rating}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg my-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Course by: {course.instructors?.join(", ") ?? ""}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-8 lg:mt-0 lg:w-[calc(100%-600px)] w-full justify-evenly lg:justify-between">
                  <div className="text-center flex items-center gap-2 sm:flex-col md:flex-row mb-3 sm:mb-0">
                    <p className="text-lg font-semibold text-blue-600">
                      {course.price}
                    </p>
                    {course.originalPrice && (
                      <p className="text-sm line-through text-gray-400">
                        {course.originalPrice}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-gray-200 hover:bg-gray-100 rounded-lg text-gray-700">
                      Buy Now
                    </button>
                    <button
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                      onClick={() => handleAddToCart(course)}
                    >
                      Add To Cart
                    </button>
                    <button
                      onClick={() => handleRemove(course.id)}
                      className="text-gray-400 bg-gray-200 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center hover:text-primary"
                    >
                      <FaHeart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {wishlist.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No courses in wishlist.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentWishlist;
