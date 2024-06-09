"use client";
import { Button } from "@/components/ui/button";
import * as React from "react";
import Link from "next/link";
import { MdDashboardCustomize } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu = () => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="bg-slate-950 text-white">
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-slate-950 text-white">
            <MdDashboardCustomize />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">
              <Link href="./stats">Statistics</Link>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">
              <Link href="./leaderboards">Leaderboards</Link>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
