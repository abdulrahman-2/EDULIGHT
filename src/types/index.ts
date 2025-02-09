export type Links = {
  id: number;
  label: string;
  url: string;
  icon: React.ReactElement;
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
  id:number;
  image: string|any;
  category: string;
  title: string;
  desc?: string;
  rating: string;
  students: string;
  price: string;
};


