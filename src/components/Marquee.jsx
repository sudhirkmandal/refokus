import { motion } from "framer-motion";
import React from "react";

function Marquee({ image, direction }) {  
  return (
   <div className="flex w-full overflow-hidden">
     <motion.div initial={{x:direction === "left" ? "0" : "-100%"}} animate={{x:direction === "left" ? "-100%" : "0"}} transition={{ease:"linear", duration:10, repeat:Infinity}} className="flex w-full py-7 gap-20 flex-shrink-0 overflow-hidden">
      {image.map((url, index) => (
        <img key={index} src={url} className="h-[32px] flex-shrink-0" />
      ))}
      {image.map((url, index) => (
        <img key={index} src={url} className="h-[32px] flex-shrink-0" />
      ))}
    </motion.div>
    <motion.div initial={{x:direction === "left" ? "0" : "-100%"}} animate={{x:direction === "left" ? "-100%" : "0"}} transition={{ease:"linear", duration:10, repeat:Infinity}} className="flex w-full py-7 gap-20 flex-shrink-0 overflow-hidden">
      {image.map((url, index) => (
        <img key={index} src={url} className="h-[32px] flex-shrink-0" />
      ))}
      {image.map((url, index) => (
        <img key={index} src={url} className="h-[32px] flex-shrink-0" />
      ))}
    </motion.div>
   
   </div>
  );
}

export default Marquee;
