import { IoAddCircleOutline, IoStatsChart } from "react-icons/io5";
import { RiStackLine } from "react-icons/ri";
import courseImage from "../assets/das-images/Course Images.png";
import instructorImage from "@/assets/das-images/person.png";
import instructorCardImage from "@/assets/home-images/instructor.png";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import netflix from "@/assets/home-images/netflix.png";
import youtube from "@/assets/home-images/youtube.png";
import google from "@/assets/home-images/google.png";
import lenovo from "@/assets/home-images/lenovo.png";
import slack from "@/assets/home-images/slack.png";
import verizon from "@/assets/home-images/verizon.png";
import lexmark from "@/assets/home-images/lexmark.png";
import microsoft from "@/assets/home-images/microsoft.png";
import examImg_1 from "@/assets/home-images/exam-1.png";
import examImg_2 from "@/assets/home-images/exam-2.png";
import examImg_3 from "@/assets/home-images/exam-3.png";

import {
  PiChartBarHorizontalDuotone,
  PiCheckSquareOffsetDuotone,
  PiClockDuotone,
  PiCreditCardBold,
  PiCrownSimpleDuotone,
  PiGear,
  PiGlobeHemisphereWestDuotone,
  PiHandshakeDuotone,
  PiIdentificationCardDuotone,
  PiNewspaperClippingDuotone,
  PiNotebookDuotone,
  PiNotepadDuotone,
  PiNotepadLight,
  PiPenNib,
  PiPlayCircleDuotone,
  PiReceiptDuotone,
  PiStack,
  PiTrophyDuotone,
  PiUserCircle,
  PiUsersDuotone,
} from "react-icons/pi";
import {
  AboutWords,
  CompaniesLogos,
  CourseCardContent,
  DashInfo,
  Faqs,
  FeaturedCourses,
  FooterLinks,
  HomeCategories,
  Links,
  SocialLinks,
  StudentCard,
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
  {
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
export const homeNavItems: Links[] = [
  { name: "Home", link: "/", icon: undefined },
  { name: "Courses", link: "/home-courses", icon: undefined },
  { name: "Roadmaps", link: "/roadmaps", icon: undefined },
  { name: "Exams", link: "/exams", icon: undefined },
  { name: "About", link: "/about", icon: undefined },
  { name: "Contact", link: "/contact", icon: undefined },
  { name: "Become an Instructor", link: "/instructor", icon: undefined },
  { name: "Become a Company", link: "/company", icon: undefined },
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
      { id: 2, title: "FAQs", link: "/faqs" },
      { id: 3, title: "Terms & Condition", link: "/terms" },
      { id: 4, title: "Privacy Policy", link: "/privacy" },
    ],
  },
];

export const aboutInfo: DashInfo[] = [
  {
    id: 1,
    title: "Students",
    value: "67.3K",
    icon: <PiUsersDuotone />,
    color: "#293897",
  },
  {
    id: 2,
    title: "Certified Instructor",
    value: "26K",
    color: "#564FFD",
    icon: <PiNotebookDuotone />,
  },
  {
    id: 3,
    title: "Country Language",
    value: "72",
    icon: <PiGlobeHemisphereWestDuotone />,
    color: "#E34444",
  },
  {
    id: 4,
    title: "Success Rate",
    value: "99.9%",
    icon: <TbRosetteDiscountCheck />,
    color: "#23BD33",
  },
  {
    id: 5,
    title: "Trusted Companies",
    value: "57",
    icon: <PiStack />,
    color: "#FD8E1F",
  },
];

export const aboutWords: AboutWords[] = [
  {
    id: 1,
    job: "Chief Chairman of",
    name: "Sundar Pichai",
    company: "Google",
    desc: "Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.",
  },
  {
    id: 2,
    job: "CEO of",
    name: "Satya Nadella",
    company: "Microsoft",
    desc: "Edugaurd responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers.",
  },
  {
    id: 3,
    job: "Chief Executive Officer of",
    name: "Ted Sarandos",
    company: "Netflix",
    desc: "In total, it was a big success, I would get emails about what a fantastic resource it was.",
  },
];

export const faqs: Faqs[] = [
  {
    id: 1,
    question: "What is Donec malesuada?",
    answer:
      "Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae iaculis lacus, id fringilla leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed luctus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.",
    category: "Donec malesuada",
  },
  {
    id: 2,
    question: "What is Quisque used for?",
    answer: "Quisque helps organize and manage your content.",
    category: "Quisque",
  },
  {
    id: 3,
    question: "Toqum info?",
    answer: "Toqum is great for layout and performance.",
    category: "Toqum, in accumsan",
  },
  {
    id: 4,
    question: "What is Ut sed orci?",
    answer: "Ut sed orci is all about positioning and styling.",
    category: "Ut sed orci",
  },
];

export const instructorPageInfo: DashInfo[] = [
  {
    id: 1,
    title: "1. Apply to become instructor.",
    value:
      "Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.",
    color: "#564FFD",
    bgColor: "#564FFD1A",
    icon: <PiNewspaperClippingDuotone />,
  },
  {
    id: 2,
    title: "2. Setup & edit your profile.",
    value:
      "Duis non ipsum at leo efficitur pulvinar. Morbi semper nisi eget accumsan ullamcorper.",
    color: "#E34444",
    bgColor: "#FFF0F0",
    icon: <PiIdentificationCardDuotone />,
  },
  {
    id: 3,
    title: "3. Create your new course",
    value:
      "Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque. ",
    color: "#293897",
    bgColor: "#EAEBF5",
    icon: <PiPlayCircleDuotone />,
  },
  {
    id: 4,
    title: "4. Start teaching & earning",
    value:
      "Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque.  ",
    color: "#23BD33",
    bgColor: "#E1F7E3",
    icon: <PiHandshakeDuotone />,
  },
];

export const studentDash: DashInfo[] = [
  {
    id: 1,
    icon: <PiPlayCircleDuotone />,
    color: "#293897",
    bgColor: "#EAEBF5",
    title: "Enrolled Courses",
    value: "957",
  },
  {
    id: 2,
    icon: <PiCheckSquareOffsetDuotone />,
    color: "#FF6636",
    bgColor: "#FFDDD1",
    title: "Active Courses",
    value: "6",
  },
  {
    id: 3,
    icon: <PiTrophyDuotone />,
    color: "#23BD33",
    bgColor: "#E1F7E3",
    title: "Completed Courses",
    value: "901",
  },
];

export const studentCard: StudentCard[] = [
  {
    id: 1,
    title: "1. Intorductions",
    courseName: "Reiki Level I, II and Master/Teacher Program",
    image: courseImage,
    btnText: "Watch Lecture",
  },
  {
    id: 2,
    title: "2. Intorductions",
    courseName: "Reiki Level I, II and Master/Teacher Program",
    image: courseImage,
    btnText: "Watch Lecture",
  },
  {
    id: 3,
    title: "3. Intorductions",
    courseName: "Reiki Level I, II and Master/Teacher Program",
    image: courseImage,
    btnText: "Watch Lecture",
  },
  {
    id: 4,
    title: "1. Intorductions",
    courseName: "Reiki Level I, II and Master/Teacher Program",
    image: courseImage,
    btnText: "Watch Lecture",
    status: "12% Finish",
  },
  {
    id: 5,
    title: "2. Intorductions",
    courseName: "Reiki Level I, II and Master/Teacher Program",
    image: courseImage,
    btnText: "Watch Lecture",
    status: "61% Completed",
  },
  {
    id: 6,
    title: "3. Intorductions",
    courseName: "Reiki Level I, II and Master/Teacher Program",
    image: courseImage,
    btnText: "Watch Lecture",
  },
];

export const examasData: CourseCardContent[] = [
  {
    id: 1,
    image: examImg_3,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 2,
    image: examImg_1,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 3,
    image: examImg_2,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 4,
    image: examImg_3,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 5,
    image: examImg_1,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 6,
    image: examImg_2,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 7,
    image: examImg_3,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 8,
    image: examImg_1,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 9,
    image: examImg_2,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 10,
    image: examImg_3,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 11,
    image: examImg_1,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 12,
    image: examImg_2,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 13,
    image: examImg_3,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 14,
    image: examImg_1,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
  {
    id: 15,
    image: examImg_2,
    category: "Web Development",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem.",
    desc: "description of the course",
    students: "1,674,767",
    duration: "30m",
  },
];

export const curriculum = [
  {
    id: 1,
    title: "Week 1",
    lessons: [
      {
        id: 1,
        title: "What’s is Webflow?",
        video: "/watch",
        time: "10m",
      },
      {
        id: 2,
        title: "Sign up in Webflow",
        video: "/watch",
        time: "10m",
      },
      {
        id: 3,
        title: "Teaser of Webflow",
        video: "/watch",
        time: "10m",
      },
    ],
  },
  {
    id: 2,
    title: "Secret of Good Design",
    lessons: [
      {
        id: 1,
        title: "What’s is Webflow?",
        video: "/watch",
        time: "10m",
      },
      {
        id: 2,
        title: "Sign up in Webflow",
        video: "/watch",
        time: "10m",
      },
      {
        id: 3,
        title: "Teaser of Webflow",
        video: "/watch",
        time: "10m",
      },
    ],
  },
  {
    id: 3,
    title: "Practice Design Like an Artist",
    lessons: [
      {
        id: 1,
        title: "What’s is Webflow?",
        video: "/watch",
        time: "10m",
      },
      {
        id: 2,
        title: "Sign up in Webflow",
        video: "/watch",
        time: "10m",
      },
      {
        id: 3,
        title: "Teaser of Webflow",
        video: "/watch",
        time: "10m",
      },
    ],
  },

  {
    id: 4,
    title: "Web Development (webflow)",
    lessons: [
      {
        id: 1,
        title: "What’s is Webflow?",
        video: "/watch",
        time: "10m",
      },
      {
        id: 2,
        title: "Sign up in Webflow",
        video: "/watch",
        time: "10m",
      },
      {
        id: 3,
        title: "Teaser of Webflow",
        video: "/watch",
        time: "10m",
      },
    ],
  },

  {
    id: 5,
    title: "Secrets of Making Money Freelancing",
    lessons: [
      {
        id: 1,
        title: "What’s is Webflow?",
        video: "/watch",
        time: "10m",
      },
      {
        id: 2,
        title: "Sign up in Webflow",
        video: "/watch",
        time: "10m",
      },
      {
        id: 3,
        title: "Teaser of Webflow",
        video: "/watch",
        time: "10m",
      },
    ],
  },
];
