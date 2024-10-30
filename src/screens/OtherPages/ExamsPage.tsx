import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { fetchUser, GetUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';
import { QuestionPaper } from '../../models/ExamModel';
import { db } from '../../firebase_config';
import Navbar from '../LandingPage/Navbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WriteExamCard from '../../components/WriteExamCard';
import { useAppDispatch } from '../../redux/Store';
import { MyCourseModal } from '../../models/CourseModel';

const ExamsPage:React.FC = () => {
    const curUser = useSelector(GetUser) as UserModel;
    const [qpLoading,setQpLoading] = useState<boolean>(false);
    const [NQP,setNQP] = useState<QuestionPaper[]>([]);
    const [AQP,setAQP] = useState<QuestionPaper[]>([]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(fetchUser(curUser.id));
    }, []);

    function isDateTimeInRange(startDate: string, startTime: string, endDate: string, endTime: string): boolean {
        // Parse dates and times
        const startDateTime = new Date(`${startDate}T${startTime}`);
        const endDateTime = new Date(`${endDate}T${endTime}`);
        const dateTime = new Date();
    
        // Check if dateTime is within the range of startDateTime and endDateTime
        return dateTime > startDateTime && dateTime < endDateTime;
    }

    const getQp = async () => {
        setQpLoading(true);
    
        const queryans = await getDocs(collection(db, "Question-Paper"));

        let notAttemptedExams: QuestionPaper[] = [];
        let attemptedExams: QuestionPaper[] = [];

        const regcoursesId = curUser.registeredCourses.map(course => course.courseId);
        
        for (const doc1 of queryans.docs) {
            const fetchedQP = doc1.data() as QuestionPaper;

            if( regcoursesId.includes( fetchedQP.courseId! ) || ( isDateTimeInRange(fetchedQP.startDate, fetchedQP.startTime, fetchedQP.endDate, fetchedQP.endTime) || curUser.registeredCourses.find((c:MyCourseModal) => c.courseName === fetchedQP.course!)?.onlineExamExempt === true) ){
                const isStudentSelected = fetchedQP.for === "Select Students" 
                    ? fetchedQP.selectedStudents?.includes(curUser.id) 
                    : true; 

                const resultsDoc = await getDoc(doc(db, "Online-exam-results", fetchedQP.id!));
                const resultsData = resultsDoc.data();
            
                if (resultsData) {
                    const studentsArr = resultsData.students;
            
                    const isStudentPresent = studentsArr.some((x: any) => x.studentId === curUser.id);
            
                    if (isStudentPresent) {
                        attemptedExams.push(fetchedQP);
                    } else if (isStudentSelected) {

                        notAttemptedExams.push(fetchedQP);
                    }
                } else {

                    if (isStudentSelected) {
                        notAttemptedExams.push(fetchedQP);
                    }
                }
            }
        }
        
        console.log("Not Attempted Exams:", notAttemptedExams);
        console.log("Attempted Exams:", attemptedExams);

        setNQP(notAttemptedExams);
        setAQP(attemptedExams);
    
        setQpLoading(false);
    
    };

    useEffect(() => {
        getQp();
    },[]);

  return (
    <div>
        <Navbar />
        <div className='pt-20 px-20 max-sm:px-4 w-full min-h-screen bg-slate-100 gap-3 overflow-auto'>
            <div className=' w-full flex flex-col items-start mb-4'>
            <h1 className='text-2xl font-bold '>Exams</h1>
            <p>Here are your details about the Exams</p>
            </div>

            {
                qpLoading?(
                    <div className='w-full h-screen flex justify-center items-center'>
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>
                ):
                (
                    <Tabs defaultIndex={0} className=" " onSelect={index => setSelectedIndex(index)} >
                        <TabList className="md:flex md:space-x-8  grid grid-cols-2 text-center gap-2   md:justify-start mb-10 ">
                            <Tab >
                                <button type="button" className={`${selectedIndex === 0 ? "text-slate-900 font-medium text-xl text-center border-b-2 border-slate-700 pb-2": "font-medium rounded-lg text-xl text-center text-slate-600"}`}>
                                    <div className="flex gap-2 items-center">
                                        Non attemped
                                    </div> 
                                </button>
                            </Tab>
                            <Tab >
                                <button type="button" className={`${selectedIndex === 1 ? "text-slate-900 font-medium text-xl text-center border-b-2 border-slate-700 pb-2": "font-medium rounded-lg text-xl text-center text-slate-600"}  `}>
                                    <div className="flex gap-2 items-center">
                                        Attempted
                                    </div>
                                </button>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div className='results container mx-auto grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full'>
                                {
                                    NQP.length === 0 ?(
                                        <div className='max-sm:col-span-1 md:col-span-2 lg:col-span-3 w-full h-full flex justify-center items-center'>
                                            <h2>No Exams</h2>
                                        </div>
                                    ):
                                    (                  
                                        NQP.map((qp:QuestionPaper)=>(
                                            <WriteExamCard qp={qp} key={qp.id}/>
                                        ))
                                    )
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='results container mx-auto grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full'>
                        
                                {
                                    AQP.length === 0 ?(
                                        <div className='max-sm:col-span-1 md:col-span-2 lg:col-span-3 w-full h-full flex justify-center items-center'>
                                            <h2>No Exams</h2>
                                        </div>
                                    ):(
                                        AQP.map((qp:QuestionPaper)=>(
                                            <div
                                                key={qp.id}
                                                className="bg-white p-6 shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
                                            >
                                                <h2 className="text-xl font-semibold mb-2">{qp.course} - ({qp.examType === "create question paper"?"MCQ":"Written"})</h2>
                                                <p className="text-gray-600">Start Date / time : {qp.startDate} / {qp.startTime}</p>
                                                <p className="text-gray-600">End Date / time : {qp.endDate} / {qp.endTime}</p>
                                                <p className="text-gray-600">Max Marks : {qp.totalMarks}</p>
                                                {
                                                    qp.for === 'Select Students' &&(
                                                        <p className="text-gray-600">Level : {qp.level}</p>
                                                    )
                                                }
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </TabPanel>

                    </Tabs>
                )
            }
        </div>
    </div>
  )
}

export default ExamsPage
