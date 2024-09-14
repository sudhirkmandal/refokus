import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arqitle",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 15);
  };

  return (
    <div className="mt-20 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} index={index} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window w-[20rem] absolute left-[44%] h-[15rem] bg-white overflow-hidden"
        >
          <motion.div 
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full overflow-hidden"
          >
            <img className="w-full h-full object-cover" src="https://assets.website-files.com/63b386e70e89095e936cc9c2/63b4c11592ba88a258f69f95_refokus_omr22_xeniabluhm-199-p-500.webp" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full overflow-hidden"
          >
            <img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63b6239b24e16e0a7ad5ed82_Rainfall-p-1080.webp" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full overflow-hidden "
          >
            <img className="w-full h-full object-cover" src="https://assets.website-files.com/63b386e70e89095e936cc9c2/63b4c115d4ef724949eeaa53_refokus-bustour-200-p-500.webp" alt="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full overflow-hidden"
          >
            <img className="w-full h-full object-cover" src="https://assets.website-files.com/63b386e70e89095e936cc9c2/63b4c11513a7d95ee5f1b9fb_refokus_omr22_xeniabluhm-27-p-500.webp" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
