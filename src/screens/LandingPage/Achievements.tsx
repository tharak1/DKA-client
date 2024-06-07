import React, { useState } from 'react';

const Achievements: React.FC = () => {
  const achievements = [
    { image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg', text: 'Achievement 1' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8_3-MgG5TStl68AjRkw1sELVgOPGbAYPSR3LnbJcSQ&s', text: 'Achievement 2' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfLd1aNF0_FX1BFjIGUuiHqED0HOoVGIFDsUowkvoag&s', text: 'Achievement 3' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UUlrj-Ia7zK6G4_QFYBjG7x-farJlT30F72BlL3CRw&s', text: 'Achievement 4' },
    { image: 'https://i.ytimg.com/vi/7whhcFfz51Q/maxresdefault.jpg', text: 'Achievement 5' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
      <div className="relative flex justify-center items-center h-[250px]">
        <div className="flex space-x-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex !== null && (
                <>
                  {hoveredIndex - 1 === index && (
                    <div className="absolute top-20 left-0 w-32 h-32 bg-cyan-500 opacity-60 z-0"></div>
                  )}
                  {hoveredIndex + 1 === index && (
                    <div className="absolute -top-20 left-0 w-32 h-32 bg-pink-500 opacity-60 z-0"></div>
                  )}
                </>
              )}
              <img
                src={achievement.image}
                alt={`Achievement ${index + 1}`}
                className={`w-32 h-32 cursor-pointer transition-transform duration-300 ${
                  hoveredIndex === index ? 'transform scale-150 z-10' : 'z-10'
                }`}
              />
              {hoveredIndex === index && (
                <div className="absolute top-[140px] left-1/2 transform -translate-x-1/2 mt-2 text-center">
                  <p>{achievement.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;



// import React from 'react';

// const Courses: React.FC = () => {
//   const images = [
//     { url: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg', caption: 'GUITAR' },
//     { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8_3-MgG5TStl68AjRkw1sELVgOPGbAYPSR3LnbJcSQ&s', caption: 'TUITIONS' },
//     { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfLd1aNF0_FX1BFjIGUuiHqED0HOoVGIFDsUowkvoag&s', caption: 'KUCHIPUDI' },
//     { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UUlrj-Ia7zK6G4_QFYBjG7x-farJlT30F72BlL3CRw&s', caption: 'KEYBOARD' },
//     { url: 'https://i.ytimg.com/vi/7whhcFfz51Q/maxresdefault.jpg', caption: 'PAINTING' },
//     { url: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg', caption: 'GUITAR' },
//     { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8_3-MgG5TStl68AjRkw1sELVgOPGbAYPSR3LnbJcSQ&s', caption: 'TUITIONS' },
//     { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfLd1aNF0_FX1BFjIGUuiHqED0HOoVGIFDsUowkvoag&s', caption: 'KUCHIPUDI' },
//     { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UUlrj-Ia7zK6G4_QFYBjG7x-farJlT30F72BlL3CRw&s', caption: 'KEYBOARD' },
//     { url: 'https://i.ytimg.com/vi/7whhcFfz51Q/maxresdefault.jpg', caption: 'PAINTING' },
//   ];

//   return (
//     <section id="courses" className="p-10 text-center">
//       <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
//       <p className="mb-4">Explore our variety of courses designed to help you succeed.</p>
      
//       <div className="flex justify-center flex-wrap">
//         {images.map((image, index) => (
//           <div key={index} className="relative mx-2">
//             <img
//               src={image.url}
//               alt={image.caption}
//               className="border-2 border-gray-300 rounded-lg hover:scale-105 transition-transform duration-300"
//               style={{ height: '200px', objectFit: 'cover' }}
//             />
//             <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
//               {image.caption}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Courses;


// // import React, { useState } from 'react';

// // const Achievements: React.FC = () => {
// //   const achievements = [
// //     { image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg', text: 'Achievement 1' },
// //     { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8_3-MgG5TStl68AjRkw1sELVgOPGbAYPSR3LnbJcSQ&s', text: 'Achievement 2' },
// //     { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfLd1aNF0_FX1BFjIGUuiHqED0HOoVGIFDsUowkvoag&s', text: 'Achievement 3' },
// //     { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UUlrj-Ia7zK6G4_QFYBjG7x-farJlT30F72BlL3CRw&s', text: 'Achievement 4' },
// //     { image: 'https://i.ytimg.com/vi/7whhcFfz51Q/maxresdefault.jpg', text: 'Achievement 5' },
// //   ];

// //   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

// //   return (
// //     <div className="flex flex-col justify-center items-center">
// //       <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
// //       <div className="relative flex justify-center items-center h-[250px]">
// //         <div className="flex space-x-4">
// //           {achievements.map((achievement, index) => (
// //             <div
// //               key={index}
// //               className="relative"
// //               onMouseEnter={() => setHoveredIndex(index)}
// //               onMouseLeave={() => setHoveredIndex(null)}
// //             >
// //               {hoveredIndex !== null && (
// //                 <>
// //                   {hoveredIndex - 1 === index && (
// //                     <div className="absolute top-20 left-0 w-32 h-32 bg-cyan-500 opacity-60 z-0"></div>
// //                   )}
// //                   {hoveredIndex + 1 === index && (
// //                     <div className="absolute -top-20 left-0 w-32 h-32 bg-pink-500 opacity-60 z-0"></div>
// //                   )}
// //                 </>
// //               )}
// //               <img
// //                 src={achievement.image}
// //                 alt={`Achievement ${index + 1}`}
// //                 className={`w-32 h-32 cursor-pointer transition-transform duration-300 ${
// //                   hoveredIndex === index ? 'transform scale-150 z-10' : 'z-10'
// //                 }`}
// //               />
// //               {hoveredIndex === index && (
// //                 <div className="absolute top-[140px] left-1/2 transform -translate-x-1/2 mt-2 text-center">
// //                   <p>{achievement.text}</p>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Achievements;


