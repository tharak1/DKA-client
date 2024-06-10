import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { databaseStorage, db } from '../../firebase_config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../redux/Store';
import { fetchUser} from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


const uploadImage = async (image: File, name: string, folder: string): Promise<string> => {
  if (!image) return '';
  const imageRef = ref(databaseStorage, `${folder}/${name + uuidv4()}`);
  const snapshot = await uploadBytes(imageRef, image);
  return await getDownloadURL(snapshot.ref);
};

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [p1,setP1] = useState<string>("");
  const [p2,setP2] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [formData, setFormData] = useState<UserModel>({
    id: '',
    name: '',
    fatherName: '',
    motherName: '',
    dob: '',
    gender: 'male',
    address: '',
    contactNo: '',
    schoolName: '',
    class: '',
    hearAbout: 'self interest',
    password: '',
    imageUrl: '',
    registeredCourses: [],
    email:'',
    country:''
  });

  const location = useLocation();
  const dispatch = useAppDispatch();
  const searchParams = new URLSearchParams(location.search);
  const studentId = searchParams.get('studentId');
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (p1===p2){
      setUploading(true);
      if (image) {
        const uploadedImage = await uploadImage(image, formData.name, 'student-profile');
        setFormData({ ...formData, imageUrl: uploadedImage });
        const courseRef = doc(db, 'students', studentId!);
        await setDoc(courseRef, { ...formData, imageUrl: uploadedImage, id: studentId,password:p1 }, { merge: true });
        await setDoc(doc(db, 'registeredCourses', studentId!), { courses: [] });
        await setDoc(doc(db, 'userOrders', studentId!), { orders: [] });
      }
      setUploading(false);
      dispatch(fetchUser(studentId!));
      navigate('/');
    }

  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center h-[500px] bg-blue-500 bg-form-pattern bg-cover">
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
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input type="date" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
          </div>
          <div>
            <label className="block text-gray-700">Father Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.fatherName} onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })} />
          </div>
          <div>
            <label className="block text-gray-700">Mother Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.motherName} onChange={(e) => setFormData({ ...formData, motherName: e.target.value })} />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.contactNo} onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })} />
          </div>
          <div>
            <label className="block text-gray-700">Gender</label>
            <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Country</label>
            <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
              <option value="Country 1">Country 1</option>
              <option value="Country 2">Country 2</option>
              <option value="Country 3">Country 3</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">School Name</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.schoolName} onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })} />
          </div>
          <div>
            <label className="block text-gray-700">Class</label>
            <input type="text" className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.class} onChange={(e) => setFormData({ ...formData, class: e.target.value })} />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Address</label>
            <textarea className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
          </div>
          <div className="col-span-2 flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <label className="block text-gray-700 mb-2">Profile Image</label>
            <div className="relative w-32 h-40 rounded-md bg-gray-200 flex items-center justify-center mb-4 cursor-pointer" onClick={handleImageUploadClick}>
              {image ? (
                <img src={URL.createObjectURL(image)} alt="profile image" className="w-32 h-40 rounded-md" />
              ) : (
                <h2>Not selected</h2>
              )}
            </div>
            <input type="file" className="w-full h-full opacity-0 cursor-pointer" ref={fileInputRef} onChange={handleImageChange} />
            <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600" onClick={handleImageUploadClick}>
              Select Image
            </button>
          </div>
            <div className="flex flex-col items-center">
              <label className="block text-gray-700">How did you hear about us?</label>
              <div className="flex justify-center space-x-4 mt-2">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="hearAbout" value="internet" checked={formData.hearAbout === 'internet'} onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })} />
                  <span className="ml-2">Internet</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="hearAbout" value="friend" checked={formData.hearAbout === 'friend'} onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })} />
                  <span className="ml-2">Friend</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="hearAbout" value="newspaper" checked={formData.hearAbout === 'newspaper'} onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })} />
                  <span className="ml-2">Newspaper</span>
                </label>
              </div>
            </div>
          </div>

          <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <div className='relative'>
                  <input type={visible ? "text" : "password"} name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>{setP1(e.target.value)}} />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
                    onClick={() => { setVisible(!visible) }}
                  >
                    {visible ? (
                      <IoIosEye size={24} />
                    ) : (
                      <IoIosEyeOff size={24} />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <div className='relative'>
                  <input type={confirmVisible ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder="Confirm password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>{setP2(e.target.value)}} />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
                    onClick={() => { setConfirmVisible(!confirmVisible) }}
                  >
                    {confirmVisible ? (
                      <IoIosEye size={24} />
                    ) : (
                      <IoIosEyeOff size={24}/>
                    )}
                  </button>
                </div>
              </div>
          <div className="col-span-2 flex justify-center mt-6">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">
              {uploading ? 
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
               : "Submit Form"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
