import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase_config';
import { CourseModel } from '../../models/CourseModel';
import Navbar from '../LandingPage/Navbar';

const CoursesPage:React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const [courses,setCourses] = useState<CourseModel[]>([]);

    useEffect(()=>{
        fetchCoursesByCategory();
    },[]);

    const fetchCoursesByCategory = async()=>{
        const q = query(collection(db, "courses"), where("category", "==", category));

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => {
            return doc.data().name;
          });
        setCourses(data);
    }


  return (
    <div className=' w-full h-screen overflow-auto bg-slate-100 gap-3'>
      <div className='w-full'>
        <Navbar/>
      </div>

    <div className='px-10'>
        <div className=' w-full flex flex-col items-start mb-4'>
            <h1 className='text-lg font-bold '>{category}</h1>
            <p>Here are your details about the {category}</p>
        </div>

        <div>
            
        </div>
    </div>

    </div>
  )
}

export default CoursesPage
