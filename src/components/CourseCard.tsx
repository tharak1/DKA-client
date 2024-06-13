import React from 'react';
import { CourseModel, MyCourseModal } from '../models/CourseModel';
import RazorPay from './RazorPay';
import { useSelector } from 'react-redux';
import { GetUser } from '../redux/UserSlice';
import { UserModel } from '../models/UserModel';

interface CourseCardProps {
    courseDetails: CourseModel;
    isMycourse?:boolean;
    userRegisteredCourseDetails?:MyCourseModal;
}



const CourseCard: React.FC<CourseCardProps> = ({ courseDetails }) => {
    const user = useSelector(GetUser) as UserModel;
    
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
                        <p className="mt-4"><strong>Classes availability :</strong>{courseDetails.offline && courseDetails.online ? "Online & Offline" : courseDetails.online ? "Online" : courseDetails.offline ? "Offline" : "online & offlline"}</p>
                        <p className="mt-1"><strong>Class Timings :</strong> {courseDetails.sessions?.length! > 0 ? courseDetails.sessions?.map((session) => (<span>{session} &nbsp;</span>)) : "session 1 : 7am - 8am"}</p>
                    </div>

                    {
                        user.registeredCourses.some(course => course.courseId === courseDetails.id)?(
                            <div className="flex justify-between items-center mt-4 w-full">
                                <div>
                                    <p className="text-xl font-bold">Price : <span className="text-green-500">₹ {courseDetails.price} / month</span></p>
                                </div>
                                <button>hi</button>
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