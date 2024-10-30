import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { db } from '../../firebase_config';

interface text {
  smallQuote:string;
  quote:string;
  aboutUs:string;
  statsText:string;
  StudentsParticipatedInNationals:string;
  PassPercentage:string;
  YearsOfExperience:string;
}

interface AboutProps{
  data:text;
}

const About: React.FC<AboutProps> = ({data}) => {
  // Set up the IntersectionObserver hooks
  const [refStudents, inViewStudents] = useInView({ triggerOnce: true });
  const [refTutors, inViewTutors] = useInView({ triggerOnce: true });
  const [refIntlStudents, inViewIntlStudents] = useInView({ triggerOnce: true });
  const [refExperience, inViewExperience] = useInView({ triggerOnce: true });
  const [refPassPercentage, inViewPassPercentage] = useInView({ triggerOnce: true });
  const [refNationals, inViewNationals] = useInView({ triggerOnce: true });

  useEffect(() => {
    getInfo();
  },[]);

  const [info,setInfo] = useState({
      noOfStudents:0,
      payments:0,
      foreignStudents:0,
      tutors:0
  })

  const getInfo = async () => {

      const querySnapshot1 = await getDocs(collection(db, 'students'));

      const querySnapshot2 = await getDocs(collection(db, 'payments'));

      const querySnapshot3 = await getDocs(collection(db, 'employees'));


      const foreignStudentsCount = querySnapshot1.docs.filter(doc => doc.data().country !== 'India').length;

      setInfo({
          noOfStudents: querySnapshot1.size,
          payments: querySnapshot2.size,
          foreignStudents: foreignStudentsCount,
          tutors:querySnapshot3.size
      });
  };




  return (
    <div id="about">
      <section className="p-24 max-sm:p-5 w-full mt-4">
        <div className="relative mt-10 max-sm:mt-0">
          <div className="border-t border-gray-500 w-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>
          <h3 className="relative text-xl md:text-2xl font-bold bg-[#F7F8FB] px-4 mx-auto w-max mt-5">
            ABOUT DKA
          </h3>
        </div>

        <p className="mt-10 px-5 max-sm:px-0 md:px-20 text-xl max-sm:text-sm font-poppins">
{data.aboutUs}
        </p>
      </section>
      <section className="px-10 max-sm:px-5 py-20 max-sm:py-5 max-sm:text-sm  bg-[#C7DDFF] w-full">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
          
          <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0">
            <p className="mb-4 text-black font-bold">{data.statsText}</p>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-3 gap-4">
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refStudents}>
              {inViewStudents && <CountUp className="text-5xl font-bold" end={info.noOfStudents} duration={3} />}
              <p>Students</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refTutors}>
              {inViewTutors && <CountUp className="text-5xl font-bold" end={info.tutors} duration={3} />}
              <p>Tutors</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refIntlStudents}>
              {inViewIntlStudents && <CountUp className="text-5xl font-bold" end={info.foreignStudents} duration={3} />}
              <p>International Students</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refExperience}>
              {inViewExperience && <CountUp className="text-5xl font-bold" end={parseInt(data.YearsOfExperience)} duration={3} />}
              <p>Years Of Experience</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refPassPercentage}>
              {inViewPassPercentage && <CountUp className="text-5xl font-bold" end={parseInt(data.PassPercentage)} suffix="%" duration={3} />}
              <p>Pass Percentage</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refNationals}>
              {inViewNationals && <CountUp className="text-5xl font-bold" end={parseInt(data.StudentsParticipatedInNationals)} duration={3} />}
              <p>Students participated in Nationals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
