import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="  p-10 bg-teal-300 w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">About DKA</h2>
          <p className="mb-4 text-black font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="text-black font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-3 gap-4">
          <div className=" p-4 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">550</span>
            <p>Students</p>
          </div>
          <div className=" p-4 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">50</span>
            <p>Tutors</p>
          </div>
          <div className=" p-4 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">110</span>
            <p>International Students</p>
          </div>
          <div className=" p-4 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">10</span>
            <p>Years Of Expereience</p>
          </div>
          <div className=" p-4 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">98%</span>
            <p>Pass Percentage</p>
          </div>
          <div className=" p-4 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">155</span>
            <p>Students participated in Nationals</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


// import React from 'react';

// const About: React.FC = () => {
//   return (
//     <section id="about" className="p-10 bg-blue-500 w-full">
//       <div className="flex ">
//         <div className="w-1/2 pr-4">
//           <h2 className="text-2xl font-bold mb-4 text-white">About DKA</h2>
//           <p className="mb-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//           <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//         </div>
//         <div className="w-1/2 grid grid-cols-2 grid-rows-3 gap-4">
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">1</span>
//             <p>Text for the first box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">2</span>
//             <p>Text for the second box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">3</span>
//             <p>Text for the third box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">4</span>
//             <p>Text for the fourth box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">5</span>
//             <p>Text for the fifth box</p>
//           </div>
//           <div className="bg-white p-4 flex items-center justify-center">
//             <span className="text-4xl font-bold">6</span>
//             <p>Text for the sixth box</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
