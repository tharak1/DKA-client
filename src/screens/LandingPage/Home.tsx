import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header id="home" className="w-full h-screen pt-20 bg-rainbow bg-no-repeat bg-auto  relative text-left bg-right">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="font-poppins  bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
            Divya Kala Academy
          </span>
        </h1>
        <h2 className="text-xl md:text-4xl font-semibold mb-8 whitespace-pre-line">
          {`It's a Big World\nOut There, Go\nExplore.`}
        </h2>
        <p className="mb-6 text-lg font-semibold p-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Proin vel ultricies nulla, a fermentum ex. <br />
          Integer vitae orci sit amet erat vehicula euismod. <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
          Suspendisse potenti. <br />
          Curabitur vel sem id quam volutpat elementum. <br />
          Mauris a nisl nec nisl ullamcorper efficitur.
        </p>

        <button className="relative bg-gradient-to-r from-pink-500 to-green-500 text-white py-2 px-4 rounded z-5" onClick={()=>{navigate("/course?category=all")}} >
          Explore Now
          <span className="absolute left-0 bottom-0 w-full h-0.5 "></span>
        </button>


      </div>
    </header>
  );
}

export default Home;

