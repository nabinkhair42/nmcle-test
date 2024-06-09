import React from "react";
import { prisma } from "@/lib/prisma";

interface QuizProps {
  questions: {
    question: string;
    answers: string[];
    correctAnswer: string;
  }[];
  userId: string | undefined;
}

const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number | undefined;
}) => {
  return (
    <main>
      <div className="p-5 shadow-md bg-white rounded-md ">
        <div className="ml-2 w-full text-center">
          <div className="mt-3 text-3xl font-bold leading-8 text-black">{value}</div>
          <div className="mt-1 text-base text-gray-600">{title}</div>
        </div>
      </div>
    </main>
  );
};

export default StatCard;
