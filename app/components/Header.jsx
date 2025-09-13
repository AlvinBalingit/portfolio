import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 z-50">
      <div>
        <Image src={assets.profile_ab} alt="" className="rounded-full w-60" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 ovo">
        Hi! I'am Alvin Balingitsss
      </h3>
      <h1 className="ovo text-2xl sm:text-4xl lg:text-[40px]">
        Frontend Web Developer and a General Virtual Assistant based in
        Phillipines
      </h1>
      <p className="max-w-2xl mx-auto ovo">
        I am a frontend developer from Sta. Ana with 10 years of experience in
        multiple companies like Microsoft, Teslat and Apple.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white"
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </a>
        <a
          href="/assets/public/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt=""
            className="rounded-full w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
