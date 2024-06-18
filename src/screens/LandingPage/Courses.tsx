import React, { useEffect, useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../index.css'

const Courses: React.FC = () => {
  const images = [
    { url: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg', caption: 'GUITAR', labelVertical: true },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8_3-MgG5TStl68AjRkw1sELVgOPGbAYPSR3LnbJcSQ&s', caption: 'TUITIONS', labelVertical: true },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfLd1aNF0_FX1BFjIGUuiHqED0HOoVGIFDsUowkvoag&s', caption: 'KUCHIPUDI' , labelVertical: true},
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UUlrj-Ia7zK6G4_QFYBjG7x-farJlT30F72BlL3CRw&s', caption: 'KEYBOARD', labelVertical: true },
    { url: 'https://i.ytimg.com/vi/7whhcFfz51Q/maxresdefault.jpg', caption: 'PAINTING', labelVertical: true },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const updateCarousel = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.clientWidth / 5; // Display 3 items at a time
      const offset = -currentIndex * itemWidth;
      carouselRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => window.removeEventListener('resize', updateCarousel);
  }, [currentIndex]);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < images.length - 3) { // Adjust based on number of items displayed
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="carousel relative overflow-hidden">
        <div ref={carouselRef} className="carousel-inner flex transition-transform duration-700 ease-in-out">
          {images.map((image, index) => (
            <div key={index} className="carousel-item flex-shrink-0 w-1/3 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <img src={image.url} alt={image.caption} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
                <span className={`mt-4 text-lg font-semibold ${image.labelVertical ? 'vertical-label' : ''}`}>
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex justify-between items-center">
          <button onClick={prevSlide} className="prev p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
            &lt;
          </button>
          <button onClick={nextSlide} className="next p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
