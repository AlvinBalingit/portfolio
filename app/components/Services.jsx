import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
        className="text-center mb-2 text-lg ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
        className="text-center text-5xl ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
        className="ovo text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, type: "tween", ease: "easeInOut" }}
        className="grid  gap-6 my-10 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 "
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:[box-shadow:4px_4px_0_#000] hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[#fcf4ff]"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image src={assets.right_arrow} className="w-4" alt="" />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
