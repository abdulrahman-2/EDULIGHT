import Image from "next/image";
import logo from "@/assets/das-images/dark-logo.png";
import { footerLinks, socialLinks } from "@/constants";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1D2026] py-20">
      <div className=" container md:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  ">
          <div>
            <Image src={logo} width={200} height={200} alt="EduLight" />
            <p className="text-gray-400 my-5 text-[12px]">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <div
                  key={link.id}
                  className={`bg-[#585f6b2f] text-white w-8 h-8 flex items-center justify-center rounded-full duration-150 ${
                    link.name === "facebook"
                      ? "hover:bg-[#1877f2] hover:shadow-md hover:shadow-[#1877f2]"
                      : link.name === "insta"
                      ? "hover:bg-[#e4405f] hover:shadow-md hover:shadow-[#e4405f]"
                      : link.name === "twitter"
                      ? "hover:bg-[#1da1f2] hover:shadow-md hover:shadow-[#1da1f2]"
                      : link.name === "linkedin"
                      ? "hover:bg-[#0077b5] hover:shadow-md hover:shadow-[#0077b5]"
                      : link.name === "youtube"
                      ? "hover:bg-[#ff0000] hover:shadow-md hover:shadow-[#ff0000]"
                      : ""
                  }`}
                >
                  <Link href={link.link} className="">
                    {link.icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 md:px-10 mt-8 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {footerLinks.map((link) => (
              <div key={link.id} className="flex flex-col gap-4">
                <h4 className="text-white font-semibold">{link.groupTitle}</h4>
                {link.links.map((item) => (
                   <div key={item.id} className="flex hover:border-b-2 pb-1 border-[#FF6636] items-center  group gap-2 w-fit">
                  <Link
                    href={item.link}
                    key={item.id}
                    className="text-gray-400 hover:text-white  duration-150"
                  >
                    {item.title}
                  </Link>
                   <FiArrowRight className=" group-hover:translate-x-1 transition-transform duration-200 cursor-pointer text-transparent group-hover:text-white" />
                 </div>
                ))}
              </div>
            ))}
            </div>
          </div>
          <div className="col-span-1 mt-8 md:mt-0">
          <h4 className="text-white font-semibold">Download Our App</h4>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4 px-5 py-3 w-fit bg-[#363B4766] rounded-md text-white">
            <FaApple className="text-4xl" />
            <div>
              <p className="text-[10px] text-gray-400">Download Now</p>
              <p className="text-[14px]">App Store</p>

            </div>
            </div>
            <div className="flex items-center gap-4 px-5 py-3 w-fit bg-[#363B4766] rounded-md text-white">
            <FaGooglePlay className="text-3xl" />
            <div>
              <p className="text-[10px] text-gray-400">Download Now</p>
              <p className="text-[14px]">Google Play</p>

            </div>
            </div>

          </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
