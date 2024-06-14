import React from 'react'
import { MyCourseModal } from '../models/CourseModel'

interface PerformanceCardProps{
    performance:any
    course:MyCourseModal
}

const PerformanceCard:React.FC<PerformanceCardProps> = ({performance,course}) => {
    const formatLabel = (key: string): string => {
        // Convert camelCase to "Camel Case"
        const result = key.replace(/([A-Z])/g, " $1")
        return result.charAt(0).toUpperCase() + result.slice(1)
    }
  return (
    <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
            <h1 className="text-xl font-bold">{course.courseId}</h1>
            <p>from Apr 4th, 2024 to May 4th, 2024</p>
        </div>
        <span className="block w-full h-1 border-t mb-2 border-gray-300"></span>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">{performance.studentName}</h2>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className='bg-blue-300 p-2 rounded-md flex items-center'>
                        <p className="text-gray-700 text-xl">No. of classes taken</p>
                        <div className="ml-5 text-xl">38</div>
                    </div>
                    <div className='bg-blue-300 p-2 rounded-md flex items-center'>
                        <p className="text-gray-700 text-xl">No. of classes Attended</p>
                        <div className="ml-5 text-xl">38</div>
                    </div>
                    <div className='bg-blue-300 p-2 rounded-md flex items-center w-fit'>
                        <p className="text-gray-700 text-xl">Total Steps Completed</p>
                        <div className="ml-5 text-xl">70</div>
                    </div>
                </div>
                {Object.entries(performance).map(([key, value]) => (
            <>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center flex justify-start items-center px-5">
                        <p className="text-gray-700 mr-3">{formatLabel(key)}</p>
                        <div className="text-xl font-bold bg-gray-100 rounded-md px-5 py-2 border-2 border-gray-400 flex items-center justify-center">{value}</div>
                    </div>
                    <div className="text-center flex justify-start items-center px-5">
                        <p className="text-gray-700 mr-3">Mudras  </p>
                        <div className="text-xl font-bold bg-gray-100 rounded-md px-5 py-2 border-2 border-gray-400 flex items-center justify-center">10</div>
                    </div>
                    <div className="text-center flex justify-start items-center px-5">
                        <p className="text-gray-700 mr-3">Leg Movements  </p>
                        <div className="text-xl font-bold bg-gray-100 rounded-md px-5 py-2 border-2 border-gray-400 flex items-center justify-center">10</div>
                    </div>
                    <div className="text-center flex justify-start items-center px-5">
                        <p className="text-gray-700 mr-3">Hand Movements  </p>
                        <div className="text-xl font-bold bg-gray-100 rounded-md px-5 py-2 border-2 border-gray-400 flex items-center justify-center">10</div>
                    </div>
                    <div className="text-center flex justify-start items-center px-5">
                        <p className="text-gray-700 mr-3">Samyuta  </p>
                        <div className="text-xl font-bold bg-gray-100 rounded-md px-5 py-2 border-2 border-gray-400 flex items-center justify-center">10</div>
                    </div>
                    <div className="text-center flex justify-start items-center px-5">
                        <p className="text-gray-700 mr-3">Asamyuta  </p>
                        <div className="text-xl font-bold bg-gray-100 rounded-md px-5 py-2 border-2 border-gray-400 flex items-center justify-center">10</div>
                    </div>
                    <div className="text-center flex justify-start items-center px-5">
                        <p className="text-gray-700 mr-3">Eye Movements  </p>
                        <div className="text-xl font-bold bg-gray-100 rounded-md px-5 py-2 border-2 border-gray-400 flex items-center justify-center">10</div>
                    </div>
                    <div className="text-center flex justify-start items-center px-5">
                        <p className="text-gray-700 mr-3">Shlokam  </p>
                        <div className="text-xl font-bold bg-gray-100 rounded-md px-5 py-2 border-2 border-gray-400 flex items-center justify-center">10</div>
                    </div>
                </div>

                <div className="text-center flex justify-center items-center">
                    <p className="text-gray-700 mr-3">Grade  </p>
                    <div className="text-2xl font-bold bg-green-100 text-green-600 rounded-md px-5 py-2 flex items-center justify-center">A+</div>
                </div>
        </>
        ))}
        
    </div>
  )
}

export default PerformanceCard



// import React from 'react'
// import { MyCourseModal } from '../models/CourseModel'

// interface PerformanceCardProps {
//     performance: { [key: string]: any }
//     course: MyCourseModal
// }

// // Utility function to convert keys to human-readable format
// const formatLabel = (key: string): string => {
//     // Convert camelCase to "Camel Case"
//     const result = key.replace(/([A-Z])/g, " $1")
//     return result.charAt(0).toUpperCase() + result.slice(1)
// }

// const PerformanceCard: React.FC<PerformanceCardProps> = ({ performance, course }) => {
//     return (
//         <div className="bg-white shadow rounded-lg p-6">
//             <div className="mb-4">
//                 <h1 className="text-xl font-bold">{course.courseId}</h1>
//                 <p>from Apr 4th, 2024 to May 4th, 2024</p>
//             </div>
//             <span className="block w-full h-1 border-t mb-2 border-gray-300"></span>

//             {Object.entries(performance).map(([key, value]) => (
//                 key !== 'studentName' ? (
//                     <div className="flex justify-between items-center mb-4" key={key}>
//                         <div className='bg-blue-300 p-2 rounded-md flex items-center w-full'>
//                             <p className="text-gray-700 text-xl">{formatLabel(key)}</p>
//                             <div className="ml-5 text-xl">{value}</div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="mb-4" key={key}>
//                         <h2 className="text-lg font-semibold">{value}</h2>
//                     </div>
//                 )
//             ))}

//             {performance.grade && (
//                 <div className="text-center flex justify-center items-center mt-4">
//                     <p className="text-gray-700 mr-3">{formatLabel('grade')}</p>
//                     <div className="text-2xl font-bold bg-green-100 text-green-600 rounded-md px-5 py-2 flex items-center justify-center">{performance.grade}</div>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default PerformanceCard
