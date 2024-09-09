import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase_config";
import { AchievementsUploadModel } from "../../models/CourseModel";

const Achievements = () => {
  const [achievements, setAchievements] = useState<AchievementsUploadModel[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0); // Control the start of the visible range
  const [direction, setDirection] = useState<"next" | "prev">("next"); // Track movement direction

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    const querySnapshot = await getDocs(collection(db, "achievementsUpload"));
    const fetchedAchievements: AchievementsUploadModel[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as AchievementsUploadModel[];

    setAchievements(fetchedAchievements);
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  // Use direction to dynamically adjust x movement for forward and backward animations
  const imageVariants = (direction: "next" | "prev") => ({
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: direction === "next" ? "-40%" : "40%", scale: 0.8, zIndex: 4, opacity: 1 },
    left: { x: direction === "next" ? "-80%" : "80%", scale: 0.6, zIndex: 3, opacity: 1 },
    right: { x: direction === "next" ? "80%" : "-80%", scale: 0.6, zIndex: 3, opacity: 1 },
    right1: { x: direction === "next" ? "40%" : "-40%", scale: 0.8, zIndex: 4, opacity: 1 },
  });

  const handleNext = () => {
    setDirection("prev"); // Set direction to "next"
    setStartIndex((prevStartIndex) => (prevStartIndex + 1) % achievements.length); // Move to the next set
  };

  const handleBack = () => {
    setDirection("prev"); // Set direction to "prev"
    setStartIndex((prevStartIndex) =>
      (prevStartIndex - 1 + achievements.length) % achievements.length
    ); // Move to the previous set
  };

  // Handle displaying exactly 5 achievements at a time, wrapping if necessary
  const visibleAchievements = Array.from({ length: 5 }, (_, index) => 
    achievements[(startIndex + index) % achievements.length]
  );

  return (
    <>
      <h1 className="font-poppins text-4xl font-bold bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent w-full text-center text-wrap p-4">
        Our Achievements
      </h1>

      <div className="relative h-[600px] justify-center items-center flex">
        <div className="absolute top-0 right-0 bg-[#FB7FB0] w-1/2 h-1/2 max-sm:hidden"></div>
        <div className="absolute bottom-0 left-0 bg-[#5FDEF1] w-1/2 h-1/2 max-sm:hidden"></div>

        <div className="z-10 flex items-center flex-col justify-center max-sm:p-5 ">
          {achievements.length === 0 ? (
            <p className="text-center">No achievements available at the moment.</p>
          ) : (
            visibleAchievements.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute flex flex-col items-center rounded-[12px] p-4 max-sm:p-2 bg-white w-2/5 max-sm:w-10/12"
                initial="center"
                animate={positions[index]} // Use the position based on the index of the displayed items
                variants={imageVariants(direction)} // Pass direction to variants
                transition={{ duration: 0.5 }}
              >
                <img
                  src={item.image}
                  alt={`achievement-${index}`}
                  className="rounded-t-[12px] object-contain max-h-[350px] max-sm:max-h-[325px]"
                />
                <p className="mt-4 text-center">{item.description}</p>
              </motion.div>
            ))
          )}
        </div>

        {achievements.length > 1 && (
          <div className="absolute bottom-[-50px] z-10 flex flex-row gap-6 mt-16">
            <button
              className="mt-[400px] hover:bg-slate-400 rounded-full py-2 px-2"
              onClick={handleBack}
            >
              <MdOutlineArrowBackIos size={20} />
            </button>
            <button
              className="mt-[400px] hover:bg-slate-400 rounded-full py-2 px-2"
              onClick={handleNext}
            >
              <MdArrowForwardIos size={20} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Achievements;
