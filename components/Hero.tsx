import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    
    <section className="min-h-[500px] flex items-center justify-center text-center h-screen w-screen bg-slate-950 text-white">
      <div className="px-4 md:px-6 max-w-[1500px] mx-auto w-[90%]">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-dark">
            Ready to take this week's quiz?
          </h1>
          <p>
            Get ready to ace it.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href={"/quiz"}
            
          >
            <Button>Start Quiz</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
