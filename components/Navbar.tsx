"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image"
import UserMenu from "./UserMenu";
import { Badge } from "@/components/ui/badge";
import TextualLogo from "@/public/textual-logo.svg"

const Navbar = () => {
  return (
    <div className="pt-5 w-full sticky top-0 left-0 bg-slate-950 text-white">
      <div className="max-w-[1500px] mx-auto w-[90%] flex justify-between items-center border-b pb-5">
        <div>
          <Link href={"/"} className="flex gap-1 items-center text-2xl">
            <Image src={TextualLogo} alt="logo" width={140} height={30} />
          </Link>
        </div>

        <div className="md:block hidden text-nowrap">
          <Badge>NMCLE Entrance Exam Preperation</Badge>
        </div>

        <div className="flex items-center gap-3 justify-end">
          <UserMenu />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
