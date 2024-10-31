import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link, useNavigate,  } from 'react-router-dom';
import { auth, db, googleProvider } from '../../firebase_config';
import { addDoc, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import UsersModal from '../../components/UsersModal';
import { GuardianModel } from '../../models/UserModel';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [Guardian, setGuardian] = useState<GuardianModel>({
    GuardianId: '',
    registeredID: []
  })

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const closeUsersModal = () => {
    setIsModalOpen(false);
  }

  const generateSpecificID = (numberOfUsers: number) => {
    const paddingLength = 5;
    const prefix = "DKA";
    const numberString = (numberOfUsers + 1).toString().padStart(paddingLength, '0');
    return prefix + numberString;
  };
  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true);

    if(email !== "" || password !== ""){

    try {
      // Sign up the user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);

      // Check if the user already exists in the 'Guardian' collection
      const userRef = doc(db, 'Guardian', user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        // User already exists
        const userData = userDoc.data();
        console.log('User already exists:', userData);
        setIsModalOpen(true);
        setGuardian(userData as GuardianModel);

        setLoading(false);

      } else {
        // New user, proceed with the registration
        const querySnapshot = await getDocs(collection(db, 'students'));
        const noofusers = querySnapshot.size;

        const studentId = generateSpecificID(noofusers);
        await setDoc(doc(db, "Guardian", user.uid), { studentId: studentId });
        await setDoc(doc(db, "students", studentId), { GuardianId: user.uid, studentId: studentId });

        navigate(`/form?studentId=${studentId}`);
        setLoading(false);
      }

    } catch (error) {
      console.error("Error signing up:", error);
      setError(error as string + "Try Login using Google");
      setLoading(false);
    }
  }
  else{
    setError("Email and Password fields are empty.")
  }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      console.log(userCredential);
      var userIdToFind = userCredential.user.uid;
      console.log(userCredential.user);
      const userRef = doc(db, 'Guardian', userIdToFind);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log(userData);
        setIsModalOpen(true);
        setGuardian(userData as GuardianModel);
        setLoading(false);
      }
      else {
        const querySnapshot = await getDocs(collection(db, 'students'));
        const noofusers = querySnapshot.size;

        const studentId = generateSpecificID(noofusers);

        await addDoc(collection(db, "Guardian"), { GuardianId: userCredential.user.uid, studentId: studentId })
        await setDoc(doc(db, "students", studentId), { GuardianId: userCredential.user.uid, studentId: studentId });
        navigate(`/form?studentId=${studentId}`);
        setLoading(true);
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError(error as string + "Try Login using Google");
      setLoading(false);

    }
  };


  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side with SVG background */}
      <div className="w-full md:w-1/2 bg-anotherOne bg-cover bg-center flex items-center justify-center p-8 md:p-0 max-sm:bg-small-form">
        <div className="text-center text-black px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hello, Friend!</h1>
          <p className="mb-6">To get connected with us please login with your already registered details</p>
          <Link to="/login">
            <button className="bg-signup-pattern text-white py-2 px-4 rounded-3xl font-semibold hover:bg-gray-200 hover:text-black border border-white">
              SIGN IN
            </button>
          </Link>
        </div>
      </div>
      {/* Right side with form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center lg:p-20 max-sm:p-4 md:p-0">
        <div className="text-center px-4 md:px-8 lg:px-24">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Create Account</h1>
          <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
            <button className="bg-gray-200 p-3 rounded-full">
              <FaFacebook />
            </button>
            <button className="bg-gray-200 p-3 rounded-full">
              <FaGoogle onClick={signInWithGoogle} />
            </button>
            <button className="bg-gray-200 p-3 rounded-full">
              <CiLinkedin />
            </button>
          </div>
          <p className="mb-6">or use your email for registration:</p>
          <form className="space-y-4" onSubmit={signUp}>
            {/* <input
             
              type="text"
              placeholder="Name"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
            /> */}
            <input
              id='LoggingEmailAddress'
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
            />

            <div className='relative'>
              <input
              id='loggingPassword'
                type={visible ? "text" : "password"}
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
              />

              <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
                  onClick={() => setVisible(!visible)}
              >
                  {visible ? (
                      <IoIosEye size={24} />
                  ) : (
                      <IoIosEyeOff size={24} />
                  )}
              </button>

            </div>
             <p className='text-red-500'>{error}</p>
            <Link to='/form'>
              <button className="mt-4 px-4 bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600" >
                {
                  loading ?
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    :
                    "Sign Up"
                }
              </button>
            </Link>
          </form>
        </div>
      </div>
      <UsersModal isOpen={isModalOpen} onClose={closeUsersModal} guardian={Guardian}/>
    </div>
  );
};

export default Signup;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaGoogle } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";

// const Signup: React.FC = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Left side with SVG background */}
//       <div className="w-[650px] bg-s bg-cover bg-center flex items-center justify-center  ">
//         <div className="text-center text-black px-6">
//           <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
//           <p className="mb-6">To get connected with us please login with your already registered details</p>
//           <Link to="/join-now">
//             <button className="bg-signup-pattern text-white py-2 px-4 rounded-3xl font-semibold hover:bg-gray-200 hover:text-black border border-white">
//               SIGN IN
//             </button>
//           </Link>
//         </div>
//       </div>
//       {/* Right side with form */}
//       <div className="w-1/2 bg-white flex items-center justify-center">
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
//           <p className="mb-6">or use your email for registration:</p>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
//             />
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
//             <Link to='/form'>
//               <button className="mt-4 w-1/3 bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600">
//                 SIGN UP
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

