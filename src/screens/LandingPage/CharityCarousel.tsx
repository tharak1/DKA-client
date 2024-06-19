import { useState } from "react";

const CharityCarousel: React.FC = () => {
    const charityItems = [
      {
        image: 'https://www.shutterstock.com/image-photo/abuja-nigeria-may-1-2023-260nw-2307221017.jpg', // replace with actual image URL
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ',
      },
     {
      image:'https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvb3IlMjBjaGlsZHxlbnwwfHwwfHx8MA%3D%3D',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... '
     },
     {
      image:'https://www.shutterstock.com/image-photo/nagpur-maharashtra-india-23-february-260nw-1247281663.jpg', // replace with actual image URL
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ',
    },
      // Add more items as needed
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + charityItems.length) % charityItems.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % charityItems.length);
    };
  
    return (
      <div className="flex flex-col justify-center items-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Charity</h2>
        <div className="relative flex justify-center items-center h-[400px] w-[1450px] bg-gray-100">
          <div className="absolute left-0 p-2" onClick={handlePrev}>{'<'}</div>
          <div className="absolute right-0 p-2" onClick={handleNext}>{'>'}</div>
          <div className="flex justify-center absolute bottom-0 w-full">
            <button className="p-2">{`<`}</button>
            <button className="p-2">{`>`}</button>
          </div>
          <div className="flex justify-between items-center bg-white h-[380px] w-[1400px] p-4 rounded-lg shadow-lg relative">
            <div className="w-full">
              <p>{charityItems[currentIndex].description}</p>
            </div>
            <div className="w-[240px] h-[360px] absolute top-0 right-20 bottom-0 left-[1150px] z-0 mt-[10px] mb-[5px]">
              {/* Cyan-colored container */}
              <div className="absolute bg-cyan-300 h-full w-full rounded-lg opacity-60" />
            </div>
            <div className="w-full relative">
              <img
                src={charityItems[currentIndex].image}
                alt="Charity Image"
                className="ml-[250px] w-1/2 h-1/2 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default CharityCarousel;