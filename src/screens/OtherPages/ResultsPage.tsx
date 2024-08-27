import React, { useEffect, useState } from 'react';
import Navbar from '../LandingPage/Navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';
import { useSelector } from 'react-redux';
import { GetUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';

const ResultsPage: React.FC = () => {
const user = useSelector(GetUser) as UserModel;


  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
  
    fetchData();


  }, [user.id]);

  const [examDetails, setExamDetails] = useState<ExamDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);




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
  setLoading(false);
  return studentResults.filter(exam => exam.students.length > 0);
};




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

        <div className='results container mx-auto grid grid-cols-1 max-md:grid-cols-2 sm:grid-cols-3 gap-6 w-full h-full'>
          {

            loading ? 
(              <div className='flex w-full col-span-3 justify-center items-center'>
                  <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
              </div>)
              : 
              examDetails.length === 0 ? 
                <div className='flex w-full h-full justify-center items-center text-center col-span-3'>
                    <h2>No courses available</h2>
                </div>
              :     
              examDetails.map((obj:ExamDetails) => (
                <div
                  key={obj.id}
                  className="bg-white p-6 shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <h2 className="text-xl font-semibold mb-2">{obj.course} - ({obj.examType === "create question paper"?"MCQ":"Written"})</h2>
                  <p className="text-gray-600">Start Date / time : {obj.startDate} / {obj.startTime}</p>
                  <p className="text-gray-600">End Date / time : {obj.endDate} / {obj.endTime}</p>
                  <p className="text-gray-600">Marks Obtained : {obj.students[0].marksObtained} / {obj.totalMarks}</p>
                </div>
              ))
            }
        </div>
      </div>
    </>
  );
}

export default ResultsPage;
