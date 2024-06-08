
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Signup: React.FC = () => {
  return (
    <div className="flex h-screen ">
      {/* Left side with SVG background */}
      <div className="w-[400px] bg-signup-pattern bg-cover bg-center flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="mb-6">To get connected with us please login with your already registered details</p>
          <Link to="/join-now">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-3xl font-semibold hover:bg-gray-200 hover:text-black border border-white">
              SIGN IN
            </button>
          </Link>
        </div>
      </div>
      {/* Right side with form */}
      <div className="w-full bg-white flex items-center justify-center">
        <div className="text-center px-8">
          <h1 className="text-3xl font-bold mb-4">Create Account</h1>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="bg-gray-200 p-3 rounded-full">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="bg-gray-200 p-3 rounded-full">
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button className="bg-gray-200 p-3 rounded-full">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
          </div>
          <p className="mb-6">or use your email for registration:</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <Link to='/form'>
              <button className="mt-4 w-1/3 bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600">
                SIGN UP
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// const Signup: React.FC = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <div className="w-1/3 bg-blue-500 flex items-center justify-center ">
//         <div className="text-center text-white px-6">
//           <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
//           <p className="mb-6">To get connected with us please login with your already registered details</p>
//           <Link to="/joinnow">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded-3xl font-semibold hover:bg-gray-200 hover:text-black border border-white">
//               SIGN IN
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="w-full bg-white flex items-center justify-center">
//         <div className="text-center px-8">
//           <h1 className="text-3xl font-bold mb-4">Create Account</h1>
//           <div className="flex justify-center space-x-4 mb-6">
//             <button className="bg-gray-200 p-3 rounded-full">
//               <FontAwesomeIcon icon={faFacebookF} />
//             </button>
//             <button className="bg-gray-200 p-3 rounded-full">
//               <FontAwesomeIcon icon={faGoogle} />
//             </button>
//             <button className="bg-gray-200 p-3 rounded-full">
//               <FontAwesomeIcon icon={faLinkedinIn} />
//             </button>
//           </div>
//           <p className="mb-6">or use your email for registration:</p>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//             />
//            <Link to ='/form'>
//            <button className=" mt-4 w-1/3 bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600">
//               SIGN UP
//             </button>
//            </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


