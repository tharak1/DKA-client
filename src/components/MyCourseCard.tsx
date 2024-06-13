import React from 'react'
import { CourseModel, MyCourseModal } from '../models/CourseModel';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase_config';
import { QuestionPaper } from '../models/ExamModel';
interface CourseCardProps {
    courseDetails: CourseModel;
    userRegisteredCourseDetails?:MyCourseModal;
}

const MyCourseCard:React.FC<CourseCardProps> = ({courseDetails,userRegisteredCourseDetails}) => {
    const joinOnlineClass = async() =>{
        const onlineClass = await getDoc(doc(db,'onlineClass',courseDetails.courseName!));
        window.open(onlineClass.data()!.classLink, '_blank');
    }

    const writeExam = async()=>{
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

        window.open(`http://localhost:5175/write_exam?id=${fetchedUser.id}`);

        console.log(fetchedUser.id);
        

    }
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
    <img className="w-full h-64 object-cover object-center" src={courseDetails.image} alt="Kuchipudi Dance"/>
    <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{courseDetails.courseName}</h2>
        <p className="text-gray-600"><span className="font-semibold">Classes mode:</span> {userRegisteredCourseDetails?.courseType}</p>
        <p className="text-gray-600"><span className="font-semibold">Class Timings:</span><span className="font-semibold">{userRegisteredCourseDetails?.courseSession}</span></p>
        <div className="mt-2 grid grid-cols-3 gap-2">
            <button className="bg-blue-200 text-gray-800 py-2 px-2 rounded-xl text-sm font-semibold hover:bg-blue-300" onClick={writeExam}>Write Exam</button>
            <button className="bg-blue-200 text-gray-800 py-2 px-2 rounded-xl text-sm font-semibold hover:bg-blue-300">View Marks</button>
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
