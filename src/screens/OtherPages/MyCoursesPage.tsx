// import React, { useEffect, useState } from 'react'
// import Navbar from '../LandingPage/Navbar'
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../../firebase_config';
// import { useSelector } from 'react-redux';
// import { GetUser, fetchUser } from '../../redux/UserSlice';
// import { UserModel } from '../../models/UserModel';
// import { CourseModel } from '../../models/CourseModel';
// import MyCourseCard from '../../components/MyCourseCard';
// import { useAppDispatch } from '../../redux/Store';

// const MyCoursesPage:React.FC = () => {

//     const user = useSelector(GetUser) as UserModel;
//     const [courses,setCourses] = useState<CourseModel[]>([]);
//     const [loading,setLoading] = useState<boolean>(false);
//     const dispatch = useAppDispatch();


//     useEffect(()=>{
//         fetchCoursesByCategory();
//         dispatch(fetchUser(user.id));
//     },[]);

    

//     const fetchCoursesByCategory = async()=>{
//         if(user.registeredCourses.length>0){
//             const courseIds = user.registeredCourses.map(course => course.courseId);
            
//             setLoading(true);
//             const coursesCollection = collection(db, "courses");
//             const chunkSize = 10; 
//             const courses:CourseModel[] = [];
        
//             for (let i = 0; i < courseIds.length; i += chunkSize) {
//                 const chunk = courseIds.slice(i, i + chunkSize);
//                 const q = query(coursesCollection, where("__name__", "in", chunk));
//                 try {
//                     const querySnapshot = await getDocs(q);
//                     querySnapshot.forEach(doc => {
//                     courses.push({ id: doc.id, ...doc.data() as CourseModel });
//                     });
//                 } catch (error) {
//                     console.error("Error fetching courses: ", error);
//                 }
//             }
//             setCourses(courses);
//             setLoading(false);
//         }
//     }

//   return (
//     <>
    
//         <Navbar/>
    
//         <div className='pt-20 px-20 max-sm:px-4 w-full min-h-screen bg-slate-100 gap-3 overflow-auto'>
//             <div className=' w-full flex flex-col items-start mb-4'>
//                 <h1 className='text-2xl font-bold '>MY COURSES</h1>
//                 <p>Here are your details about the courses</p>
//             </div>  

//             {
//                 loading?(
//                     <div className='flex  w-full  justify-center items-center'>
//                         <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
//                             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
//                         </svg>
//                     </div>
//                 ):courses.length === 0?(
//                     <div className='flex w-full h-full justify-center items-center'>
//                         <h2>no purchases</h2>
//                     </div>
//                 ):(
//                     <div className='w-full h-full grid grid-cols-3 max-sm:grid-cols-1 gap-4'>
//                         {
//                             courses.map((obj,index)=>(
//                                 // <CourseCard courseDetails={obj} userRegisteredCourseDetails={user.registeredCourses[index]} isMycourse={true} key={obj.id}/>
//                                 <MyCourseCard courseDetails={obj} userRegisteredCourseDetails={user.registeredCourses[index]}/>
//                             ))
//                         }
//                     </div>
//                 )
//             }
//         </div>

//     </>
//   )
// }

// export default MyCoursesPage


import React, { useEffect, useState } from 'react'
import Navbar from '../LandingPage/Navbar'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase_config';
import { useSelector } from 'react-redux';
import { GetUser, fetchUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';
import { CourseModel } from '../../models/CourseModel';
import MyCourseCard from '../../components/MyCourseCard';
import { useAppDispatch } from '../../redux/Store';

const MyCoursesPage: React.FC = () => {
  const user = useSelector(GetUser) as UserModel;
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchCoursesByCategory();
    dispatch(fetchUser(user.id));
  }, []);

  const fetchCoursesByCategory = async () => {
    if (user.registeredCourses.length > 0) {
      const courseIds = user.registeredCourses.map(course => course.courseId);

      setLoading(true);
      const coursesCollection = collection(db, "courses");
      const chunkSize = 10;
      const fetchedCourses: CourseModel[] = [];

      for (let i = 0; i < courseIds.length; i += chunkSize) {
        const chunk = courseIds.slice(i, i + chunkSize);
        const q = query(coursesCollection, where("__name__", "in", chunk));
        try {
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(doc => {
            fetchedCourses.push({ id: doc.id, ...doc.data() as CourseModel });
          });
        } catch (error) {
          console.error("Error fetching courses: ", error);
        }
      }

      setCourses(fetchedCourses);
      setLoading(false);
    }
  };

  // Create a map of courseId to registeredCourse details
  const registeredCoursesMap = new Map(
    user.registeredCourses.map((course) => [course.courseId, course])
  );

  return (
    <>
      <Navbar />
      <div className='pt-20 px-20 max-sm:px-4 w-full min-h-screen bg-slate-100 gap-3 overflow-auto'>
        <div className=' w-full flex flex-col items-start mb-4'>
          <h1 className='text-2xl font-bold '>MY COURSES</h1>
          <p>Here are your details about the courses</p>
        </div>

        {
          loading ? (
            <div className='flex w-full justify-center items-center'>
              <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
            </div>
          ) : courses.length === 0 ? (
            <div className='flex w-full h-full justify-center items-center'>
              <h2>no purchases</h2>
            </div>
          ) : (
            <div className='w-full h-full grid grid-cols-3 max-sm:grid-cols-1 gap-4'>
              {
                courses.map((course) => (
                  <MyCourseCard 
                    key={course.id} 
                    courseDetails={course} 
                    userRegisteredCourseDetails={registeredCoursesMap.get(course.id!)} 
                  />
                ))
              }
            </div>
          )
        }
      </div>
    </>
  );
}

export default MyCoursesPage;
