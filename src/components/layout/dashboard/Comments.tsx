import { CustomSelect } from "@/components/common/CustomSelect";
import image from "@/assets/home-images/instructor.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const couresComments = [
  {
    id: 1,
    image: image,
    name: "John Doe",
    comment:
      "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    rating: 5,
  },
  {
    id: 2,
    image: image,
    name: "Jane Smith",
    comment:
      "This course is just amazing! has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgable and I was never getting bored throughout the course. This course meets more than my expectation and, I made the best investment of time to learn and practice what I am passionate about. Thank you so much to our excellent instructor Vako!! Highly recommend this course! Take the next step.",
    rating: 4,
  },
  {
    id: 3,
    image: image,
    name: "Alice Johnson",
    comment: "I learned a lot.",
    rating: 5,
  },
  {
    id: 4,
    image: image,
    name: "Bob Brown",
    comment: "Great teacher.",
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
              src={comment.image.src}
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
        <Button className="py-3 px-5 bg-[#EAEBF5] text-primary">Load More</Button>
      </div>
    </div>
  );
};

export default Comments;
