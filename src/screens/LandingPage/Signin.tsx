import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
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
          <p className="mb-6">or use your email account:</p>
          <form className="space-y-4">
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
            <a href="#" className="text-blue-500 hover:underline block mb-4 text-center">Forgot your Password?</a>
            <button className="w-1/3 bg-blue-500 text-white py-2 rounded-3xl font-semibold hover:bg-blue-600">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/3 bg-blue-500 flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
          <p className="mb-6">To get connected with us please login with your already registered details</p>
          <Link to="/signup">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-3xl font-semibold hover:bg-gray-200 hover:text-black border border-white">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


// // src/components/SignIn.tsx

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// const SignIn: React.FC = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
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
//           </div><p className="mb-6">or use your email account:</p>
//           <form className="space-y-4">
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
//             <a href="#" className="text-blue-500 hover:underline block  mb-4 text-center">Forgot your Password?</a>
//             <button className="w-1/3 bg-blue-500 text-white py-2 rounded-3xl font-semibold hover:bg-blue-600">
//               SIGN IN
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="w-1/3 bg-blue-500 flex items-center justify-center">
//         <div className="text-center text-white px-8">
//           <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
//           <p className="mb-6">To get connected with us please login with your already registered details</p>
//           <button className="bg-blue-500  text-white- py-2 px-4 rounded-3xl font-semibold hover:bg-gray-200 hover:text-black border border-white">
//             SIGN UP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


