import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <div className="text-center px-8 md:px-16 lg:px-24">
          <h1 className="text-3xl font-bold mb-4">Create Account</h1>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="bg-gray-200 p-3 rounded-full">
              <FaFacebook />
            </button>
            <button className="bg-gray-200 p-3 rounded-full">
              <FaGoogle />
            </button>
            <button className="bg-gray-200 p-3 rounded-full">
              <CiLinkedin />
            </button>
          </div>
          <p className="mb-6">or use your email account:</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
            />
            <a href="#" className="text-blue-500 hover:underline block mb-4 text-center">Forgot your Password?</a>
            <button className="w-full md:w-1/3 bg-blue-500 text-white py-2 rounded-3xl font-semibold hover:bg-blue-600">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-signup-pattern bg-cover flex items-center justify-center p-8">
  <div className="text-center text-black px-4 md:px-8 lg:px-12 ml-0 md:ml-10">
    <h1 className="text-2xl md:text-3xl font-bold mb-4">Hello, Friend!</h1>
    <p className="mb-6 text-sm md:text-base">To get connected with us please login with your already registered details</p>
    <Link to="/signups">
      <button className="bg-signup-pattern text-white py-2 px-4 rounded-3xl font-semibold hover:bg-gray-200 hover:text-black border border-white">
        SIGN UP
      </button>
    </Link>
  </div>
</div>

      </div>
  );
};

export default SignIn;


// import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { FaFacebook,FaGoogle } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
// import { Link } from 'react-router-dom';

// const SignIn: React.FC = () => {
//   return (
//     <div className="flex h-screen ">
//       <div className="w-full bg-white flex items-center justify-center">
//         <div className="text-center px-8">
//           <h1 className="text-3xl font-bold mb-4">Create Account</h1>
//           <div className="flex justify-center space-x-4 mb-6">
//             <button className="bg-gray-200 p-3 rounded-full">
//               <FaFacebook />
//             </button>
//             <button className="bg-gray-200 p-3 rounded-full">
//               <FaGoogle />
//             </button>
//             <button className="bg-gray-200 p-3 rounded-full">
//               <CiLinkedin />
//             </button>
//           </div>
//           <p className="mb-6">or use your email account:</p>
//           <form className="space-y-4">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
//             />
//             <a href="#" className="text-blue-500 hover:underline block mb-4 text-center">Forgot your Password?</a>
//             <button className="w-1/3 bg-blue-500 text-white py-2 rounded-3xl font-semibold hover:bg-blue-600">
//               SIGN IN
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="w-[1200px] bg-signup-pattern bg-cover flex items-center justify-center">
//         <div className="text-center text-black px-8 ml-10">
//           <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
//           <p className="mb-6 ml-12">To get connected with us please login with your already registered details</p>
//           <Link to="/signups">
//             <button className=" bg-signup-pattern  text-white py-2 px-4 rounded-3xl font-semibold hover:bg-gray-200 hover:text-black border border-white">
//               SIGN UP
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



