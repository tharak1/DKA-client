import React, { useState } from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Tharak Reddy',
      image: 'https://via.placeholder.com/100x100',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'sravana Jyothi',
      image: 'https://via.placeholder.com/100x100',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Chaitanya Varma',
      image: 'https://via.placeholder.com/100x100',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      name: 'Tharak Reddy',
      image: 'https://via.placeholder.com/100x100',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'sravana Jyothi',
      image: 'https://via.placeholder.com/100x100',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      name: 'Chaitanya Varma',
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
    <section id="dummy" className="pl-4 py-4 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-wrap">
        {/* Left Section */}
        <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0 md:mt-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
          <span className="font-poppins bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
            what our <br /> Customers say
          </span>
        </h1>
          <p className="text-xl md:text-2xl font-semibold text-center md:text-left md:w-2/3">
            Hear from our satisfied customers who have experienced our excellent services.
          </p>
          <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-blue-100 to-red-100 text-lg font-bold py-4 px-5 mt-8 cursor-pointer block m-auto md:ml-20">Join now</button>
        </div>
        
        {/* Right Section */}
        <div className="w-full md:w-1/2 pr-4 overflow-y-scroll scrollbar"style={{ maxHeight: '440px' }}>
        {reviews.map((review,index) => ( 
           <div
            key={index}
            className={`relative mb-9 p-3 bg-white ml-[60px] border-l-8 border border-neutral-200  ${hoveredIndex === index ? 'transform -translate-x-12 border-l-8 border-l-pink-400': ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            > 
            {/* <div
              key={index}
              className={`flex flex-row ${hoveredIndex === index ? 'transform -translate-x-12': ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            > 
            <div className={`h-full w-3  ${hoveredIndex === index ? 'bg-pink-400' : 'bg-neutral-200'}`}></div> */} 

            <div className="flex items-center">
            <div>
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mr-5"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{review.name}</h3>
              <p className="text-gray-600">{review.text}</p>
            </div>
          </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

// import React, { useState } from 'react';

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

//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const handleMouseEnter = (index: number) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <section id="dummy" className="p-4 md:p-10">
//       <div className="max-w-7xl mx-auto flex flex-wrap">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0">
//           <h2 className="text-3xl md:text-6xl font-bold mb-4 text-center md:text-left">
//             What Our <br />Customers Say
//           </h2>
//           <p className="text-xl md:text-2xl text-center md:text-left">
//             Hear from our satisfied customers who have experienced our excellent service.
//           </p>
//         </div>
        
//         {/* Right Section */}
//         <div className="w-full md:w-1/3 pr-4 overflow-y-scroll scrollbar-cyan" style={{ maxHeight: '600px' }}>
//           {/* <div className="space-y-4 relative"> */}

//             {reviews.map((review, index) => (
//               <div
//                 key={index}
//                 className={`transition-transform duration-300 ${hoveredIndex === index ? 'z-[10]' : 'z-0'}`}
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {/* Color strip */}
//                 <div className={`bg-${hoveredIndex === index ? 'purple' : 'gray'} h-full w-2`}></div>

//                 <div
//                   className={`flex items-center border-2 border-black-300 rounded-lg p-4 md:p-6 transition-transform duration-300 ${
//                     hoveredIndex === index ? 'transform -translate-x-4 md:-translate-x-8' : ''
//                   }`}
//                   style={{ paddingRight: hoveredIndex === index ? '20px' : '' }}
//                 >
//                   <img
//                     src={review.image}
//                     alt={`Customer ${index + 1}`}
//                     className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full mx-4"
//                   />
//                   <p className="text-sm md:text-base text-left">{review.text}</p>
//                 </div>
//               </div>
//             ))}

//           {/* </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Reviews;
