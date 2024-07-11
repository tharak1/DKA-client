import React, { useEffect, useState, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../index.css';
import { CourseModel } from '../../models/CourseModel';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [currentHoverIndex, setCurrentHoverIndex] = useState<number>(-1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    getCourses();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    startAutoHoverEffect();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [courses]);

  useEffect(() => {
    scrollIntoViewIfNeeded(currentHoverIndex);
  }, [currentHoverIndex]);

  const getCourses = async () => {
    const coursesSnapshot = await getDocs(collection(db, "courses"));
    const coursesData = coursesSnapshot.docs.map((doc) => doc.data() as CourseModel);
    setCourses([...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData,...coursesData]);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const canScrollLeft = container.scrollLeft > 0;
      const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
      setShowLeftButton(canScrollLeft);
      setShowRightButton(canScrollRight);
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newPosition = container.scrollLeft - container.clientWidth;
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth', 
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newPosition = container.scrollLeft + container.clientWidth;
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth', 
      });
    }
  };

  const startAutoHoverEffect = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrentHoverIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 2000);
  };

  const scrollIntoViewIfNeeded = (index: number) => {
    if (scrollContainerRef.current && index !== -1) {
      const container = scrollContainerRef.current;
      const hoveredItem = container.children[index] as HTMLDivElement;
      const containerRect = container.getBoundingClientRect();
      const itemRect = hoveredItem.getBoundingClientRect();

      if (itemRect.left < containerRect.left || itemRect.right > containerRect.right) {
        container.scrollTo({
          left: hoveredItem.offsetLeft - (container.clientWidth - hoveredItem.clientWidth) / 2,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleCourseHover = (index: number) => {
    // Clear timer when manual hover occurs
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setCurrentHoverIndex(index);
    startAutoHoverEffect(); // Restart auto hover timer
  };

  return (
    <div className='w-full justify-center items-center flex flex-col'>
    
    <div className='w-full justify-center items-start flex '>
      <div className='relative w-3/4 max-sm:w-full overflow-hidden bg-white'>
        <div className='flex flex-row space-x-4 w-full overflow-x-auto' ref={scrollContainerRef} style={{ overflowX: 'hidden' }}>
          {courses.map((course, index) => (
            <div
              key={index}
              className={`flex-shrink-0 relative h-64 w-40 rounded-[45px] bg-cover bg-center hover:w-96 transition-all duration-500 transform overflow-hidden shadow-lg ${
                currentHoverIndex === index ? 'opacity-100 w-80' : ''
              }`}
              style={{ backgroundImage: `url(${course.image})` }}
              onMouseEnter={() => handleCourseHover(index)}
            >
              <div className='absolute inset-0 bg-gradient-to-t from-black opacity-20 rounded-[45px]'></div>
              <div className='absolute inset-0 flex items-end justify-center p-4'>
              <span
                className={`text-white m-2 text-xl font-bold transition-transform duration-500 ${
                  currentHoverIndex === index ? 'transform -rotate-90' : ''
                }`}
                style={{ writingMode: 'vertical-lr', transformOrigin: 'bottom' }}
              >
                {course.courseName}
              </span>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  

      <div className='w-full flex justify-center items-center space-x-10 mt-5'>
        {showLeftButton && (
          <button
            className='hover:bg-gray-200 px-2 py-2 rounded-full transition-opacity duration-300 hover:opacity-100'
            onClick={handleScrollLeft}
          >
            <MdOutlineArrowBackIos size={20} />
          </button>
        )}

        {showRightButton && (
          <button
            className='hover:bg-gray-200 px-2 py-2 rounded-full transition-opacity duration-300 hover:opacity-100'
            onClick={handleScrollRight}
          >
            <MdArrowForwardIos size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Courses;
