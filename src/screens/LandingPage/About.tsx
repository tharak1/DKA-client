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

        <p className="mt-10 px-5 max-sm:px-0 md:px-20 text-xl max-sm:text-base font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. <br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. <br />
          Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br />
          Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. <br />
          Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.
        </p>
      </section>
      <section className="px-10 max-sm:px-5 py-20 max-sm:py-5  bg-[#C7DDFF] w-full">
        <div className="max-w-7xl mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0">
            <p className="mb-4 text-black font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="text-black font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
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
