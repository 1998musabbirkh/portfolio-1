import React from "react";
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
    <header className="flex justify-between items-center py-4 border-b border-b-white">
      <h3 className="font-ubuntu text-3xl uppercase text-white">
        <a href="/">MK</a>
      </h3>
      <nav>
        <ul className="flex gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                className="text-white font-lato hover:text-colorPrimary transition-colors duration-300"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button content="Hire Me!" href="/" />
    </header>
  );
};

export default Navbar;
