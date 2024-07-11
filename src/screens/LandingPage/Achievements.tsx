import { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Achievements = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };


  const positions = ["center", "left1", "left", "right", "right1"];
  const items = [
    {
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Achievement 1"
    },
    {
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Achievement 2"
    },
    {
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Achievement 3"
    },
    {
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Achievement 4"
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Achievement 5"
    },
  ];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="relative h-[600px] justify-center items-center flex">
      <div className="absolute top-0 right-0 bg-[#FB7FB0] w-1/2 h-1/2">

      </div>
      <div className="absolute bottom-0 left-0 bg-[#5FDEF1] w-1/2 h-1/2">

      </div>

      <div className="z-10 flex items-center flex-col justify-center">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center rounded-[12px] p-4 bg-white w-2/5 max-sm:w-full"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            // style={{ width: "40%",height:"500px" }}
            
          >
            <img
              src={item.image}
              alt={`achievement-${index}`}
              className="rounded-t-[12px] w-full h-[400px]"
            />
            <p className="mt-4 text-center">{item.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-[-50px] z-10 flex flex-row gap-6 mt-16">
          <button
            className=" mt-[400px] hover:bg-slate-400 rounded-full py-2 px-2"
            onClick={handleBack}
          >
            <MdOutlineArrowBackIos size={20} />
          </button>
          <button
            className=" mt-[400px] hover:bg-slate-400 rounded-full py-2 px-2"
            onClick={handleNext} 
          >
            <MdArrowForwardIos size={20} />
          </button>
        </div>
    </div>
  );
};

export default Achievements;

