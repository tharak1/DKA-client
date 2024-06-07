import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase_config';
import { CourseModel } from '../../models/CourseModel';
import Navbar from '../LandingPage/Navbar';
import CourseCard from '../../components/CourseCard';

const CoursesPage:React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const [courses,setCourses] = useState<CourseModel[]>([]);

    useEffect(()=>{
        fetchCoursesByCategory();
    },[location.search]);

    const fetchCoursesByCategory = async()=>{
        const q = query(collection(db, "courses"), where("category", "==", category));

        const querySnapshot = await getDocs(q);
        const courses: CourseModel[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as CourseModel[];



        setCourses(courses);
    }


  return (
    <div className=' w-full h-screen overflow-auto bg-slate-100 gap-3'>
      <div className='w-full'>
        <Navbar/>
      </div>

    <div className='pt-20 px-20 flex flex-col'>
        <div className=' w-full flex flex-col items-start mb-4'>
            <h1 className='text-2xl font-bold '>{category}</h1>
            <p>Here are your details about the {category}</p>
        </div>

        <div className='w-full flex flex-col space-y-5'>
            {
                courses.map((obj)=>(
                    <CourseCard courseDetails={obj} key={obj.id}/>
                ))
            }
        </div>
    </div>

    </div>
  )
}

export default CoursesPage
