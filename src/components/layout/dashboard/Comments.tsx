import { CustomSelect } from "@/components/common/CustomSelect";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import instructor_1 from "../../../assets/course-Images/placeHolder.png";
import instructor_2 from "../../../assets/course-Images/placeHolder.png";
import instructor_3 from "../../../assets/course-Images/placeHolder.png";
import instructor_4 from "../../../assets/course-Images/placeHolder.png";
import instructor_5 from "../../../assets/course-Images/placeHolder.png";

const couresComments = [
  {
    id: 1,
    image: instructor_1,
    name: "Daniel Harris",
    comment:
      "The bite-sized videos helped me stay consistent. I never felt overwhelmed, and the examples made everything easier to grasp. Highly recommend this course to anyone starting with frontend!",
    rating: 5,
  },
  {
    id: 2,
    image: instructor_2,
    name: "Emily Carter",
    comment:
      "Amazing structure and great teaching style! The instructor breaks down complex topics into simple, actionable lessons. This course boosted my confidence in web design.",
    rating: 4,
  },
  {
    id: 3,
    image: instructor_3,
    name: "Michael Thompson",
    comment:
      "I really liked the hands-on approach. Straight to the point, no fluff. Perfect for people who want to build real projects.",
    rating: 5,
  },
  {
    id: 4,
    image: instructor_4,
    name: "Sophia Green",
    comment:
      "Good content overall. I would’ve liked a few more advanced challenges, but still very helpful!",
    rating: 4,
  },
  {
    id: 4,
    image: instructor_5,
    name: "Olivia Brown",
    comment:
      "This course was a game-changer for me! The instructor's clear explanations and practical examples made learning frontend development enjoyable. I loved the interactive quizzes that reinforced my understanding.",
    rating: 4,
  },
];

const Comments = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-xl font-semibold">Students Feedback</h3>
        <div className="w-[180px]">
          <CustomSelect
            items={[
              "5 Star Rating",
              "4 Star Rating",
              "3 Star Rating",
              "2 Star Rating",
              "1 Star Rating",
            ]}
          />
        </div>
      </div>

      <div>
        {couresComments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start gap-4 my-5 p-4 rounded-lg shadow-sm"
          >
            <Image
              src={comment.image}
              alt={comment.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{comment.name}</h3>
              <div className="flex items-center gap-1">
                {Array.from({ length: comment.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - comment.rating }).map((_, index) => (
                  <span key={index} className="text-gray-300 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Button className="py-3 px-5 bg-[#EAEBF5] text-primary">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Comments;
