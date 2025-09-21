import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo_sep} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto ">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          abbalingit14@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Alvin Balingit. All Rights Reserved</p>
        <ul className="flex items-center gap-10 jusstify-center mt-4 sm:mt-0">
          <li className="gap-6 grid grid-cols-3 sm:flex-row text-sm">
            <a target="_blank" href="https://github.com/AlvinBalingit">
              GitHub
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alvinbalingit/"
            >
              LinkeIn
            </a>
            <a target="_blank" href="https://www.instagram.com/kaizer.xiv/">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
