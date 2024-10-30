import React, { useState } from 'react'
import { QuestionPaper } from '../models/ExamModel'
import { useSelector } from 'react-redux';
import { GetUser } from '../redux/UserSlice';
import { UserModel } from '../models/UserModel';
import NotificationModal from './NotificationModal';
import { MyCourseModal } from '../models/CourseModel';

interface WriteExamCardPrpos{
    qp : QuestionPaper;
}

const WriteExamCard:React.FC<WriteExamCardPrpos> = ({qp}) => {

    const curUser = useSelector(GetUser) as UserModel;

    const [error,setError] = useState<string>("");
    const [qpLoading,setQpLoading] = useState<boolean>(false);
    const [notification,setNotification] = useState({
        heading:"",
        body:""
    })

    const [isOpen,setIsOpen] = useState<boolean>(false);

    const open = () =>{
        setIsOpen(true);
    }

    const close = () =>{
        setIsOpen(false);
    }

    // function isDateTimeInRange(startDate: string, startTime: string, endDate: string, endTime: string): boolean {
    //     // Parse dates and times
    //     const startDateTime = new Date(`${startDate}T${startTime}`);
    //     const endDateTime = new Date(`${endDate}T${endTime}`);
    //     const dateTime = new Date();
    
    //     // Check if dateTime is within the range of startDateTime and endDateTime
    //     return dateTime > startDateTime && dateTime < endDateTime;
    // }

    const writeExam = () => {
        setQpLoading(true)        

            const encodedUserData = encodeURIComponent(JSON.stringify(curUser));

            if(new Date() <= new Date(curUser.registeredCourses.find((c:MyCourseModal) => c.courseName === qp.course!)?.endDate!)){
                // if (isDateTimeInRange(qp.startDate, qp.startTime, qp.endDate, qp.endTime)) {
                    // window.open(`https://dka-exam-portal.vercel.app/write_exam?id=${qp.id}&user=${encodedUserData}`);
                    window.location.href = `https://dka-exam-portal.vercel.app/write_exam?id=${qp.id}&user=${encodedUserData}`;
                    // window.location.href = `http://localhost:5175/write_exam?id=${qp.id}&user=${encodedUserData}`;


                // } else {
                //     setError("Time");
                //     setNotification({
                //         heading: "Time Error",
                //         body: `Exam starts on: ${qp.startDate} ${qp.startTime} - Ends on: ${qp.endDate} ${qp.endTime}`
                //     });
                //     open();
                // }
            }else{
                setError("Requires Renewal");
                setNotification({
                    heading: "Course has expired",
                    body: `The course has ended. To continue, please renew the course.`
                });
                open();
            }
    

        setQpLoading(false);
    }

  return (
    <>
        <div className="bg-white p-6 shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold mb-2">{qp.course} - ({qp.examType === "create question paper"?"MCQ":"Written"})</h2>
            <p className="text-gray-600">Start Date / time : {qp.startDate} / {qp.startTime}</p>
            <p className="text-gray-600">End Date / time : {qp.endDate} / {qp.endTime}</p>
            <p className="text-gray-600">Max Marks : {qp.totalMarks}</p>
            {
                qp.for === 'Select Students' &&(
                    <p className="text-gray-600">Level : {qp.level}</p>
                )
            }

            <button className="mt-4 bg-blue-200 text-gray-800 py-2 px-2 rounded-xl text-sm font-semibold hover:bg-blue-300" onClick={writeExam}>{
                qpLoading?(
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                ):error!==""?(error):(
                    "Write Exam"
                )
                }
            </button>
        </div>

        <NotificationModal isOpen = {isOpen} onClose={close} heading={notification.heading} body={notification.body} type='none'/>
    </>
  )
}

export default WriteExamCard
