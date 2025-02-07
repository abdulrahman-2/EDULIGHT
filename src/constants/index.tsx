
import { IoAddCircleOutline, IoStatsChart } from "react-icons/io5";
import { GiStack } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { PiCreditCardBold, PiGear } from "react-icons/pi";

export const links: {id:number; label: string; url: string, icon: React.ReactElement  }[] =
[
  {
    id:1,
    label: "Dashboard",
    url: "/dashboard",
    icon: <IoStatsChart/>,
  },
  {
    id:2,
    label: "Create New Course",
    url: "/create-course",
    icon: <IoAddCircleOutline />,
  },
  {
    id:3,
    label: "My Courses",
    url: "/courses",
    icon: <GiStack />,
  },
  {
    id:4,
    label: "Earning",
    url: "/earning",
    icon: <PiCreditCardBold />,
  },
  {
    id:5,
    label: "Message",
    url: "/message",
    icon: <AiOutlineMessage />,
  },
  {
    id:6,
    label: "Setting",
    url: "/setting",
    icon: <PiGear />,
  },


]