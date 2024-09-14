import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover == "true" && "#7443ff", padding:"20px"}}
      className={`bg-zinc-800 p-3 rounded-xl ${width} min-h-[60vh] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Up Next: News</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-2xl font-[500] mt-5">
          Insights and behind the scenes
        </h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-[500] tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px]">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
