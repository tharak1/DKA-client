import React, { useEffect, useState } from 'react';
import Navbar from '../LandingPage/Navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';
import { useSelector } from 'react-redux';
import { GetUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';

const ResultsPage: React.FC = () => {

  useEffect(()=>{
    getData();
  },[]);

  const [examDetails, setExamDetails] = useState<ExamDetails[]>([]);



const fetchAllOnlineExamResults = async (): Promise<ExamDetails[]> => {
  const docRef = collection(db, "Online-exam-results");
  const resultsSnap = await getDocs(docRef);

  const onlineExamResults: ExamDetails[] = resultsSnap.docs.map((doc) => {
    const data = doc.data();
    const students: StudentPerformance[] = data.students.map((studentData: any) => {
      if (data.examType === "create question paper") {
        return {
          correctAnswers: studentData.correctAnswers,
          incorrectAnswers: studentData.incorrectAnswers,
          marksObtained: studentData.marksObtained,
          studentId: studentData.studentId,
          studentName: studentData.studentName,
          unanswered: studentData.unanswered
        } as CreateQuestionPaperPerformance;
      } else if (data.examType === "upload question Paper") {
        return {
          evaluated: studentData.evaluated,
          marksObtained: studentData.marksObtained,
          studentId: studentData.studentId,
          studentName: studentData.studentName,
          uploadedPagesUrl: studentData.uploadedPagesUrl
        } as UploadQuestionPaperPerformance;
      }
      return {} as StudentPerformance;
    });

    return {
      id: doc.id,
      course: data.course,
      startDate: data.startDate,
      startTime: data.startTime,
      endDate: data.endDate,
      endTime: data.endTime,
      duration: data.duration,
      totalMarks: data.totalMarks,
      examType: data.examType,
      noOfQuestions: data.noOfQuestions,
      students: students
    } as ExamDetails;
  });

  return onlineExamResults;
};

const getResultsForStudent = async (studentId: string): Promise<ExamDetails[]> => {
  const allResults = await fetchAllOnlineExamResults();
  
  // Filter results for the specific student ID
  const studentResults = allResults.map(exam => ({
    ...exam,
    students: exam.students.filter(student => student.studentId === studentId)
  }));

  // Return exams where there are results for the student
  return studentResults.filter(exam => exam.students.length > 0);
};


const user = useSelector(GetUser) as UserModel;


const getData = () =>{

  getResultsForStudent(user.id).then(results => {
    setExamDetails(results);
    // console.log(results);
  }).catch(error => {
    console.error("Error fetching results: ", error);
  });
  

}



  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen pt-20 px-20 max-sm:px-4">

        <div className='w-full flex flex-col items-start mb-6'>
            <h1 className='text-2xl font-bold'>Online Exam Results</h1>
            <p>Here are your details about the online exam results</p>
        </div>

        <div className='results container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
          {examDetails.map((obj:ExamDetails) => (
            <div
              key={obj.id}
              className="bg-white p-6 shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{obj.course} - ({obj.examType === "create question paper"?"MCQ":"Written"})</h2>
              <p className="text-gray-600">Start Date / time : {obj.startDate} / {obj.startTime}</p>
              <p className="text-gray-600">End Date / time : {obj.endDate} / {obj.endTime}</p>
              <p className="text-gray-600">Marks Obtained : {obj.students[0].marksObtained} / {obj.totalMarks}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ResultsPage;
