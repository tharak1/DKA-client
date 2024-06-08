import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { db } from '../../firebase_config';
import { GoArrowUpRight } from "react-icons/go";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [viewDropdown,setViewDropDown] = useState(false);
  const [courses,setCourses] = useState<string[]>([]);


  useEffect(()=>{
    fetchCategories();
  },[]);

  const fetchCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const data = querySnapshot.docs.map((doc) => {
        return doc.data().name;
      });
  
      setCourses(data)
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };


  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleDropDown = () =>{
    setViewDropDown(viewDropdown?false:true);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`z-10 fixed top-0 left-0 w-full flex justify-between p-6 transition-all duration-200 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center"> {/* Container for DKA */}
        <span className="text-2xl font-bold mr-6">DKA</span>
      </div>
      <div className="flex items-center space-x-4 ml-auto"> {/* Container for links */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center text-lg text-black ${isActive ? 'bg-gray-300' : ''}`
          }
        >
          HOME
        </NavLink>
        <ScrollLink to="about" smooth={true} duration={500} className="flex items-center text-lg text-black cursor-pointer">ABOUT US</ScrollLink>
        {/* <NavLink
          to="/courses"
          className={({ isActive }) =>
            `flex items-center text-lg text-black ${isActive ? 'bg-gray-300' : ''}`
          }
        >
          COURSES
        </NavLink> */}
        <div className='relative'>

            <button onClick={toggleDropDown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Courses <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>

            <div id="dropdown" className={`absolute z-10 ${viewDropdown?"":"hidden "}  bg-slate-200 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              {
                courses.map((course)=>(
                  <li>
                    <Link to={`/course?category=${course}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>{setViewDropDown(false)}}>{course}</Link>
                  </li>
                ))
              }
            </ul>
            </div>
        </div>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center text-lg text-black mr-10 ${isActive ? 'bg-gray-300' : ''}`
          }
        >
          CONTACT US
        </NavLink> */}

        <ScrollLink to="about" smooth={true} duration={500} className="flex items-center text-lg text-black cursor-pointer">CONTACT US</ScrollLink>

      </div>
      <Link to="/join-now" className="text-black text-lg py-2 px-4">Join now</Link>
    </nav>
  );
}

export default Navbar;
