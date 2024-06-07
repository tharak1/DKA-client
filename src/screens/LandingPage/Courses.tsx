import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Courses: React.FC = () => {
  const images = [
    { url: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg', caption: 'GUITAR' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8_3-MgG5TStl68AjRkw1sELVgOPGbAYPSR3LnbJcSQ&s', caption: 'TUITIONS' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfLd1aNF0_FX1BFjIGUuiHqED0HOoVGIFDsUowkvoag&s', caption: 'KUCHIPUDI' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UUlrj-Ia7zK6G4_QFYBjG7x-farJlT30F72BlL3CRw&s', caption: 'KEYBOARD' },
    { url: 'https://i.ytimg.com/vi/7whhcFfz51Q/maxresdefault.jpg', caption: 'PAINTING' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="courses" className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
      <p className="mb-4">Explore our variety of courses designed to help you succeed.</p>
      
      <Carousel 
        showArrows={true} 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        className="mt-8"
        centerMode={true}
        centerSlidePercentage={20}
        showIndicators={false}
        dynamicHeight={false}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative mx-0.5 group overflow-hidden" 
            style={{ height: '300px', width: '150px' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.url}
              alt={image.caption}
              className={`w-full h-full object-cover transition-all duration-300 ${
                hoveredIndex === index ? 'transform scale-110 h-[350px] w-[300px]' : ''
              }`}
              style={{ borderRadius: '15px' }}
            />
            <div className="absolute inset-0 flex items-center justify-end p-2 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <p className="text-white">{image.caption}</p>
            </div>
          </div>
        ))}
      </Carousel>
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
//   ];

//   return (
//     <section id="courses" className="p-10 text-center">
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
//           <div key={index} className="relative mx-0.5 group overflow-hidden" style={{ height: '300px', width: '150px' }}>
//             <img
//               src={image.url}
//               alt={image.caption}
//               className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
//               style={{ borderRadius: '15px' }}
//             />
//             <div className="absolute inset-0 flex items-center justify-end p-2 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//               <p className="text-white">{image.caption}</p>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </section>
//   );
// }

// export default Courses;
