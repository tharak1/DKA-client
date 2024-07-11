import React, { useEffect, useState } from 'react'
import Navbar from '../LandingPage/Navbar'
import PerformanceCard from '../../components/PerformanceCard'
import { DocumentData, doc, getDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { GetUser } from '../../redux/UserSlice'
import { UserModel } from '../../models/UserModel'
import { db } from '../../firebase_config'
import { useLocation } from 'react-router-dom'

const MyPerformancePage:React.FC = () => {
const user = useSelector(GetUser) as UserModel;
const [performances, setPerformances] = useState<any>([]);
const [loading,setLoading] = useState<boolean>(false);
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const course = searchParams.get('course');

const getFilteredValue = async (docu: DocumentData) => {
  const foundObj = docu.students.find((obj:any) => obj.studentId === user.id);
  return foundObj;
};

const getPerformances = async () => {
  setLoading(true);

  
    try {
      if(course === "all"){
      const performancePromises = user.registeredCourses.map(async (obj) => {
        const performanceDoc = await getDoc(doc(db, 'performances', obj.courseId));
        return performanceDoc.exists() ? await getFilteredValue(performanceDoc.data() as DocumentData) : null;
      });
      const performances = await Promise.all(performancePromises);
      const validPerformances = performances.filter((performance) => performance !== null);
      setPerformances(validPerformances);
      console.log(validPerformances);
      setLoading(false);
    }
      else{
        const performanceDoc = await getDoc(doc(db, 'performances', course!));
        console.log(performanceDoc.data());
        
        if (performanceDoc.exists()) {
          const performanceData = await getFilteredValue(performanceDoc.data() as DocumentData);
          setPerformances([performanceData]);
          console.log([performanceData]);
      setLoading(false);

        }
        else {
          setPerformances([]);
          console.log([]);
        }
      }
    } catch (error) {
      console.error('Error fetching performances:', error);
      setLoading(false);
    }
  


};

useEffect(() => {
  getPerformances();
}, [location.search,]);

  return (
    <>
        <Navbar/>
    
        <div className='pt-20 px-20 max-sm:px-4 w-full min-h-screen bg-slate-100 gap-3 overflow-auto'>
            <div className=' w-full flex flex-col items-start mb-4'>
                <h1 className='text-2xl font-bold '>PERFORMANCE</h1>
                <p className='font-poppins'>Attend , learn and Take tests . Check your potential</p>
            </div>  

            {
              loading?(
                <div className='w-full h-full flex justify-center items-center'>
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
              ):(
                <div className='flex flex-col space-y-5 mb-3'>
                  {
                    performances.map((obj:any,index:number)=>(
                      <PerformanceCard performance={obj} course={user.registeredCourses[index]} key={index}/>
                    ))
                  }
                </div>
              )
            }
        </div>

    </>
  )
}

export default MyPerformancePage
