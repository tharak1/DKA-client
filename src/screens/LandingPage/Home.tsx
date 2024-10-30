import React from 'react';
import { useNavigate } from 'react-router-dom';

interface text {
  smallQuote:string;
  quote:string;
  aboutUs:string;
  statsText:string;
  StudentsParticipatedInNationals:string;
  PassPercentage:string;
  YearsOfExperience:string;
}

interface HomeProps{
  data:text;
}

const Home: React.FC<HomeProps> = ({data}) => {
  const navigate = useNavigate();

  return (
    <header id="home" className="w-full h-screen max-sm:h-[85vh] pt-20 max-sm:pt-28 bg-rainbow bg-no-repeat bg-auto max-sm:bg-cover bg-right relative text-left  max-sm:px-4 max-sm:bg-s-rainbow">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 sm:mb-12">
          <span className="font-poppins  bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
            Divya Kala Academy
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 sm:mb-14  whitespace-pre-line">
          {data.smallQuote}
        </h2>
        <p className="mb-6 sm:mb-12 text-base sm:text-lg font-semibold max-sm:font-normal p-0 w-1/2 max-sm:w-full">
          {data.quote}
        </p>

        <div className="max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-10">
          <button className="relative bg-gradient-to-r from-pink-500 to-green-500 text-white py-2 px-4 rounded z-5 max-sm:text-xl text-lg" onClick={()=>{navigate("/course?category=all")}} >
            Explore Now
            <span className="absolute left-0 bottom-0 w-full h-0.5 "></span>
          </button>
        </div>


      </div>
    </header>
  );
}

export default Home;

