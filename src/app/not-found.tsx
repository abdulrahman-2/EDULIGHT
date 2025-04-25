import CustomSection from "@/components/layout/home/CustomSection";
import React from "react";
import error from "@/assets/home-images/error.png";
import Header from "@/components/layout/home/header/Header";
import BottomNav from "@/components/layout/home/header/BottomNav";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="py-0 md:py-32 lg:py-0">
        <CustomSection
          headingText="Oops! page not found"
          paragraph="Something went wrong. It’s look that your requested could not be found. It&quat;s look like the link is broken or the page is removed."
          aboutOnly="Error 404"
          image={error}
          imgDevClasses="w-[360px] md:w-[550px] h-[320px] lg:h-[600px]"
          linkText="Go Back"
        />
      </div>
    </div>
  );
};

export default NotFound;
