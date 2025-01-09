import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/" },
    { name: "Projects", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <motion.header
      className="flex justify-between items-center py-4 border-b border-b-white"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h3 className="font-fontPrimary text-3xl uppercase text-white">
        <a href="/">MK</a>
      </h3>
      <nav>
        <ul className="flex gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                className="text-white font-fontSecondary hover:text-colorPrimary transition-colors duration-300"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button content="Hire Me!" href="/" />
    </motion.header>
  );
};

export default Navbar;
