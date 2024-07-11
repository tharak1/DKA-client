// import { collection, getDocs } from 'firebase/firestore';
// import React, { useEffect, useRef, useState } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
// import { db } from '../../firebase_config';
// import { GoArrowUpRight } from "react-icons/go";
// import { useSelector } from 'react-redux';
// import { GetUser, clearUser } from '../../redux/UserSlice';
// import { UserModel } from '../../models/UserModel';
// import { FaChevronDown } from "react-icons/fa";
// import { useAppDispatch } from '../../redux/Store';
// import { IoMenu } from "react-icons/io5";
// import { IoMdHome } from "react-icons/io";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import { MdLibraryBooks } from "react-icons/md";
// import { IoMdContact } from "react-icons/io";

// const Navbar: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const [scrolled, setScrolled] = useState(false);
//   const [viewDropdown, setViewDropdown] = useState(false);
//   const [viewMenu, setViewMenu] = useState(false);
//   const [courses, setCourses] = useState<string[]>([]);
//   const user: UserModel = useSelector(GetUser);

//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const menuRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "categories"));
//       const data = querySnapshot.docs.map((doc) => doc.data().name);
//       setCourses(data);
//     } catch (error) {
//       console.error("Error fetching categories: ", error);
//     }
//   };

//   const handleScroll = () => {
//     setScrolled(window.scrollY > 25);
//   };

//   const toggleDropDown = () => {
//     setViewDropdown(!viewDropdown);
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//       setViewDropdown(false);
//     }
//     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//       setViewMenu(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//     <nav className={`z-20 fixed top-0 left-0 w-full flex justify-between py-4 px-8 transition-all duration-200 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
//       <div className="flex items-center justify-evenly">
//         <div className="mr-2 flex justify-center items-center sm:hidden">
//           <IoMenu size={28} />
//         </div>
//         <span className="text-3xl font-bold mr-4">DKA</span>
//       </div>
//       <div className="flex items-center space-x-4 ml-auto max-sm:hidden">
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             `flex  items-center font-poppins cursor-pointer  ${isActive ? 'font-bold text-black text-lg'  : 'text-base font-thin  text-gray-500'} hover:text-black`
//           }
//         >
//           HOME
//         </NavLink>
//         <ScrollLink to="about" smooth={true} duration={500} className="flex items-center font-poppins text-base font-thin  text-gray-500 cursor-pointer hover:text-black" activeStyle={{fontWeight:"700",color:"black",fontSize:"1.125rem"}}>ABOUT US</ScrollLink>

//         <div className="relative" ref={dropdownRef}>
//           <button
//             onClick={toggleDropDown}
//             className={`font-poppins flex justify-center items-center  ${
//               location.pathname === '/course' ? 'font-bold text-black text-lg' : 'text-base font-thin text-gray-500'}  hover:text-black `}
//             >
//           COURSES 
//           <FaChevronDown style={{ marginLeft: '10px' }} />
          
//           </button>

//           <div className={`absolute z-10 ${viewDropdown ? "" : "hidden"}  w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 border-2`}>
//             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//               {courses.map((course, index) => (
//                 <li key={index}>
//                   <Link
//                     to={`/course?category=${course}`}
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-black "
//                     onClick={() => setViewDropdown(false)}
//                   >
//                     {course}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <ScrollLink to="contact" smooth={true} duration={500} className="flex items-center font-poppins text-base font-thin  text-gray-500 cursor-pointer hover:text-black" activeStyle={{fontWeight:"700",color:"black",fontSize:"1.125rem"}}>CONTACT US</ScrollLink>
//       </div>

//       {user ? (
//         <div className="ml-3 relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse cursor-pointer" onClick={() => setViewMenu(!viewMenu)} ref={menuRef}>
//           <button
//             type="button"
//             className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//           >
//             <span className="sr-only">Open user menu</span>
//             <img className="w-10 h-10 rounded-full max-sm:h-12 max-sm:w-12" src={user.imageUrl} alt="user photo" />
//           </button>
//           <div className='ml-5 '>
//           <FaChevronDown  />

//           </div>

//           {viewMenu && (
//             <div className="absolute top-[30px] ml-3 right-0 z-50 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 border-2">
//               <div className="px-4 py-3">
//                 <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
//                 <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.id}</span>
//               </div>
//               <ul className="py-2">
//                 <li>
//                   <Link to="/my_courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My courses</Link>
//                 </li>
//                 <li>
//                   <Link to="/my_performances?course=all" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Performance</Link>
//                 </li>
//                 <li>
//                   <Link to="/my_purchases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My purchases</Link>
//                 </li>
//                 <li>
//                   <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"onClick={()=>{
//                     dispatch(clearUser());
//                     navigate('/login')
//                   }} >Sign out</p>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       ) : (
//         <Link to="/login" className="text-black text-lg py-2 px-4 flex items-center space-x-5 hover:text-black">Join now <GoArrowUpRight /></Link>
//       )}


//     </nav>
//     <div className='bg-slate-200 w-full'>
//     <div className='w-3/5 h-screen sm:hidden z-10 bg-white  fixed'>
//     <ul className="space-y-2 pb-5 mt-20 ">
//                             <li>
//                                 <Link to="/" className="flex items-center p-2 text-xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                     <IoMdHome size={24} />
//                                     <span className="ml-3">Home</span>
//                                 </Link>
//                             </li>
//                             <li>
//                             <ScrollLink to="about" smooth={true} className="flex items-center p-2 text-xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                     <IoMdInformationCircleOutline size={24}/>
//                                     <span className="ml-3">About Us</span>
//                                     </ScrollLink>
//                             </li>
//                             <li>
//                                 <button onClick={toggleDropDown} className="w-full flex items-center p-2 text-xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                     <MdLibraryBooks size={24}/>
//                                     <span className="ml-3">Courses</span>
//                                 </button>
//                                 <ul className='mt-2 space-y-2 pl-8'>
//                                 {viewDropdown && courses.map((course, index) => (
//                                                 <li key={index}>
//                                                   <Link
//                                                     to={`/course?category=${course}`}
//                                                     className="block p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
//                                                     onClick={() => setViewDropdown(false)}
//                                                   >
//                                                     {course}
//                                                   </Link>
//                                                 </li>
//                                               ))}
//                                 </ul>


//                             </li>
//                             <li>
//                                 <Link to="/admin/students" className="flex items-center p-2 text-xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
//                                     <IoMdContact size={24}/>
//                                     <span className="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
//                                 </Link>
//                             </li>

//                         </ul>
//     </div>
//     </div>
//     </>


//   );
// };

// export default Navbar;



import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { db } from '../../firebase_config';
import { GoArrowUpRight } from "react-icons/go";
import { useSelector } from 'react-redux';
import { GetUser, clearUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';
import { FaChevronDown } from "react-icons/fa";
import { useAppDispatch } from '../../redux/Store';
import { IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [viewDropdown, setViewDropdown] = useState(false);
  const [viewMenu, setViewMenu] = useState(false);
  const [viewDrawer, setViewDrawer] = useState(false);

  const [courses, setCourses] = useState<string[]>([]);
  const user: UserModel = useSelector(GetUser);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
    setScrolled(window.scrollY > 25);
  };

  const toggleDropDown = () => {
    setViewDropdown(!viewDropdown);
  };

  const toggleDrawer = () => {
    setViewDrawer(!viewDrawer);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setViewDropdown(false);
    }
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setViewMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={`z-20 fixed top-0 left-0 w-full flex justify-between py-4 px-8 transition-all duration-200 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="flex items-center justify-evenly">
          <div className="mr-2 flex justify-center items-center sm:hidden" onClick={toggleDrawer}>
            <IoMenu size={28} />
          </div>
          <span className="text-3xl font-bold mr-4">DKA</span>
        </div>
        <div className="flex items-center space-x-4 ml-auto max-sm:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center font-poppins cursor-pointer ${isActive ? 'font-bold text-black text-lg' : 'text-base font-thin text-gray-500'} hover:text-black`
            }
          >
            HOME
          </NavLink>
          <ScrollLink to="about" smooth={true} duration={500} className="flex items-center font-poppins text-base font-thin text-gray-500 cursor-pointer hover:text-black" activeClass="font-bold text-black text-lg">
            ABOUT US
          </ScrollLink>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropDown}
              className={`font-poppins flex justify-center items-center ${location.pathname === '/course' ? 'font-bold text-black text-lg' : 'text-base font-thin text-gray-500'} hover:text-black `}
            >
              COURSES 
              <FaChevronDown style={{ marginLeft: '10px' }} />
            </button>

            <div className={`absolute z-10 ${viewDropdown ? "" : "hidden"} w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 border-2`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {courses.map((course, index) => (
                  <li key={index}>
                    <Link
                      to={`/course?category=${course}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-black "
                      onClick={() => setViewDropdown(false)}
                    >
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ScrollLink to="contact" smooth={true} duration={500} className="flex items-center font-poppins text-base font-thin text-gray-500 cursor-pointer hover:text-black" activeClass="font-bold text-black text-lg">
            CONTACT US
          </ScrollLink>
        </div>

        {user ? (
          <div className="ml-3 relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse cursor-pointer" onClick={() => setViewMenu(!viewMenu)} ref={menuRef}>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-10 h-10 rounded-full max-sm:h-12 max-sm:w-12" src={user.imageUrl} alt="user photo" />
            </button>
            <div className='ml-5'>
              <FaChevronDown />
            </div>

            {viewMenu && (
              <div className="absolute top-[30px] ml-3 right-0 z-50 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 border-2">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.id}</span>
                </div>
                <ul className="py-2">
                  <li>
                    <Link to="/my_courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My courses</Link>
                  </li>
                  <li>
                    <Link to="/my_performances?course=all" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Performance</Link>
                  </li>
                  <li>
                    <Link to="/my_purchases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My purchases</Link>
                  </li>
                  <li>
                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => {
                      dispatch(clearUser());
                      navigate('/login');
                    }}>Sign out</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="text-black text-lg py-2 px-4 flex items-center space-x-5 hover:text-black">Join now <GoArrowUpRight /></Link>
        )}
      </nav>

      {/* Mobile Menu */}
      {viewDrawer && (
  <div className='bg-slate-200 w-full transition duration-150 ease-in-out'>
    <div className='w-3/5 h-screen sm:hidden z-10 bg-white fixed transition duration-150 ease-in-out'>
      <ul className="space-y-2 pb-5 mt-20">
        <li>
          <Link to="/" className="flex items-center p-2 text-xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoMdHome size={24} />
            <span className="ml-3">Home</span>
          </Link>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} className="flex items-center p-2 text-xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoMdInformationCircleOutline size={24} />
            <span className="ml-3">About Us</span>
          </ScrollLink>
        </li>
        <li>
          <button onClick={toggleDropDown} className="w-full flex items-center p-2 text-xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <MdLibraryBooks size={24} />
            <span className="ml-3">Courses</span>
          </button>
          { (
            <ul className='mt-2 space-y-2 pl-8'>
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={`/course?category=${course}`}
                    className="block p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      setViewDropdown(false);
                      setViewDrawer(false); // Close the drawer
                    }}
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link to="/admin/students" className="flex items-center p-2 text-xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoMdContact size={24} />
            <span className="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)}

    </>
  );
};

export default Navbar;
