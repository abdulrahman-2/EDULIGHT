export type Links = {
  name: string;
  link: string;
  icon: React.ReactElement | undefined;
};

export type DashInfo = {
  id: number;
  title: string;
  value: string;
  percentage?: string;
  icon: React.ReactElement;
  bgColor?: string;
  color?: string;
};

export type CourseCardContent = {
  id: number;
  image: string | any;
  category: string;
  title: string;
  desc: string;
  rating?: string;
  students: string;
  price?: string;
  duration?: string;
  quantity?: number;
  question?: string;
  correctAnswer?: string;
  incorrectAnswers?: string[];
  instructors?: string[];
  originalPrice?: string;
  lessons?: {
    id: number;
    title: string;
    video: string;
    time: string;
  }[];
};


export type TableData = {
  id: number;
  status: string;
  method: string;
  amount: string;
  date: string;
};

// website types ----------
export type HomeCategories = {
  id: number;
  coursesCount: string;
  category: string;
  icon: React.ReactElement;
  link: string;
  bgColor: string;
};
export type FeaturedCourses = {
  id: number;
  image: string | any;
  category: string;
  title: string;
  rating: string;
  students: string;
  price: string;
  link: string;
  level: string;
  instructor: string;
  hours: string;
  oldPrice: string;
  ratingCount: string;
  instructorImage: string | any;
};
export type TechAndEarn = {
  id: number;
  bgColor: string;
  textColor: string;
  title: string;
};

export type CompaniesLogos = {
  id: number;
  image: string | any;
};
export type SocialLinks = {
  id: number;
  link: string;
  icon: React.ReactElement;
  bgColor: string;
  name: string;
};
export type FooterLinks = {
  id: number;
  groupTitle: string;
  links: { id: number; title: string; link: string }[];
};

export type AboutWords = {
  id: number;
  job:string;
  company:string;
  name: string;
  desc: string;

}
export type Faqs = {
  id:number,
  question:string,
  answer:string,
  category:string

}

export type StudentCard = {
  id: number;
  image: string | any;
  courseName: string;
  title: string;
 btnText:"Watch Lecture",
 status?:string
}

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer?: string; 
};

export type Exam = {
  id: number;
  title: string;
  duration: number; 
  questions: Question[];
};

export type Instructor = {
  id: number; 
  image: string | any;
  category: string,
  title:  string,
  rating: string,
  students : string,
}