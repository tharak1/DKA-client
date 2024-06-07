import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Form: React.FC = () => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center h-[500px] bg-blue-500">
      <div className="w-full p-5">
        <h1 className="text-left text-black text-3xl font-bold">DKA</h1>
      </div>
      <div className="py-20 text-center">
        <h2 className="text-white text-4xl font-bold">Fill The Form</h2>
        <p className="mt-10 text-white text-2xl font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam necessitatibus, deserunt dolores velit expedita dolorem ea nulla nesciunt placeat?
        </p>
      </div>
      <div className="mt-5 w-11/12 max-w-4xl p-8 rounded-lg bg-white shadow-lg">
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input type="date" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Father Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Mother Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Gender</label>
            <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Country</label>
            <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">School Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">Class</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Address</label>
            <textarea className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="col-span-2 flex items-center justify-between">
            <div className="flex flex-col items-center justify-center">
              <label className="block text-gray-700 mb-2">Upload Image</label>
              <div className="relative w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4 cursor-pointer" onClick={handleImageUploadClick}>
                <FontAwesomeIcon icon={faCamera} className="text-gray-500 text-3xl" />
                <input type="file" className="absolute w-full h-full opacity-0 cursor-pointer" ref={fileInputRef} />
              </div>
              <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600" onClick={handleImageUploadClick}>
                Select Image
              </button>
            </div>
            <div className="flex flex-col items-center">
              <label className="block text-gray-700">How did you hear about us?</label>
              <div className="flex justify-center space-x-4 mt-2">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="how" value="internet" />
                  <span className="ml-2">Internet</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="how" value="friend" />
                  <span className="ml-2">Friend</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="how" value="newspaper" />
                  <span className="ml-2">Newspaper</span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex justify-center mt-6">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;



// import React from "react";

// const Form: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center h-[500px] bg-blue-500">
//       <div className="w-full p-5">
//         <h1 className="text-left text-black text-3xl font-bold">DKA</h1>
//       </div>
//       <div className="py-20 text-center">
//         <h2 className="text-white text-4xl font-bold">Fill The Form</h2>
//         <p className="mt-10 text-white text-2xl font-normal">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam necessitatibus, deserunt dolores velit expedita dolorem ea nulla nesciunt placeat?
//         </p>
//       </div>
//       <div className="mt-10 w-11/12 max-w-4xl p-8 rounded-lg bg-white shadow-lg">
//         <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           <div>
//             <label className="block text-gray-700">Name</label>
//             <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
//           </div>
//           <div>
//             <label className="block text-gray-700">Date of Birth</label>
//             <input type="date" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
//           </div>
//           <div>
//             <label className="block text-gray-700">Father Name</label>
//             <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
//           </div>
//           <div>
//             <label className="block text-gray-700">Mother Name</label>
//             <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
//           </div>
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input type="email" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
//           </div>
//           <div>
//             <label className="block text-gray-700">Phone Number</label>
//             <input type="tel" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
//           </div>
//           <div>
//             <label className="block text-gray-700">Gender</label>
//             <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-gray-700">Country</label>
//             <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
//               <option>Country 1</option>
//               <option>Country 2</option>
//               <option>Country 3</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-gray-700">School Name</label>
//             <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
//           </div>
//           <div>
//             <label className="block text-gray-700">Class</label>
//             <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-gray-700">Address</label>
//             <textarea className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
//           </div>
//           <div className="col-span-2 flex items-center justify-between">
//             <div className="flex flex-col items-center justify-center">
//               <label className="block text-gray-700 mb-2">Upload Image</label>
//               <div className="relative w-32 h-32 rounded-80 bg-gray-200 flex items-center justify-center mb-4">
//                 <i className="fas fa-camera text-gray-500 text-3xl"></i>
//                 <input type="file" className="absolute w-full h-full opacity-0 cursor-pointer" />
//               </div>
//               <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
//                 Select Image
//               </button>
//             </div>
//             <div className="flex flex-col items-center">
//               <label className="block text-gray-700">How did you hear about us?</label>
//               <div className="flex justify-center space-x-4 mt-2">
//                 <label className="inline-flex items-center">
//                   <input type="radio" className="form-radio" name="how" value="internet" />
//                   <span className="ml-2">Internet</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input type="radio" className="form-radio" name="how" value="friend" />
//                   <span className="ml-2">Friend</span>
//                 </label>
//                 <label className="inline-flex items-center">
//                   <input type="radio" className="form-radio" name="how" value="newspaper" />
//                   <span className="ml-2">Newspaper</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-2 flex justify-center mt-6">
//             <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
//               Submit Form
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Form;
