import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header id="home" className="w-full h-screen max-sm:h-[80vh] pt-20 max-sm:pt-28 bg-rainbow bg-no-repeat bg-auto bg-right relative text-left max-sm:bg-contain max-sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="font-poppins  bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
            Divya Kala Academy
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 whitespace-pre-line">
          {`It's a Big World\nOut There, Go\nExplore.`}
        </h2>
        <p className="mb-6 text-base font-semibold p-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Proin vel ultricies nulla, a fermentum ex. <br />
          Integer vitae orci sit amet erat vehicula euismod. <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
          Suspendisse potenti. <br />
          Curabitur vel sem id quam volutpat elementum. <br />
          Mauris a nisl nec nisl ullamcorper efficitur.
        </p>

<div className="max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-10">
<button className="relative bg-gradient-to-r from-pink-500 to-green-500 text-white py-2 px-4 rounded z-5 max-sm:text-xl" onClick={()=>{navigate("/course?category=all")}} >
          Explore Now
          <span className="absolute left-0 bottom-0 w-full h-0.5 "></span>
        </button>
</div>


      </div>
    </header>
  );
}

export default Home;

