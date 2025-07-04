import { IoAddCircleOutline, IoStatsChart, IoStatsChartSharp } from "react-icons/io5";
import { RiRobot2Line, RiStackLine } from "react-icons/ri";
import courseImage from "../assets/das-images/Course Images.png";
import { TbNetwork, TbRosetteDiscountCheck } from "react-icons/tb";
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
  Exam,
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
  FaChartLine,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { BsQuestionSquare } from "react-icons/bs";
import { LuCodeXml } from "react-icons/lu";

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
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    category: "Web Development",
    title: "Full-Stack Web Development with React & Node.js",
    desc: "Master MERN stack and build scalable web apps from scratch.",
    rating: "4.8",
    students: "284,672",
    price: "$29.99",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
    category: "Design",
    title: "UI/UX Design with Figma: Complete Guide",
    desc: "Learn user interface and user experience design using Figma.",
    rating: "4.6",
    students: "142,312",
    price: "$19.99",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    category: "Data Science",
    title: "Data Science & Machine Learning Bootcamp with Python",
    desc: "Build machine learning models and analyze data using Python.",
    rating: "4.7",
    students: "198,555",
    price: "$34.99",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    category: "Marketing",
    title: "Digital Marketing Masterclass: 23 Courses in 1",
    desc: "Learn SEO, email marketing, social media & more.",
    rating: "4.5",
    students: "312,788",
    price: "$14.99",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    category: "Mobile Development",
    title: "iOS & Android App Development with Flutter",
    desc: "Build beautiful cross-platform apps with Dart and Flutter.",
    rating: "4.6",
    students: "120,913",
    price: "$24.99",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/8296971/pexels-photo-8296971.jpeg",
    category: "IT & Software",
    title: "AWS Certified Solutions Architect - Associate",
    desc: "Get AWS certified and learn real cloud architecture skills.",
    rating: "4.7",
    students: "410,376",
    price: "$39.99",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg",
    category: "Personal Development",
    title: "Productivity & Time Management for Professionals",
    desc: "Boost your daily productivity using proven strategies.",
    rating: "4.4",
    students: "98,447",
    price: "$13.99",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg",
    category: "Finance & Accounting",
    title: "Accounting & Financial Statement Analysis",
    desc: "Understand balance sheets, income statements & cash flow.",
    rating: "4.5",
    students: "83,902",
    price: "$19.99",
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    category: "Business",
    title: "Business Strategy: Achieving Competitive Advantage",
    desc: "Learn frameworks for business growth and market analysis.",
    rating: "4.6",
    students: "105,332",
    price: "$21.99",
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
    category: "Development",
    title: "Java Programming Masterclass",
    desc: "Learn Java from beginner to advanced with hands-on projects.",
    rating: "4.7",
    students: "298,345",
    price: "$27.99",
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/5380645/pexels-photo-5380645.jpeg",
    category: "Cybersecurity",
    title: "The Complete Cybersecurity Guide for Beginners",
    desc: "Learn ethical hacking, network security, and more.",
    rating: "4.6",
    students: "112,543",
    price: "$17.99",
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/8438912/pexels-photo-8438912.jpeg",
    category: "Artificial Intelligence",
    title: "AI for Everyone: Concepts & Applications",
    desc: "Understand AI fundamentals and how it impacts industries.",
    rating: "4.5",
    students: "76,321",
    price: "$22.99",
  },
  {
    id: 13,
    image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg",
    category: "Photography",
    title: "Complete Photography Masterclass",
    desc: "Master DSLR, lighting, editing, and composition.",
    rating: "4.4",
    students: "89,473",
    price: "$15.99",
  },
  {
    id: 14,
    image: "https://images.pexels.com/photos/414422/pexels-photo-414422.jpeg",
    category: "Language Learning",
    title: "English for Beginners: Learn English in 30 Days",
    desc: "Improve your speaking, grammar, and vocabulary skills.",
    rating: "4.3",
    students: "67,294",
    price: "$9.99",
  },
  {
    id: 15,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "Health & Fitness",
    title: "Nutrition & Diet Masterclass",
    desc: "Understand healthy eating habits and meal planning.",
    rating: "4.6",
    students: "54,118",
    price: "$11.99",
  },
  {
    id: 16,
    image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg",
    category: "Photography",
    title: "Complete Photography Masterclass",
    desc: "Master DSLR, lighting, editing, and composition.",
    rating: "4.4",
    students: "89,473",
    price: "$15.99",
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
    coursesCount: "4 Courses",
    icon: <IoStatsChartSharp />,
    bgColor: "#EAEBF5",
  },
  {
    id: 2,
    category: "Development",
    link: "/development",
    coursesCount: "8 Courses",
    icon: <LuCodeXml />,
    bgColor: "#FFF4E5",
  },
  {
    id: 3,
    category: "Design",
    link: "/design",
    coursesCount: "12 Courses",
    icon: <PiPenNib />,
    bgColor: "#F0F5FF",
  },
  {
    id: 4,
    category: "Marketing",
    link: "/marketing",
    coursesCount: "5 Courses",
    icon: <FaChartLine />,
    bgColor: "#E6FFF7",
  },
  {
    id: 5,
    category: "Networking",
    link: "/Netwoking",
    coursesCount: "6 Courses",
    icon: <TbNetwork  />,
    bgColor: "#FFEAEA",
  },
  {
    id: 6,
    category: "Artficial Intelligence",
    link: "/artficial-intelligence",
    coursesCount: "6 Courses",
    icon: <RiRobot2Line />,
    bgColor: "#F6F6F6",
  },
];

export const featuredCourses: FeaturedCourses[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    link: "/course-details",
    instructor: "Jonas Schmedtmann",
    level: "Beginner",
    hours: "68 hours",
    category: "JavaScript",
    rating: "4.8",
    students: "684.1K",
    price: "$14.99",
    oldPrice: "$84.99",
    ratingCount: "195,000",
    instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    title: "UI/UX Design with Figma: Complete Masterclass",
    link: "/course-details",
    instructor: "Daniel Walter Scott",
    level: "All Levels",
    hours: "11 hours",
    category: "Design",
    rating: "4.7",
    students: "162.3K",
    price: "$12.99",
    oldPrice: "$59.99",
    ratingCount: "40,211",
    instructorImage: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    title: "Python for Data Science and Machine Learning Bootcamp",
    link: "/course-details",
    instructor: "Jose Portilla",
    level: "Intermediate",
    hours: "25 hours",
    category: "Data Science",
    rating: "4.8",
    students: "514.6K",
    price: "$15.99",
    oldPrice: "$99.99",
    ratingCount: "124,379",
    instructorImage: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    title: "The Ultimate Digital Marketing Guide: 23 Courses in 1",
    link: "/course-details",
    instructor: "Phil Ebiner",
    level: "All Levels",
    hours: "32 hours",
    category: "Marketing",
    rating: "4.6",
    students: "612.8K",
    price: "$13.99",
    oldPrice: "$79.99",
    ratingCount: "108,000",
    instructorImage: "https://randomuser.me/api/portraits/women/68.jpg",
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
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    category: "Full-Stack Web Developer",
    title: "Brad Traversy",
    rating: "4.9",
    students: "312,000",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    category: "UI/UX Designer",
    title: "Angela Yu",
    rating: "4.8",
    students: "420,500",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    category: "Data Scientist",
    title: "Jose Portilla",
    rating: "4.9",
    students: "278,900",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    category: "Digital Marketing Expert",
    title: "Phil Ebiner",
    rating: "4.7",
    students: "354,600",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    category: "AI & Machine Learning Engineer",
    title: "Andrew Ng",
    rating: "4.9",
    students: "610,200",
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
    question: "How do I enroll in a course?",
    answer:
      "To enroll, simply visit the course page and click the 'Enroll Now' button. If the course is paid, you'll be directed to complete the payment first.",
    category: "Enrollment",
  },
  {
    id: 2,
    question: "Are there any free courses available?",
    answer:
      "Yes! We offer a variety of free courses. You can find them by filtering 'Free' under the price options on the Courses page.",
    category: "Pricing",
  },
  {
    id: 3,
    question: "Can I get a certificate after completing a course?",
    answer:
      "Absolutely. Once you complete all lessons and assessments in a course, a certificate of completion will be available for download.",
    category: "Certification",
  },
  {
    id: 4,
    question: "How does the job placement feature work?",
    answer:
      "After completing eligible courses and passing mock interviews, you'll be matched with companies looking for talent in your skill area.",
    category: "Career Support",
  },
  {
    id: 5,
    question: "Can I access courses on mobile?",
    answer:
      "Yes, our platform is fully responsive and accessible on mobile browsers. We're also working on launching a dedicated mobile app soon.",
    category: "Platform Access",
  },
  {
    id: 6,
    question: "What if I have questions during a course?",
    answer:
      "You can ask questions in the course's community tab or contact the instructor directly through the Q&A section.",
    category: "Support",
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
      "Frontend Development Exam",
    desc: "description of the course",
    students: "236",
    duration: "15 minutes",
  },
  {
    id: 2,
    image: examImg_2,
    category: "Web Design",
    title:
      "UIUX Design Exam",
    desc: "description of the course",
    students: "211",
    duration: "20 minutes",

  },
  {
    id: 3,
    image: examImg_1,
    category: "Web Development",
    title:
      "Backend Development Exam",
    desc: "description of the course",
    students: "197",
    duration: "30 minutes",

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


// Questions of exam 
// constants.ts
export const examData: Exam[] = [
  {
    id: 1,
    title: "Web Development Exam",
    duration: 15,
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Home Tool Markup Language",
          "HyperText Markup Language",
          "Hyperlink and Text Markup Language"
        ],
        correctAnswer: "HyperText Markup Language"
      },
      {
        id: 2,
        question: "Which tag is used to define an unordered list in HTML?",
        options: ["<ol>", "<ul>", "<li>"],
        correctAnswer: "<ul>"
      },
      {
        id: 3,
        question: "What is the correct syntax for referring to an external CSS file?",
        options: [
          "<css src='style.css'>",
          "<style src='style.css'>",
          "<link rel='stylesheet' href='style.css'>"
        ],
        correctAnswer: "<link rel='stylesheet' href='style.css'>"
      },
      {
        id: 4,
        question: "Which HTML attribute is used to define inline styles?",
        options: ["css", "style", "class"],
        correctAnswer: "style"
      },
      {
        id: 5,
        question: "Which language is used for styling web pages?",
        options: ["JavaScript", "HTML", "CSS"],
        correctAnswer: "CSS"
      },
      {
        id: 6,
        question: "Inside which HTML element do we put JavaScript code?",
        options: ["<script>", "<javascript>", "<js>"],
        correctAnswer: "<script>"
      },
      {
        id: 7,
        question: "Which property is used in CSS to change text color?",
        options: ["font-color","color" , "text-color"],
        correctAnswer: "color"
      },
      {
        id: 8,
        question: "What is the correct syntax for a function in JavaScript?",
        options: ["func myFunction()", "function myFunction() {}", "function:myFunction()"],
        correctAnswer: "function myFunction() {}"
      },
      {
        id: 9,
        question: "Which symbol is used for comments in JavaScript?",
        options: ["/* */", "<!-- -->", "//"],
        correctAnswer: "//"
      },
      {
        id: 10,
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Digital Object Manager", "Data Object Model"],
        correctAnswer: "Document Object Model"
      },
      {
        id: 11,
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<href>", "<link>"],
        correctAnswer: "<a>"
      },
      {
        id: 12,
        question: "How do you apply a background color in CSS?",
        options: ["bg-color", "color-background","background-color" ],
        correctAnswer: "background-color"
      },
      {
        id: 13,
        question: "Which CSS property controls the text size?",
        options: ["font-size", "size", "text-size"],
        correctAnswer: "font-size"
      },
      {
        id: 14,
        question: "Which method adds an element at the end of an array in JavaScript?",
        options: ["push()", "append()", "add()"],
        correctAnswer: "push()"
      },
      {
        id: 15,
        question: "Which HTML tag is used to display a table?",
        options: ["<tab>", "<table>", "<tr>"],
        correctAnswer: "<table>"
      },
      {
        id: 16,
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
      },
      {
        id: 17,
        question: "How do you write a single-line comment in JavaScript?",
        options: ["<!-- comment -->", "// comment", "# comment"],
        correctAnswer: "// comment"
      },
      {
        id: 18,
        question: "Which JavaScript keyword declares a block-scoped variable?",
        options: ["var", "const", "let"],
        correctAnswer: "let"
      },
      {
        id: 19,
        question: "Which pseudo-class targets the first child in CSS?",
        options: [":first-element", ":first", ":first-child"],
        correctAnswer: ":first-child"
      },
      {
        id: 20,
        question: "Which method is used to select an element by ID in JavaScript?",
        options: [
          "document.getElementsByClassName()",
          "document.getElementById()",
          "document.querySelectorAll()"
        ],
        correctAnswer: "document.getElementById()"
      }
    ]
  }
];




// export const questionBank = {
//   "web-dev": [
//     {
//       id: 1,
//       question: "What does HTML stand for?",
//       options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup"],
//       answer: "HyperText Markup Language"
//     },
//     {
//       id: 2,
//       question: "Which language runs in a web browser?",
//       options: ["Java", "C", "Python", "JavaScript"],
//       answer: "JavaScript"
//     }
//   ],
//   "ui-ux": [
//     {
//       id: 1,
//       question: "What is the primary goal of UX design?",
//       options: ["Make things pretty", "Improve usability", "Write backend logic"],
//       answer: "Improve usability"
//     }
//   ],
//   "data-science": [
//     {
//       id: 1,
//       question: "What is a common Python library used for data analysis?",
//       options: ["NumPy", "Laravel", "React"],
//       answer: "NumPy"
//     }
//   ],
//   "mobile-dev": [
//     {
//       id: 1,
//       question: "Which framework is used for cross-platform mobile development?",
//       options: ["React Native", "Flask", "Angular"],
//       answer: "React Native"
//     }
//   ]
// };
