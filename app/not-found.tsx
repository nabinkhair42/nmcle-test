import React from "react";
import { Button } from "@/components/ui/button";
import { HelpingHand, HomeIcon } from "lucide-react";
import Link from "next/link";

const notfound = () => {
  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-medium tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
          <Button>
            <HomeIcon className="mr-1" />
            Go back home
          </Button>
          </Link>
          {/* <Button variant="secondary">
            <HelpingHand className="mr-1" />
            Contact support
          </Button> */}
        </div>
      </div>
    </main>
  );
};

export default notfound;
