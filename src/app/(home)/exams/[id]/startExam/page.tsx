"use client";

import { useParams, useRouter } from "next/navigation";
import { examData } from "@/constants";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import cong from "@/assets/home-images/cong.png";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const exam = examData.find((exam) => exam.id === Number(id));

  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  // Redirect if exam is not found
  useEffect(() => {
    if (!exam) {
      router.replace("/not-found");
    } else {
      setTimeLeft(exam.duration * 60); // initialize timer
    }
  }, [exam, router]);

  const currentQuestion = exam?.questions[currentQuestionIndex];

  const handleSelect = (qid: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: answer }));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const handleSubmit = useCallback(() => {
    if (!exam) return;

    const total = exam.questions.length;
    let correct = 0;

    exam.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });

    setScore(correct);
    setShowResult(true);
    toast.success(`You scored ${correct} out of ${total}`);
  }, [answers, exam]);

  const handleBackToExams = () => {
    router.push("/exams");
  };

  // Timer countdown effect
  useEffect(() => {
    if (showResult || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          handleSubmit();
          toast.error("Time's up! Exam submitted automatically.");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showResult, handleSubmit]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  if (!exam) {
    return (
      <div className="pt-28 text-center text-xl font-semibold">
        Redirecting...
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="py-20 max-w-4xl mx-auto text-center">
        {score > 15 && (
          <>
            <Image
              src={cong}
              alt={"Congratulation"}
              width={200}
              height={200}
              className="mx-auto mb-8 object-cover"
            />
            <h2 className="text-4xl font-bold mb-4">Congratulation!</h2>
          </>
        )}

        <div className="text-2xl font-semibold text-green-600 mb-8">
          Your Score: {score} / {exam.questions.length}
        </div>
        <button
          onClick={handleBackToExams}
          className="bg-primary duration-300 hover:bg-primary/90 text-white px-6 py-3 rounded"
        >
          Back to Exams
        </button>
      </div>
    );
  }

  return (
    <div className="py-16 max-w-5xl mx-auto">
      <div className="mb-6 text-right text-xl font-bold text-red-600">
        Time Left: {formatTime(timeLeft)}
      </div>

      {currentQuestion ? (
        <div key={currentQuestion.id} className="mb-6">
          <p className="font-bold text-[42px] mb-6">{currentQuestion.question}</p>

          {currentQuestion.options.map((opt, i) => (
            <label
              key={i}
              className="block cursor-pointer relative mb-6 select-none"
            >
              <input
                type="radio"
                name={`q-${currentQuestion.id}`}
                value={opt}
                checked={answers[currentQuestion.id] === opt}
                onChange={() => handleSelect(currentQuestion.id, opt)}
                className="absolute opacity-0 w-0 h-0"
              />
              <div
                className={`flex items-center justify-between w-2/3 p-6 rounded-lg shadow-lg border border-b-4 border-r-4 duration-300 ${
                  answers[currentQuestion.id] === opt
                    ? "bg-primary/20 border-primary"
                    : "hover:bg-gray-100 border-[#D4D1E7]"
                }`}
              >
                <span className="text-gray-800 text-[16px]">{opt}</span>
                <span
                  className={`p-1.5 px-3 border text-[14px] rounded-lg ${
                    answers[currentQuestion.id] === opt
                      ? "bg-primary/20 border-primary text-primary"
                      : "border-[#D4D1E7] text-[#D4D1E7] hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </span>
              </div>
            </label>
          ))}

          <div className="w-2/3 font-semibold text-right">
            {Object.keys(answers).length} / {exam.questions.length}
          </div>
        </div>
      ) : (
        <div className="mb-6 text-center text-lg text-red-500">
          No question found.
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="bg-gray-300 text-black px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>

        {currentQuestionIndex === exam.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit Answers
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90 duration-300 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
