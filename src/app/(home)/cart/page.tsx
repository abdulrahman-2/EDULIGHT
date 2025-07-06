"use client";

import CustomHeading from "@/components/layout/home/CustomHeading";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { removeFromCart } from "@/features/cart/cartSlice";
import { addToWishlist } from "@/features/wishlist/wishlistSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
    toast.success("Removed from cart");
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleMoveToWishlist = (course: any) => {
    dispatch(removeFromCart(course.id));
    dispatch(addToWishlist(course));
    toast.success("Moved to wishlist");
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace("$", ""))
        : typeof item.price === "number"
        ? item.price
        : 0;
    return acc + price * (item.quantity || 1);
  }, 0);

  const createCheckout = async () => {
    if (user) {
      const stripe = await stripePromise;
      try {
        const { data } = await axios.post("/api/checkout", {
          items: cartItems,
        });

        if (data.success) {
          await stripe?.redirectToCheckout({ sessionId: data.id });
        } else {
          toast.error("Failed to create checkout session.");
        }
      } catch (error) {
        console.error("Error in createCheckout:", error);
        toast.error("There was an error with the checkout process.");
      }
    } else {
      toast.error("Please sign in to make Checkout");
    }
  };

  return (
    <main>
      <CustomHeading title="Shopping Cart" />

      <div className="flex flex-col gap-6 pt-10">
        <div className="container mx-auto max-w-7xl ">
          <h1 className="text-2xl font-semibold">
            Shopping Cart{" "}
            <span className="font-normal">({cartItems.length})</span>
          </h1>

          <div className="grid grid-cols-4 gap-10 py-5">
            <div className="overflow-x-auto border rounded-lg col-span-4 lg:col-span-3">
              <div className="lg:grid grid-cols-4 font-semibold text-gray-500 border-b p-3 px-4 hidden">
                <span className="col-span-2">COURSE</span>
                <span className="text-left px-8">PRICES</span>
                <span className="text-left px-8">ACTION</span>
              </div>

              {cartItems.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center flex-col lg:flex-row justify-between p-4 border-b"
                >
                  <div className="flex items-center">
                    <div className="lg:max-w-[500px] flex flex-col sm:flex-row items-center gap-4">
                      <IoCloseCircleOutline
                        className="text-4xl cursor-pointer"
                        onClick={() => handleRemove(course.id)}
                      />
                      <div className="relative w-[260px] h-[120px]">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-contain rounded-md"
                        />
                      </div>
                      <div className="flex items-center justify-center md:justify-start flex-col">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <span className="flex items-center gap-1">
                            <FaStar className="text-[#FD8E1F] text-lg" />
                            {course.rating}
                          </span>
                          <span className="text-gray-400 font-normal">
                            ({course.students} Reviews)
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg my-1 sm:my-2 text-center sm:text-left">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 sm:mt-1">
                          Category: {course.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-8 lg:mt-0 w-full px-8 justify-evenly lg:justify-between">
                    <div className="text-center flex items-center flex-row sm:flex-col md:flex-row gap-1 mb-3 sm:mb-0">
                      <p className="text-lg font-semibold text-blue-600 flex gap-1">
                        <span className="font-normal text-black block lg:hidden">
                          Price:
                        </span>
                        {course.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        className="px-3 py-2 text-primary rounded-lg hover:bg-primary/10 hover:text-red-400 duration-200"
                        onClick={() => handleMoveToWishlist(course)}
                      >
                        Move to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Section */}
            <div className="col-span-4 lg:col-span-1 border rounded-lg p-6 h-fit lg:sticky lg:top-5 bg-white shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Coupon Discount</span>
                  <span className="text-green-600 font-medium">- $0.00</span>
                </div>

                <div className="flex justify-between text-gray-700 border-b pb-3">
                  <span>Estimated Tax</span>
                  <span>$0.00</span>
                </div>

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => createCheckout()}
                  disabled={cartItems.length === 0}
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Pay with Card
                </button>

                <div className="pt-4">
                  <p className="text-sm text-gray-500 pb-2">
                    Apply coupon code
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="border rounded-lg px-4 py-2 w-full"
                    />
                    <button className="bg-black hover:bg-black/80 text-white py-2 px-4 rounded-lg absolute right-2 top-1">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
