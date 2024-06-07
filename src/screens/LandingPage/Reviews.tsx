import React, { useState } from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      image: 'https://via.placeholder.com/100x100',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: 'https://via.placeholder.com/100x100',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      image: 'https://via.placeholder.com/100x100',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      image: 'https://via.placeholder.com/100x100',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: 'https://via.placeholder.com/100x100',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      image: 'https://via.placeholder.com/100x100',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="dummy" className="p-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap">
        {/* Left Section */}
        <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0">
          <h2 className="text-6xl font-bold mb-4 text-center md:text-left">What Our <br></br>Customers Say</h2>
          <p className="text-2xl text-center md:text-left">Hear from our satisfied customers who have experienced our excellent service.Hear from our satisfied customers who have experienced our excellent service.Hear from our satisfied customers who have experienced our excellent service.Hear from our satisfied customers who have experienced our excellent service.Hear from our satisfied customers who have experienced our excellent service.Hear from our satisfied customers who have experienced our excellent service.</p>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-1/2 overflow-y-auto h-96 pr-4">
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`flex items-center border-2 border-black-300 rounded-lg p-4 transition-transform duration-300 ${
                    hoveredIndex === index ? 'transform -translate-x-20' : ''
                  }`}
                >
                  <img
                    src={review.image}
                    alt={`Customer ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-full mx-4"
                  />
                  <p className="text-left">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;


// import React from 'react';

// const Reviews: React.FC = () => {
//   const reviews = [
//     {
//       image: 'https://via.placeholder.com/100x100',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//     },
//     {
//       image: 'https://via.placeholder.com/100x100',
//       text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
//     },
//     {
//       image: 'https://via.placeholder.com/100x100',
//       text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
//     },
//     {
//       image: 'https://via.placeholder.com/100x100',
//       text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     },
//     {
//       image: 'https://via.placeholder.com/100x100',
//       text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
//     },
//     {
//       image: 'https://via.placeholder.com/100x100',
//       text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
//     },
//   ];

//   return (
//     <section id="dummy" className="p-10 bg-white">
//       <div className="max-w-7xl mx-auto flex flex-wrap">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0">
//           <h2 className="text-2xl font-bold mb-4 text-center md:text-left">What Our Customers Say</h2>
//           <p className="text-center md:text-left">Hear from our satisfied customers who have experienced our excellent service.</p>
//         </div>
        
//         {/* Right Section */}
//         <div className="w-full md:w-1/2 overflow-y-auto h-96 pr-4 transition-transform duration-300 hover:transform hover:-translate-x-4">
//           <div className="space-y-4">
//             {reviews.map((review, index) => (
//               <div key={index} className="flex items-center border-2 border-gray-300 rounded-lg p-4">
//                 <img
//                   src={review.image}
//                   alt={`Customer ${index + 1}`}
//                   className="w-20 h-20 object-cover rounded-full mx-4"
//                 />
//                 <p className="text-left">{review.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Reviews;



