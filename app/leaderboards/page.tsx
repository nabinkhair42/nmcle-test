import React from "react";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { FaCrown } from "react-icons/fa";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { space } from "postcss/lib/list";

const page = async () => {
  const users = await prisma.user.findMany({
    include: { quizResults: true },
  });

  users.sort(
    (a, b) =>
      b.quizResults.reduce((acc, curr) => acc + curr.quizScore, 0) -
      a.quizResults.reduce((acc, curr) => acc + curr.quizScore, 0)
  );
  return (
    <main className="flex w-screen h-screen justify-center items-center">
      <Table className="shadow-xl rounded-md w-fit mx-auto">
        <TableCaption>Total Users: {users.length}</TableCaption>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead>Rank</TableHead>
            <TableHead>Profile</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Marks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="flex flex-col">
                {index === 0 && (
                  <FaCrown className="inline-block w-5 h-5 -rotate-12 text-yellow-500" />
                )}
                <Image
                  src={user.profilePic}
                  width={30}
                  height={30}
                  alt={`Image of ${user.username}`}
                  className="rounded-full border border-primary drop-shadow-md"
                />
              </TableCell>
              <TableCell>
                <div className="flex flex-row items-center text-nowrap gap-1">
                  {(index === 0 && (
                    <span className="font-bold">{user.username}</span>
                  )) || <span>{user.username}</span>}
                </div>
              </TableCell>
              <TableCell>
                {user.quizResults.reduce(
                  (acc, curr) => acc + curr.quizScore,
                  0
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default page;
