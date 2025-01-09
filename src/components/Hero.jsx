import React from "react";
import Button from "./Button";
import Me from "../assets/me.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex h-[450px]">
      <div className="flex flex-col justify-center w-1/2 px-8 gap-8 border-l border-white border-b border-r">
        <motion.h1
          className="text-white text-5xl font-fontPrimary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi I am John Doe
        </motion.h1>
        <motion.p
          className="text-white font-fontSecondary text-base leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A passionate and detail-oriented Fullstack Web Developer based in
          Bangladesh. With a strong commitment to crafting innovative, scalable,
          and high-performance web applications, I specialize in leveraging
          cutting-edge technologies to build seamless and dynamic digital
          experiences. My goal is to deliver impactful solutions tailored to
          meet user needs and drive business success.
        </motion.p>
        <Button content="View Projects" href="/" />
      </div>
      <div className="w-1/2 border-white border-r border-b">
        <motion.img
          src={Me}
          className="w-full h-full"
          alt="a cartoon picture"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
