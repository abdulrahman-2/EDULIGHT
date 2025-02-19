import { IoAddCircleOutline, IoStatsChart } from "react-icons/io5";
import { RiStackLine } from "react-icons/ri";
import courseImage from "../assets/das-images/Course Images.png";

import {
  PiChartBarHorizontalDuotone,
  PiClockDuotone,
  PiCreditCardBold,
  PiCrownSimpleDuotone,
  PiGear,
  PiNotebookDuotone,
  PiNotepadDuotone,
  PiNotepadLight,
  PiPlayCircleDuotone,
  PiReceiptDuotone,
  PiTrophyDuotone,
  PiUserCircle,
  PiUsersDuotone,
} from "react-icons/pi";
import { CourseCardContent, DashInfo, Links, TableData } from "@/types";
import { LogOutIcon } from "lucide-react";

export const menus: Links[] = [
  { name: "Dashboard", link: "/dashboard", icon: <IoStatsChart /> },
  {
    name: "Create Course",
    link: "/create-course",
    icon: <IoAddCircleOutline />,
  },
  { name: "My Courses", link: "/courses", icon: <RiStackLine /> },
  { name: "Earning", link: "/earning", icon: <PiCreditCardBold /> },
  { name: "Setting", link: "/setting", icon: <PiGear /> },
  { name: "Logout", link: "/logout", icon: <LogOutIcon /> },
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

export const courseContent: CourseCardContent[] = [
  {
    id: 1,
    image: courseImage,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    rating: "4.5",
    students: "1,674,767",
    price: "$19.99",
  },
  {
    id: 2,
    image: courseImage,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    rating: "4.5",
    students: "1,674,767",
    price: "$19.99",
  },
  {
    id: 3,
    image: courseImage,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    rating: "4.5",
    students: "1,674,767",
    price: "$19.99",
  },
  {
    id: 4,
    image: courseImage,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    rating: "4.5",
    students: "1,674,767",
    price: "$19.99",
  },
];

export const courseDetailsCard: DashInfo[] = [
  {
    id: 1,
    title: "Beginners",
    value: "Course level",
    bgColor: "#E1F7E3",
    color: "#23BD33",
    icon: <PiChartBarHorizontalDuotone />,
  },
  {
    id: 2,
    title: "1,957",
    value: "Lecture (219.3 GB)",
    bgColor: "#FFEEE8",
    color: "#293897",
    icon: <PiPlayCircleDuotone />,
  },
  {
    id: 3,
    title: "142",
    value: "Attach File (14.4 GB)",
    bgColor: " #FFF2E5",
    color: "#FD8E1F",
    icon: <PiNotebookDuotone />,
  },
  {
    id: 4,
    title: "9,419,418",
    value: "Students enrolled",
    bgColor: "#FFF0F0",
    color: "#E34444",
    icon: <PiUsersDuotone />,
  },
  {
    id: 5,
    title: "76,395,167",
    value: "Students viewed",
    bgColor: "#F5F7FA",
    color: "#1D2026",
    icon: <PiTrophyDuotone />,
  },
  {
    id: 6,
    title: "English",
    value: "Course Language",
    bgColor: "#F5F7FA",
    color: "#1D2026",
    icon: <PiNotepadDuotone />,
  },
  {
    id: 7,
    title: "19:37:51",
    value: "Hours",
    bgColor: "#EBEBFF",
    color: "#564FFD",
    icon: <PiClockDuotone />,
  },
];



export const earningCard: DashInfo[] = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$7,461,767",
    icon: <RiStackLine />,
    bgColor:"#FFEEE8",
    color: "#293897",
  },
  {
    id: 2,
    title: "Current Balance",
    value: "$16,593.00",
    icon: <PiReceiptDuotone />,
    bgColor:"#EBEBFF",
    color:"#564FFD"
  },
  {
    id: 3,
    title: "Total Withdrawals",
    value: "$7,461,767",
    icon: <PiCreditCardBold />,
    bgColor:"#FFF0F0",
    color:"#E34444"
  },
  {
    id: 4,
    title: "Today Revenue",
    value: "$162.000",
    icon: <PiCrownSimpleDuotone />,
    bgColor:"#E1F7E3",
    color:"#23BD33"
  }

];

export const tableData:TableData[] = [
{
  id:1,
  date:"21 Sep, 2021 at 2:14 AM",
  method:"Mastercards",
  amount:'American Express',
  status:"Pending",
},
{
  id:2,
  date:"21 Sep, 2021 at 2:14 AM",
  method:"Visa",
  amount:'American Express',
  status:"Pending",
},
{
  id:3,
  date:"21 Sep, 2021 at 2:14 AM",
  method:"Visa",
  amount:'American Express',
  status:"Pending",
},
{
  id:4,
  date:"21 Sep, 2021 at 2:14 AM",
  method:"Mastercards",
  amount:'American Express',
  status:"Completed",
},
{
  id:5,
  date:"21 Sep, 2021 at 2:14 AM",
  method:"Visa",
  amount:'American Express',
  status:"Cansled",
},
{
  id:6,
  date:"21 Sep, 2021 at 2:14 AM",
  method:"Visa",
  amount:'American Express',
  status:"Completed",
},
{
  id:7,
  date:"21 Sep, 2021 at 2:14 AM",
  method:"Mastercards",
  amount:'American Express',
  status:"Completed",
},]