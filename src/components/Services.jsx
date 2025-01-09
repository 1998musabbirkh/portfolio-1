import React from "react";
import ReactIcon from "../assets/icons/atom.png";
import Shop from "../assets/icons/online-shop.png";
import WordpressIcon from "../assets/icons/wordpress-logo.png";
import Button from "./Button";
import { motion } from "framer-motion";

const Services = () => {
  const serviceItem = [
    {
      heading: "Full Stack Web Development",
      content:
        "Building modern, dynamic web applications using the MERN stack: MongoDB, Express.js, React.js, and Node.js. A robust, seamless JavaScript-based solution designed for scalable, interactive, and high-performance user experiences.",
      src: ReactIcon,
      alt: "React Icon",
    },
    {
      heading: "Ecommerce Development",
      content:
        "Creating tailored, powerful eCommerce platforms built to fulfill your business goals. From seamless interfaces to safe payments and effortless checkout, we provide comprehensive eCommerce services for modern online shops.",
      src: Shop,
      alt: "Ecommerce icon",
    },
    {
      heading: "Wordpress Development",
      content:
        "Crafting customized, responsive, and user-friendly websites with WordPress. Whether it's a business site, blog, or eCommerce store, we specialize in delivering scalable solutions with seamless functionality and attractive designs.",
      src: WordpressIcon,
      alt: "Wordpress Icon",
    },
  ];

  return (
    <div className="mt-9">
      <h2 className="text-center text-white text-3xl font-ubuntu">
        Services I provide
      </h2>
      <div className="flex mt-4 gap-4">
        {serviceItem.map((service, index) => (
          <motion.div
            className="w-1/3 border border-white p-4 grid gap-4 cursor-pointer hover:shadow-[8px_-8px_0px_0px_black] transition-shadow duration-300"
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="grid grid-cols-[auto_1fr] items-center gap-8">
              <img
                className="w-12 h-12 filter invert"
                src={service.src}
                alt={service.alt}
              />
              <h3 className="text-xl font-ubuntu text-white">
                {service.heading}
              </h3>
            </div>
            <p className="text-white font-lato">{service.content}</p>
            <Button content="Learn More" href="/" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
