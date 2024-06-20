import React, { useState } from 'react';

const ReviewForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    option: '',
    rating: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col items-center">
      <div className="h-screen bg-form-pattern bg-cover relative">
        <div className="w-full p-5">
          <h1 className="text-left text-black text-3xl font-bold">DKA</h1>
        </div>
        <div className="py-20 text-center">
          <h2 className="text-white text-4xl font-bold">Fill The Form</h2>
          <p className="mt-10 text-black text-2xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam necessitatibus, deserunt dolores velit expedita dolorem ea nulla nesciunt placeat?
          </p>
        </div>
        <div className="absolute w-full flex justify-center items-start">
          <div className="mt-5 w-8/12 flex flex-col p-8 rounded-lg bg-white shadow-2xl">
            <form className="grid max-sm:grid-cols-1 grid-cols-2 gap-4 w-full" onSubmit={handleSubmit}>
              <div className='col-span-1'>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className='col-span-1'>
                <label className="block text-gray-700">Option</label>
                <select
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.option}
                  onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                >
                  <option value="">Select an option</option>
                  <option value="dance">Dance</option>
                  <option value="music">Music</option>
                  <option value="abacus">Abacus</option>
                  <option value="maths">Maths</option>
                </select>
              </div>

              <div className='col-span-1'>
                <label className="block text-gray-700">Rating</label>
                <input
                  type="number"
                  required
                  min="1"
                  max="5"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                />
              </div>

              <div className="col-span-2 max-sm:col-span-1">
                <label className="block text-gray-700">Description</label>
                <textarea
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="max-sm:col-span-1 col-span-2 flex justify-center mt-6">
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;


// import React, { useState } from 'react';


// const ReviewForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     date: '',
//     cause: '',
//     description: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//     // Add your form submission logic here
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="h-screen bg-form-pattern bg-cover relative">
//         <div className="w-full p-5">
//           <h1 className="text-left text-black text-3xl font-bold">DKA</h1>
//         </div>
//         <div className="py-20 text-center">
//           <h2 className="text-white text-4xl font-bold">Fill The Form</h2>
//           <p className="mt-10 text-black text-2xl font-normal">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam necessitatibus, deserunt dolores velit expedita dolorem ea nulla nesciunt placeat?
//           </p>
//         </div>
//         <div className="absolute w-full flex justify-center items-start">
//           <div className="mt-5 w-8/12 flex flex-col p-8 rounded-lg bg-white shadow-2xl">
//             <form className="grid max-sm:grid-cols-1 grid-cols-2 gap-4 w-full" onSubmit={handleSubmit}>
//               <div className='col-span-1'>
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   required
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//               </div>

//               <div className='col-span-1'>
//                 <label className="block text-gray-700">Date</label>
//                 <input
//                   type="date"
//                   required
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.date}
//                   onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                 />
//               </div>

//               <div className='col-span-1'>
//                 <label className="block text-gray-700">Cause</label>
//                 <input
//                   type="text"
//                   required
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.cause}
//                   onChange={(e) => setFormData({ ...formData, cause: e.target.value })}
//                 />
//               </div>

//               <div className="col-span-2 max-sm:col-span-1">
//                 <label className="block text-gray-700">Description</label>
//                 <textarea
//                   required
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 />
//               </div>

//               <div className="max-sm:col-span-1 col-span-2 flex justify-center mt-6">
//                 <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
//                   Submit Form
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewForm;
