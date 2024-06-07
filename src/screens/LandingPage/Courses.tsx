// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
//     <section id="courses" className="p-10  text-center">
//       <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
//       <p className="mb-4">Explore our variety of courses designed to help you succeed.</p>
      
//       <Carousel 
//         showArrows={true} 
//         showThumbs={false} 
//         infiniteLoop={true} 
//         autoPlay={true} 
//         className="mt-8"
//         centerMode={true}
//         centerSlidePercentage={20}
//         showIndicators={false}
//         dynamicHeight={false}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="relative mx-2">
//             <img
//               src={image.url}
//               alt={image.caption}
//               className="border-2 border-gray-300 rounded-lg transition-transform duration-300 hover:scale-105"
//               style={{ height: '200px', objectFit: 'cover' }}
//             />
//             <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg transition-opacity duration-300 opacity-0 hover:opacity-100">
//               {image.caption}
//             </p>
//           </div>
//         ))}
//       </Carousel>
//     </section>
//   );
// }

// export default Courses;

import React from 'react';
// nrml images one
const Courses: React.FC = () => {
  const images = [
    { url: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg', caption: 'GUITAR' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8_3-MgG5TStl68AjRkw1sELVgOPGbAYPSR3LnbJcSQ&s', caption: 'TUITIONS' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfLd1aNF0_FX1BFjIGUuiHqED0HOoVGIFDsUowkvoag&s', caption: 'KUCHIPUDI' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UUlrj-Ia7zK6G4_QFYBjG7x-farJlT30F72BlL3CRw&s', caption: 'KEYBOARD' },
    { url: 'https://i.ytimg.com/vi/7whhcFfz51Q/maxresdefault.jpg', caption: 'PAINTING' },
    { url: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg', caption: 'GUITAR' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8_3-MgG5TStl68AjRkw1sELVgOPGbAYPSR3LnbJcSQ&s', caption: 'TUITIONS' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfLd1aNF0_FX1BFjIGUuiHqED0HOoVGIFDsUowkvoag&s', caption: 'KUCHIPUDI' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UUlrj-Ia7zK6G4_QFYBjG7x-farJlT30F72BlL3CRw&s', caption: 'KEYBOARD' },
    { url: 'https://i.ytimg.com/vi/7whhcFfz51Q/maxresdefault.jpg', caption: 'PAINTING' },
  ];

  return (
    <section id="courses" className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
      <p className="mb-4">Explore our variety of courses designed to help you succeed.</p>
      
      <div className="flex justify-center flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="relative mx-2">
            <img
              src={image.url}
              alt={image.caption}
              className="border-2 border-gray-300 rounded-lg hover:scale-105 transition-transform duration-300"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              {image.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;





// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
//     <section id="courses" className="p-10  text-center">
//       <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
//       <p className="mb-4">Explore our variety of courses designed to help you succeed.</p>
      
//       <Carousel 
//         showArrows={true} 
//         showThumbs={false} 
//         infiniteLoop={true} 
//         autoPlay={true} 
//         className="mt-8"
//         centerMode={true}
//         centerSlidePercentage={20}
//         showIndicators={false}
//         dynamicHeight={false}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="relative mx-2">
//             <img
//               src={image.url}
//               alt={image.caption}
//               className="border-2 border-gray-300 rounded-lg transform transition-transform duration-20 hover:scale-105"
//               style={{ height: '200px', objectFit: 'cover' }}
//             />
//             <p className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
//               {image.caption}
//             </p>
//           </div>
//         ))}
//       </Carousel>
//     </section>
//   );
// }

// export default Courses;


