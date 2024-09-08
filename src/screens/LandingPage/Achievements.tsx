import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase_config";
import { AchievementsUploadModel } from "../../models/CourseModel";

const Achievements = () => {
  const [achievements, setAchievements] = useState<AchievementsUploadModel[]>([]);
  const [positionIndexes, setPositionIndexes] = useState<number[]>([0, 1, 2, 3, 4]);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    const querySnapshot = await getDocs(collection(db, "achievementsUpload"));
    const courses: AchievementsUploadModel[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as AchievementsUploadModel[];

    setAchievements(courses);

    // Initialize positionIndexes based on the number of achievements, limiting to 5 if more
    setPositionIndexes(Array.from({ length: Math.min(courses.length, 5) }, (_, index) => index));
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants: Record<string, { x: string; scale: number; zIndex: number; opacity: number }> = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-40%", scale: 0.8, zIndex: 4, opacity: 1 },
    left: { x: "-80%", scale: 0.6, zIndex: 3, opacity: 1 },
    right: { x: "80%", scale: 0.6, zIndex: 3, opacity: 1 },
    right1: { x: "40%", scale: 0.8, zIndex: 4, opacity: 1 },
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const [first, ...rest] = prevIndexes;
      return [...rest, first];  // Shift the first item to the end
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const last = prevIndexes[prevIndexes.length - 1];
      return [last, ...prevIndexes.slice(0, -1)];  // Shift the last item to the start
    });
  };

  return (
    <>
      <h1 className="font-poppins text-4xl font-bold bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent w-full text-center text-wrap p-4">Our Achievements</h1>

      <div className="relative h-[600px] justify-center items-center flex">
        <div className="absolute top-0 right-0 bg-[#FB7FB0] w-1/2 h-1/2 max-sm:hidden"></div>
        <div className="absolute bottom-0 left-0 bg-[#5FDEF1] w-1/2 h-1/2 max-sm:hidden"></div>

        <div className="z-10 flex items-center flex-col justify-center max-sm:p-5 ">
          {achievements.slice(0, 5).map((item, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center rounded-[12px] p-4 max-sm:p-2 bg-white w-2/5 max-sm:w-10/12"
              initial="center"
              animate={positions[positionIndexes[index] % positions.length]} // Use mod to loop through positions
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.image}
                alt={`achievement-${index}`}
                className="rounded-t-[12px] object-contain max-h-[350px] max-sm:max-h-[325px]"
              />
              <p className="mt-4 text-center">{item.description}</p>
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
    </>
  );
};

export default Achievements;
