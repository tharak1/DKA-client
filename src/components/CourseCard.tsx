import React from 'react';
import { CourseModel, MyCourseModal } from '../models/CourseModel';
import RazorPay from './RazorPay';

interface CourseCardProps {
    courseDetails: CourseModel;
    isMycourse?:boolean;
    userRegisteredCourseDetails?:MyCourseModal;
}



const CourseCard: React.FC<CourseCardProps> = ({ courseDetails ,isMycourse=false,userRegisteredCourseDetails}) => {

    
    let imageUrl: string;

    if (typeof courseDetails.image === 'string') {
        // If it's a string, use it directly as the URL
        imageUrl = courseDetails.image;
    } else {
        // If it's a File, create an object URL for it
        imageUrl = courseDetails.image!;

    }
    return (
        <div className="flex flex-row w-full">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex w-full dark:bg-slate-700 dark:text-white">
                <img src={imageUrl} alt="Kuchipudi" loading="lazy" className="w-48 h-48 object-cover rounded-lg" />

                <div className="ml-6 flex flex-col justify-between dark:text-white w-full">
                    <div className='dark:text-white w-fit'>
                        <h2 className="text-2xl font-bold">{courseDetails.courseName}</h2>

                        <div className='w-full'>
                            <p className="text-gray-700 dark:text-white mt-2 ">{courseDetails.description}</p>
                        </div>
                        <p className="mt-4"><strong>Classes Type :</strong> {userRegisteredCourseDetails?.courseType}</p>
                        <p className="mt-1"><strong>Class Timings :</strong> {userRegisteredCourseDetails?.courseSession}</p>
                    </div>

                    {
                        isMycourse?(
                            <div className='flex flex-col justify-center'> 
                                <div>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Join class</button>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">write exam</button>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">view marks</button>
                                </div>
                                <div>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Renew Course</button>
                                </div>
                            </div>
                        ):(
                            <div className="flex justify-between items-center mt-4 w-full">
                                <div>
                                    <p className="text-xl font-bold">Price : <span className="text-green-500">₹ {courseDetails.price} / month</span></p>
                                </div>
                                <RazorPay course={courseDetails}/>
                            </div>
                        )
                    }
                </div>


            </div>


        </div>
    )
}

export default CourseCard;



{/* <h2 className="text-2xl font-bold">{courseDetails.courseName}</h2>
<p className="text-gray-700 dark:text-white mt-2 w-full overflow-auto ">{courseDetails.description}</p>
<p className="mt-4"><strong>Classes availability :</strong>{courseDetails.offline && courseDetails.online ? "Online & Offline" : courseDetails.online ? "Online" : courseDetails.offline ? "Offline" : "online & offlline"}</p>
<p className="mt-1"><strong>Class Timings :</strong> {courseDetails.sessions?.length! > 0 ? courseDetails.sessions?.map((session) => (<span>{session} &nbsp;</span>)) : "session 1 : 7am - 8am"}</p> */}