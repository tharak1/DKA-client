import React from 'react';
import { CourseModel, MyCourseModal } from '../models/CourseModel';
// import RazorPay from './RazorPay';
import { useSelector } from 'react-redux';
import { GetUser } from '../redux/UserSlice';
import { UserModel } from '../models/UserModel';
import PaymentBeforeModal from '../screens/OtherPages/PaymentBeforeModal';

interface CourseCardProps {
    courseDetails: CourseModel;
    isMycourse?: boolean;
    userRegisteredCourseDetails?: MyCourseModal;
}

const CourseCard: React.FC<CourseCardProps> = ({ courseDetails }) => {
    const user = useSelector(GetUser) as UserModel | null;
    

    const isUserRegistered = user?.registeredCourses.some(course => course.courseId === courseDetails.id);

    return (
        <div className="flex flex-row w-full">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex w-full dark:bg-slate-700 dark:text-white">
                <img src={courseDetails.image} alt={courseDetails.courseName} loading="lazy" className="w-48 h-48 object-cover rounded-lg" />

                <div className="ml-6 flex flex-col justify-between dark:text-white w-full">
                    <div className='dark:text-white w-fit'>
                        <h2 className="text-2xl font-bold">{courseDetails.courseName}</h2>
                        <div className='w-full'>
                            <p className="text-gray-700 dark:text-white mt-2 ">{courseDetails.description}</p>
                        </div>
                        <p className="mt-4">
                            <strong>Classes availability :</strong> {courseDetails.offline && courseDetails.online ? "Online & Offline" : courseDetails.online ? "Online" : courseDetails.offline ? "Offline" : "Online & Offline"}
                        </p>
                        <p className="mt-1">
                            <strong>Class Timings :</strong> {courseDetails.sessions?.length ? courseDetails.sessions.map((session, index) => (
                                <span key={index}>{session} &nbsp;</span>
                            )) : "Session 1: 7am - 8am"}
                        </p>
                    </div>

                    <div className="flex justify-between items-center mt-4 w-full">
                        <div>
                            <p className="text-xl font-bold">Price : <span className="text-green-500">₹ {courseDetails.price} / month</span></p>
                        </div>
                        {user ? (
                            isUserRegistered ? (
                                <button>Already Registered</button>
                            ) : (
                                <PaymentBeforeModal course={courseDetails} />
                            )
                        ) : (
                            <PaymentBeforeModal course={courseDetails} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
