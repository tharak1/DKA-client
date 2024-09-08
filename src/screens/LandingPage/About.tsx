import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  // Set up the IntersectionObserver hooks
  const [refStudents, inViewStudents] = useInView({ triggerOnce: true });
  const [refTutors, inViewTutors] = useInView({ triggerOnce: true });
  const [refIntlStudents, inViewIntlStudents] = useInView({ triggerOnce: true });
  const [refExperience, inViewExperience] = useInView({ triggerOnce: true });
  const [refPassPercentage, inViewPassPercentage] = useInView({ triggerOnce: true });
  const [refNationals, inViewNationals] = useInView({ triggerOnce: true });

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
        Divya kala academy has been started for more than 10 yrs of academics and cultural activities. The academy is running successfully with a vision to impact quality, cultural and value based education to children to improve them in building their future by motivating them to participate in various activities like stage performances, Competition among children, with good teaching facility to reach their aims and goals successfully for a bright future.
        DKA is focussing towards progress of the students not only in academies. But also in the extra-curricular activities to build there mental and Physical strength which a almost necessary in the present circumstances. our various activities like music, dance, Abacus, academies, Guitar, Piano, etc to name a few has been running successfully from the past few years where the Students. Overall development is made by our excellent faculty focussing on their future careers.
        </p>
      </section>
      <section className="px-10 max-sm:px-5 py-20 max-sm:py-5 max-sm:text-sm  bg-[#C7DDFF] w-full">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
          
          {/* <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0">
            <p className="mb-4 text-black font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="text-black font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div> */}

          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-3 gap-4">
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refStudents}>
              {inViewStudents && <CountUp className="text-5xl font-bold" end={550} duration={3} />}
              <p>Students</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refTutors}>
              {inViewTutors && <CountUp className="text-5xl font-bold" end={50} duration={3} />}
              <p>Tutors</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refIntlStudents}>
              {inViewIntlStudents && <CountUp className="text-5xl font-bold" end={110} duration={3} />}
              <p>International Students</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refExperience}>
              {inViewExperience && <CountUp className="text-5xl font-bold" end={10} duration={3} />}
              <p>Years Of Experience</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refPassPercentage}>
              {inViewPassPercentage && <CountUp className="text-5xl font-bold" end={98} suffix="%" duration={3} />}
              <p>Pass Percentage</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center" ref={refNationals}>
              {inViewNationals && <CountUp className="text-5xl font-bold" end={155} duration={3} />}
              <p>Students participated in Nationals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
