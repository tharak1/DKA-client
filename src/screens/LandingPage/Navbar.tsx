import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { db } from '../../firebase_config';
import { GoArrowUpRight } from "react-icons/go";
import { useSelector } from 'react-redux';
import { GetUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [viewDropdown, setViewDropdown] = useState(false);
  const [viewMenu, setViewMenu] = useState(false);
  const [courses, setCourses] = useState<string[]>([]);
  const user: UserModel = useSelector(GetUser);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const data = querySnapshot.docs.map((doc) => doc.data().name);
      setCourses(data);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleDropDown = () => {
    setViewDropdown(!viewDropdown);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`z-10 fixed top-0 left-0 w-full flex justify-between p-6 transition-all duration-200 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center">
        <span className="text-2xl font-bold mr-6">DKA</span>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center text-lg text-black ${isActive ? 'bg-gray-300' : ''}`
          }
        >
          HOME
        </NavLink>
        <ScrollLink to="about" smooth={true} duration={500} className="flex items-center text-lg text-black cursor-pointer">ABOUT US</ScrollLink>

        <div className="relative">
          <button
            onClick={toggleDropDown}
            className="focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Courses <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div className={`absolute z-10 ${viewDropdown ? "" : "hidden"} bg-slate-200 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link
                    to={`/course?category=${course}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setViewDropdown(false)}
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ScrollLink to="contact" smooth={true} duration={500} className="flex items-center text-lg text-black cursor-pointer">CONTACT US</ScrollLink>
      </div>

      {user ? (
        <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            onClick={() => setViewMenu(!viewMenu)}
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="user photo" />
          </button>

          {viewMenu && (
            <div className="absolute bottom-[-235px] right-0 z-50 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 border-2">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.name}</span>
              </div>
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My courses</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Performance</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My purchases</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login" className="text-black text-lg py-2 px-4 flex items-center space-x-5">Join now <GoArrowUpRight /></Link>
      )}
    </nav>
  );
};

export default Navbar;
