import Logo from "@/public/logo.svg"
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="py-10 bg-grid-black/[0.05] bg-slate-950 text-white">
      <div className="max-w-[1500px]  mx-auto w-[90%] text-center flex items-center justify-center gap-2">
        <p>
          Copyright © 2024 - All right reserved by <span className="text-primary">Medaavyas </span>
        </p>
        <Image src = {Logo} alt = "logo" width = {25} height = {25}/>
      </div>
    </footer>
  );
};

export default Footer;
