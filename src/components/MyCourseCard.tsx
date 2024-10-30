import React, { useState } from 'react'
import { CourseModel, MyCourseModal } from '../models/CourseModel';
import { db } from '../firebase_config';
import { useNavigate } from 'react-router-dom';
import NotificationModal from './NotificationModal';
import RazorPayRenew from './RenewRazorPay';
import { doc, getDoc } from 'firebase/firestore';
interface CourseCardProps {
    courseDetails: CourseModel;
    userRegisteredCourseDetails?:MyCourseModal;
}

// function isDateTimeInRange(startDate: string, startTime: string, endDate: string, endTime: string): boolean {
//     // Parse dates and times
//     const startDateTime = new Date(`${startDate}T${startTime}`);
//     const endDateTime = new Date(`${endDate}T${endTime}`);
//     const dateTime = new Date();

//     // Check if dateTime is within the range of startDateTime and endDateTime
//     return dateTime > startDateTime && dateTime < endDateTime;
// }


const MyCourseCard:React.FC<CourseCardProps> = ({courseDetails,userRegisteredCourseDetails}) => {


    function isValidURL(url: string): boolean {
        const regex = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$','i' // fragment locator
        );
        return !!regex.test(url);
    }



    const [isOpen,setIsOpen] = useState<boolean>(false);
  
    const [notification,setNotification] = useState({
        heading:"",
        body:""
    })

    const open = () =>{
        setIsOpen(true);
    }

    const close = () =>{
        setIsOpen(false);
    }

    const navigate = useNavigate();
    const joinOnlineClass = async() =>{
        const onlineClass = await getDoc(doc(db,'onlineClass',courseDetails.courseName!));

        if(new Date() <= new Date(userRegisteredCourseDetails?.endDate!)){

            if(onlineClass.data()){
                if(isValidURL(onlineClass.data()!.classLink)){
                    window.open(onlineClass.data()!.classLink, '_blank');
                }
                else{
                    open();
                    setNotification({heading:"Online Class",body:"There is no class at the moment"})
                }
            }
            else{
                open();
                setNotification({heading:"Online Class",body:"There is no class at the moment"})
            }

        }else{
            open();
            setNotification({heading:"Requires Renewal",body:"The course has ended. To continue, please renew the course."})
        }


    }



    const handleViewMarks = () =>{
        navigate(`/my_performances?course=${courseDetails.id}`)
    }


    
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
    <img className="w-full h-64 object-cover object-center" loading='lazy' src={courseDetails.image} alt="Kuchipudi Dance"/>
    <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{courseDetails.courseName}</h2>
        <p className="text-gray-600"><span className="font-semibold">Classes mode:</span> {userRegisteredCourseDetails?.courseType}</p>
        {/* <p className="text-gray-600"><span className="font-semibold">Class Timings:</span><span className="font-semibold">{userRegisteredCourseDetails?.courseSession}</span></p> */}
        <div className="mt-2 grid grid-cols-2 justify-around gap-3">

            <button className="bg-blue-200 text-gray-800 py-2 px-2 rounded-xl text-sm font-semibold hover:bg-blue-300" onClick={handleViewMarks}>View Marks</button>

            {
                userRegisteredCourseDetails?.courseType==="online" &&(
                    <button className="bg-blue-200 text-blue-800 py-2 px-2 rounded-xl text-sm font-semibold hover:bg-blue-300" onClick={joinOnlineClass}>Join Class</button>
                )
            }
        </div>
        {
            new Date() >= new Date(userRegisteredCourseDetails?.endDate!) &&(
                <div className="mt-4">
                    <RazorPayRenew course={courseDetails}/>
                </div>
            )
        }
    </div>
    <NotificationModal heading={notification.heading} body={notification.body} isOpen={isOpen} onClose={close} type='none'/>
</div>
  )
}

export default MyCourseCard
