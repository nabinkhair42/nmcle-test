import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, quizScore, correctAnswers, wrongAnswers } = body;

    // Validate if userId is provided
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    let existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { quizResults: true },
    });

    if (existingUser && existingUser.quizResults && existingUser.quizResults.length > 0) {
      const updatedUserStats = await prisma.quizResult.update({
        where: { id: existingUser.quizResults[0].id },
        data: {
          quizScore: existingUser.quizResults[0].quizScore + quizScore,
          correctAnswers: existingUser.quizResults[0].correctAnswers + correctAnswers,
          wrongAnswers: existingUser.quizResults[0].wrongAnswers + wrongAnswers,
        },
      });
      return NextResponse.json({ updatedUserStats }, { status: 200 });
    } else {
      const newUser = await prisma.user.update({
        where: { id: userId },
        data: {
          quizResults: {
            create: {
              quizScore,
              correctAnswers,
              wrongAnswers,
            },
          },
        },
      });
      return NextResponse.json({ newUser }, { status: 201 });
    }
  } catch (error) {
    console.error("Error saving quiz results:", error);
    return NextResponse.json({ error: "Failed to save quiz results" }, { status: 500 });
  }
}
