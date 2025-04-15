import { IoAddCircleOutline, IoStatsChart } from "react-icons/io5";
import { RiStackLine } from "react-icons/ri";
import courseImage from "../assets/das-images/Course Images.png";
import instructorImage from "@/assets/das-images/person.png";
import instructorCardImage from "@/assets/home-images/instructor.png";

import netflix from "@/assets/home-images/netflix.png";
import youtube from "@/assets/home-images/youtube.png";
import google from "@/assets/home-images/google.png";
import lenovo from "@/assets/home-images/lenovo.png";
import slack from "@/assets/home-images/slack.png";
import verizon from "@/assets/home-images/verizon.png";
import lexmark from "@/assets/home-images/lexmark.png";
import microsoft from "@/assets/home-images/microsoft.png";

import {
  PiChartBarHorizontalDuotone,
  PiClockDuotone,
  PiCreditCardBold,
  PiCrownSimpleDuotone,
  PiGear,
  PiNotebookDuotone,
  PiNotepadDuotone,
  PiNotepadLight,
  PiPenNib,
  PiPlayCircleDuotone,
  PiReceiptDuotone,
  PiTrophyDuotone,
  PiUserCircle,
  PiUsersDuotone,
} from "react-icons/pi";
import {
  CompaniesLogos,
  CourseCardContent,
  DashInfo,
  FeaturedCourses,
  FooterLinks,
  HomeCategories,
  HomeNavItems,
  Links,
  SocialLinks,
  TableData,
  TechAndEarn,
} from "@/types";
import { LogOutIcon } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

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
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    bgColor: "#FFEEE8",
    color: "#293897",
  },
  {
    id: 2,
    title: "Current Balance",
    value: "$16,593.00",
    icon: <PiReceiptDuotone />,
    bgColor: "#EBEBFF",
    color: "#564FFD",
  },
  {
    id: 3,
    title: "Total Withdrawals",
    value: "$7,461,767",
    icon: <PiCreditCardBold />,
    bgColor: "#FFF0F0",
    color: "#E34444",
  },
  {
    id: 4,
    title: "Today Revenue",
    value: "$162.000",
    icon: <PiCrownSimpleDuotone />,
    bgColor: "#E1F7E3",
    color: "#23BD33",
  },
];

export const tableData: TableData[] = [
  {
    id: 1,
    date: "21 Sep, 2021 at 2:14 AM",
    method: "Mastercards",
    amount: "American Express",
    status: "Pending",
  },
  {
    id: 2,
    date: "21 Sep, 2021 at 2:14 AM",
    method: "Visa",
    amount: "American Express",
    status: "Pending",
  },
  {
    id: 3,
    date: "21 Sep, 2021 at 2:14 AM",
    method: "Visa",
    amount: "American Express",
    status: "Pending",
  },
  {
    id: 4,
    date: "21 Sep, 2021 at 2:14 AM",
    method: "Mastercards",
    amount: "American Express",
    status: "Completed",
  },
  {
    id: 5,
    date: "21 Sep, 2021 at 2:14 AM",
    method: "Visa",
    amount: "American Express",
    status: "Cansled",
  },
  {
    id: 6,
    date: "21 Sep, 2021 at 2:14 AM",
    method: "Visa",
    amount: "American Express",
    status: "Completed",
  },
  {
    id: 7,
    date: "21 Sep, 2021 at 2:14 AM",
    method: "Mastercards",
    amount: "American Express",
    status: "Completed",
  },
];

// website fake data -----------------
export const homeNavItems: HomeNavItems[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Courses",
    link: "/home-courses",
  },
  {
    id: 3,
    title: "Roadmaps",
    link: "/roadmaps",
  },
  {
    id: 4,
    title: "Exams",
    link: "/exams",
  },
  {
    id: 5,
    title: "About",
    link: "/about",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 7,
    title: "Become an Instructor",
    link: "/instructor",
  },
  {
    id: 8,
    title: "Become a Company",
    link: "/company",
  },
];

export const homeCategories: HomeCategories[] = [
  {
    id: 1,
    category: "Business",
    link: "/business",
    coursesCount: "52,822 Courses",
    icon: <PiPenNib />,
    bgColor: "#EAEBF5",
  },
  {
    id: 2,
    category: "Business",
    link: "/business",
    coursesCount: "52,822 Courses",
    icon: <PiPenNib />,
    bgColor: "#EAEBF5",
  },
  {
    id: 3,
    category: "Business",
    link: "/business",
    coursesCount: "52,822 Courses",
    icon: <PiPenNib />,
    bgColor: "#EAEBF5",
  },
  {
    id: 4,
    category: "Business",
    link: "/business",

    coursesCount: "52,822 Courses",
    icon: <PiPenNib />,
    bgColor: "#EAEBF5",
  },
  {
    id: 5,
    category: "Business",
    link: "/business",

    coursesCount: "52,822 Courses",
    icon: <PiPenNib />,
    bgColor: "#EAEBF5",
  },
  {
    id: 6,
    category: "Business",
    link: "/business",

    coursesCount: "52,822 Courses",
    icon: <PiPenNib />,
    bgColor: "#EAEBF5",
  },
];

export const featuredCourses: FeaturedCourses[] = [
  {
    id: 1,
    image: courseImage,
    title: "The Complete JavaScript Course 2022: From Zero to Expert!",
    link: "/course-details",
    instructor: "Traversy Media",
    level: "Beginner",
    hours: "10 hours",
    category: "JavaScript",
    rating: "4.9",
    students: "550.4K",
    price: "$12.99",
    oldPrice: "$19.99",
    ratingCount: "50,000",
    instructorImage: instructorImage,
  },
  {
    id: 2,
    image: courseImage,
    title: "The Complete JavaScript Course 2022: From Zero to Expert!",
    link: "/course-details",
    instructor: "Traversy Media",
    level: "Beginner",
    hours: "10 hours",
    category: "JavaScript",
    rating: "4.9",
    students: "50,000",
    price: "$12.99",
    oldPrice: "$19.99",
    ratingCount: "50,000",
    instructorImage: instructorImage,
  },
  {
    id: 3,
    instructorImage: instructorImage,
    image: courseImage,
    title: "The Complete JavaScript Course 2022: From Zero to Expert!",
    link: "/course-details",
    instructor: "Traversy Media",
    level: "Beginner",
    hours: "10 hours",
    category: "JavaScript",
    rating: "4.9",
    students: "50,000",
    price: "$12.99",
    oldPrice: "$19.99",
    ratingCount: "50,000",
  },
  {
    id: 4,
    image: courseImage,
    title: "The Complete JavaScript Course 2022: From Zero to Expert!",
    link: "/course-details",
    instructor: "Traversy Media",
    level: "Beginner",
    hours: "10 hours",
    category: "JavaScript",
    rating: "4.9",
    students: "50,000",
    price: "$12.99",
    instructorImage: instructorImage,
    oldPrice: "$19.99",
    ratingCount: "50,000",
  },
];

export const techAndEarn: TechAndEarn[] = [
  {
    id: 1,
    bgColor: "#EBEBFF",
    textColor: "#564FFD",
    title: "Apply to become instructor",
  },
  {
    id: 2,
    bgColor: "#FFF0F0",
    textColor: "#293897",
    title: "Build & edit your profile",
  },
  {
    id: 3,
    bgColor: "#FFF0F0",
    textColor: "#E34444",
    title: "Create your new course",
  },
  {
    id: 4,
    bgColor: "#E1F7E3",
    textColor: "#23BD33",
    title: "Start teaching & earning",
  },
];
export const instructorInfo: CourseCardContent[] = [
  {
    id: 1,
    image: instructorCardImage,
    category: "Digital Product Designer",
    title: "Darrell Steward",
    rating: "4.9",
    students: "50,000",
  },
  {
    id: 2,
    image: instructorCardImage,
    category: "Digital Product Designer",
    title: "Darrell Steward",
    rating: "4.9",
    students: "50,000",
  },
  {
    id: 3,
    image: instructorCardImage,
    category: "Digital Product Designer",
    title: "Darrell Steward",
    rating: "4.9",
    students: "50,000",
  },
  {
    id: 4,
    image: instructorCardImage,
    category: "Digital Product Designer",
    title: "Darrell Steward",
    rating: "4.9",
    students: "50,000",
  },
  {
    id: 5,
    image: instructorCardImage,
    category: "Digital Product Designer",
    title: "Darrell Steward",
    rating: "4.9",
    students: "50,000",
  },
];
export const companiesLogos: CompaniesLogos[] = [
  { id: 1, image: netflix },
  {
    id: 2,
    image: youtube,
  },
  {
    id: 3,
    image: google,
  },
  {
    id: 4,
    image: lenovo,
  },
  {
    id: 5,
    image: slack,
  },
  {
    id: 6,
    image: verizon,
  },
  {
    id: 7,
    image: lexmark,
  },
  {
    id: 8,
    image: microsoft,
  },
];
export const socialLinks: SocialLinks[] = [
  {
    id: 1,
    link: "https://www.facebook.com/",
    icon: <FaFacebook />,
    bgColor: "#1877f2",
    name: "facebook",
  },
  {
    id: 2,
    link: "https://www.instagram.com/",
    icon: <FaInstagram />,
    bgColor: "#c32aa3",
    name: "insta",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
    bgColor: "#0a66c2",
    name: "linkedin",
  },
  {
    id: 4,
    link: "https://www.twitter.com/",

    icon: <FaTwitter />,
    bgColor: "#1da1f2",
    name: "twitter",
  },
  {
    id: 5,
    link: "https://www.youtube.com/",
    icon: <FaYoutube />,
    bgColor: "#ff0000",
    name: "youtube",
  },
];

export const footerLinks: FooterLinks[] = [
  {
    id: 1,
    groupTitle: "Top 4 Category",
    links: [
      { id: 1, title: "Development", link: "/" },
      { id: 2, title: "Finance & Accounting", link: "/" },
      { id: 3, title: "Design", link: "/" },
      { id: 4, title: "Business", link: "/" },
    ],
  },
  {
    id: 2,
    groupTitle: "Quick Links",
    links: [
      { id: 1, title: "About", link: "/about" },
      { id: 2, title: "Become an Instructor", link: "/instructor" },
      { id: 3, title: "Contact", link: "/contact" },
      { id: 4, title: "Career", link: "/career" },
    ],
  },
  {
    id: 3,
    groupTitle: "Support",
    links: [
      { id: 1, title: "Help Center", link: "/help" },
      { id: 2, title: "FAQs", link: "/faqa" },
      { id: 3, title: "Terms & Condition", link: "/terms" },
      { id: 4, title: "Privacy Policy", link: "/privacy" },
    ],
  },
];
