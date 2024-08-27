import React from 'react';

const ResultsPage: React.FC = () => {
  const data = [
    { title: 'Test 1', startDate: '2024-08-01', endDate: '2024-08-05', marks: 85 },
    { title: 'Test 2', startDate: '2024-08-06', endDate: '2024-08-10', marks: 90 },
    { title: 'Test 3', startDate: '2024-08-11', endDate: '2024-08-15', marks: 88 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center my-4">Results Page</h1>
      <div className='results container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        {data.map((test, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{test.title}</h2>
            <p className="text-gray-600">Start Date: {test.startDate}</p>
            <p className="text-gray-600">End Date: {test.endDate}</p>
            <p className="text-gray-600">Marks Obtained: {test.marks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
