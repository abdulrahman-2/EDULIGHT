import { IoAddCircleOutline, IoStatsChart } from "react-icons/io5";
import { RiStackLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import {
  PiCreditCardBold,
  PiGear,
  PiNotepadLight,
  PiUserCircle,
} from "react-icons/pi";
import { DashInfo, Links } from "@/types";

export const links: Links[] = [
  {
    id: 1,
    label: "Dashboard",
    url: "/dashboard",
    icon: <IoStatsChart />,
  },
  {
    id: 2,
    label: "Create New Course",
    url: "/create-course",
    icon: <IoAddCircleOutline />,
  },
  {
    id: 3,
    label: "My Courses",
    url: "/courses",
    icon: <RiStackLine />,
  },
  {
    id: 4,
    label: "Earning",
    url: "/earning",
    icon: <PiCreditCardBold />,
  },
  {
    id: 5,
    label: "Message",
    url: "/message",
    icon: <AiOutlineMessage />,
  },
  {
    id: 6,
    label: "Setting",
    url: "/setting",
    icon: <PiGear />,
  },
];

export const dashInfo: DashInfo[] = [
  {
    id: 1,
    title: "Students",
    value: "1,674,767",
    percentage: "10%",
    icon: <PiUserCircle />,
  },
  {
    id: 2,
    title: "Online Courses",
    value: "3",
    percentage: "30%",
    icon: <PiNotepadLight />,
  },
  {
    id: 3,
    title: "USD Total Earning",
    value: "$7,461,767",
    percentage: "50%",
    icon: <PiCreditCardBold />,
  },
  {
    id: 4,
    title: "Course Sold",
    value: "56,489",
    percentage: "70%",
    icon: <RiStackLine />,
  },
];
