import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GetUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase_config';
import NotificationModal from '../../components/NotificationModal';
import { useNavigate } from 'react-router-dom';

const ReviewForm: React.FC = () => {

  const [loading,setLoading] = useState<boolean>(false);
  const [isOpen,setIsOpen] = useState<boolean>(false);


  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    await addDoc(collection(db,"Review"),formData);
    setLoading(false);
    Open();
  };

  const user = useSelector(GetUser) as UserModel;

  const [formData, setFormData] = useState({
    name: user.name,
    option: '',
    rating: '',
    description: '',
    profileImg:user.imageUrl
  });

  const navigate = useNavigate();

  const Open = ()=>{
    setIsOpen(true);
  }

  const close = () =>{
    setIsOpen(false);
    navigate('/');
  }

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
                  value={user.name}
                />
              </div>

              <div className='col-span-1'>
                <label className="block text-gray-700">Select Course</label>
                <select
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.option}
                  onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                >
                  <option value="">Select an option</option>
                  {
                    user.registeredCourses.map((obj)=>(
                      <option value={obj.courseName}>{obj.courseName}</option>
                    ))
                  }
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
                  {
                    loading ?(
                      <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                    ):(
                      "Submit"
                    )
                  } 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NotificationModal isOpen = {isOpen} onClose={close} heading='Review Submission' body='Your feedback has succesfully submited' type='none'/>
    </div> 
  );
};

export default ReviewForm;