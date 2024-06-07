import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between p-6 bg-white-100">
      <div className="flex items-center"> {/* Container for DKA */}
        <span className="text-2xl font-bold mr-6">DKA</span>
      </div>
      <div className="flex items-center space-x-4 ml-auto"> {/* Container for links */}
        <a href="#home" className="text-black text-lg">HOME</a>
        <a href="#about" className="text-black text-lg">ABOUT US</a>
        <a href="#courses" className="text-black text-lg">COURSES</a>
        <a href="#dummy" className="text-black text-lg">SECTION</a>
        <a href="#contact" className="text-black text-lg mr-10">CONTACT US</a> {/* Added mr-4 for margin */}
      </div>
      <a href="#join-now" className="text-black text-lg py-2 px-4 ">Join now</a> {/* Added border and padding */}
    </nav>
  );
}

export default Navbar;


// import React from 'react';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="w-full flex justify-between p-1 bg-white-100">
//       <div className="flex "> {/* Container for DKA */}
//         <span className="text-2xl font-bold mr-6 ">DKA</span>
//       </div>
//       <div className="flex items-center space-x-4 ml-auto"> {/* Container for links */}
//         <a href="#home" className="text-black text-lg">HOME</a>
//         <a href="#about" className="text-black text-lg">ABOUT US</a>
//         <a href="#courses" className="text-black text-lg">COURSES</a>
//         <a href="#dummy" className="text-black text-lg">SECTION</a>
//         <a href="#contact" className="text-black text-lg mr-10">CONTACT US</a> {/* Added mr-4 for margin */}
//       </div>
//       <a href="#join-now" className="text-black text-lg py-2 px-4 ">Join now</a> {/* Added border and padding */}
//     </nav>
//   );
// }

// export default Navbar;


