import React from "react";

const Button = ({ content, href }) => {
  return (
    <a
      className="text-white font-fontSecondary border button w-[max-content] border-white hover:text-colorText font-medium hover:bg-white transition-all duration-300 py-2 px-6 hover:shadow-[4px_-4px_0px_0px_black]"
      href={href}
    >
      {content}
    </a>
  );
};

export default Button;
