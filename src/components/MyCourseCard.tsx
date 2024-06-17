import React, { useState } from 'react'
import { CourseModel, MyCourseModal } from '../models/CourseModel';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase_config';
import { QuestionPaper } from '../models/ExamModel';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetUser } from '../redux/UserSlice';
import { UserModel } from '../models/UserModel';
interface CourseCardProps {
    courseDetails: CourseModel;
    userRegisteredCourseDetails?:MyCourseModal;
}

function isDateTimeInRange(startDate: string, startTime: string, endDate: string, endTime: string): boolean {
    // Parse dates and times
    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);
    const dateTime = new Date();

    // Check if dateTime is within the range of startDateTime and endDateTime
    return dateTime > startDateTime && dateTime < endDateTime;
}


const MyCourseCard:React.FC<CourseCardProps> = ({courseDetails,userRegisteredCourseDetails}) => {
    const [qpLoading,setQpLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>("");

    const navigate = useNavigate();
    const user = useSelector(GetUser) as UserModel;
    const joinOnlineClass = async() =>{
        const onlineClass = await getDoc(doc(db,'onlineClass',courseDetails.courseName!));
        window.open(onlineClass.data()!.classLink, '_blank');
    }

    const writeExam = async()=>{
        setQpLoading(true);
        const queryans = await getDocs(query(collection(db,"Question-Paper"),where("course","==",courseDetails.courseName)));
        let fetchedUser: QuestionPaper= {
            uploaded:false,
            editing:false,
            id:"", 
            examType:"",
            uploadedPdfURL:"",
            course:"",
            for:"",
            startDate:"",
            startTime:"",
            endDate:"",
            endTime:"",
            duration:"",
            totalMarks:0,
            questions : [],
            questionsImages : [],
            noOfQuestions:0
        };
 
        queryans.forEach((doc) => {
            fetchedUser = doc.data() as QuestionPaper;
        });
        setQpLoading(false);

        const encodedUserData = encodeURIComponent(JSON.stringify(user));

        if(fetchedUser && isDateTimeInRange(fetchedUser.startDate,fetchedUser.startTime,fetchedUser.endDate,fetchedUser.endTime)){
            window.open(`http://localhost:5175/write_exam?id=${fetchedUser.id}&user=${encodedUserData}`);
        }
        else if(fetchedUser.id===''){
            setError("Time")
        }
        else{
            setError("No Exam")
        }




        

        console.log(fetchedUser.id);
    }

    const handleViewMarks = () =>{
        navigate(`/my_performances?course=${courseDetails.id}`)
    }
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
    <img className="w-full h-64 object-cover object-center" src={courseDetails.image} alt="Kuchipudi Dance"/>
    <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{courseDetails.courseName}</h2>
        <p className="text-gray-600"><span className="font-semibold">Classes mode:</span> {userRegisteredCourseDetails?.courseType}</p>
        <p className="text-gray-600"><span className="font-semibold">Class Timings:</span><span className="font-semibold">{userRegisteredCourseDetails?.courseSession}</span></p>
        <div className="mt-2 grid grid-cols-3 gap-2">
            <button className="bg-blue-200 text-gray-800 py-2 px-2 rounded-xl text-sm font-semibold hover:bg-blue-300" onClick={writeExam}>{
            qpLoading?(
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            ):error!==""?(error):(
                "Write Exam"
            )
            }</button>
            <button className="bg-blue-200 text-gray-800 py-2 px-2 rounded-xl text-sm font-semibold hover:bg-blue-300" onClick={handleViewMarks}>View Marks</button>
            <button className="bg-blue-200 text-blue-800 py-2 px-2 rounded-xl text-sm font-semibold hover:bg-blue-300" onClick={joinOnlineClass}>Join Class</button>
        </div>
        <div className="mt-4">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600">Renew Course </button>
        </div>
    </div>
</div>
  )
}

export default MyCourseCard
