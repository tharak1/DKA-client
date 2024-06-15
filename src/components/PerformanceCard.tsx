import React from 'react'
import { MyCourseModal } from '../models/CourseModel'

interface PerformanceCardProps{
    performance:any
    course:MyCourseModal
}

const PerformanceCard:React.FC<PerformanceCardProps> = ({performance,course}) => {

    const formatLabel = (key: string): string => {
        const result = key.replace(/([A-Z])/g, " $1")
        return result.charAt(0).toUpperCase() + result.slice(1)
    }
    
  return (
    <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
            <h1 className="text-xl font-bold">{course.courseName}</h1>
            <p>from Apr 4th, 2024 to May 4th, 2024</p>
        </div>
        <span className="block w-full h-1 border-t mb-2 border-gray-300"></span>

        <div className="mb-4">
            <h2 className="text-lg font-semibold">{performance.studentName}</h2>
        </div>
        <div className="grid grid-cols-3 mb-4 gap-36">
            <div className='bg-blue-300 p-2 rounded-md flex items-center justify-center'>
                <p className="text-gray-700 text-xl">No. of classes taken</p>
                <div className="ml-5 text-xl">{performance.TotalClassesTaken}</div>
            </div>
            <div className='bg-blue-300 p-2 rounded-md flex items-center justify-center'>
                <p className="text-gray-700 text-xl">No. of classes Attended</p>
                <div className="ml-5 text-xl">{performance.TotalClassesAttended}</div>
            </div>
        </div>
        {Object.entries(performance).map(([key, val]) => (
            <>
                <div className="grid grid-cols-3 gap-4 mb-4">
                {(key !== 'studentName'&& key !=='studentId' && key !== 'TotalClassesAttended' && key !== 'TotalClassesTaken' && key !=='Grade') &&(
                    <div className="text-center flex justify-start items-center px-5" key={key}>
                        <p className="text-gray-700 mr-3">{formatLabel(key)}</p>
                        <div className="text-xl font-bold bg-gray-100 rounded-md px-5 py-2 border-2 border-gray-400 flex items-center justify-center">{(val as number).toString()}</div>
                    </div>
                )}

                </div>
            </>
        ))}
        <div className="text-center flex justify-center items-center">
            <p className="text-gray-700 mr-3">Grade  </p>
            <div className="text-2xl font-bold bg-green-100 text-green-600 rounded-md px-5 py-2 flex items-center justify-center">{performance.Grade.toString().toUpperCase()}</div>
        </div>
    </div>
  )
}

export default PerformanceCard


