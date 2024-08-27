import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { auth, db, googleProvider } from '../../firebase_config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { useAppDispatch } from '../../redux/Store';
import { GuardianModel, UserModel } from '../../models/UserModel';
import { setUser } from '../../redux/UserSlice';
import UsersModal from '../../components/UsersModal';
const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [Guardian, setGuardian] = useState<GuardianModel>({
    GuardianId: '',
    registeredID: []
  });

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
  const signIn = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true);

    // Check if email or password is empty
    if (!email.trim() || !password.trim()) {
      setError("Id and password fields cannot be empty.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await getDoc(doc(db, 'students', email.trim()));
      const user = userCredential.data() as UserModel;
      console.log(user);
      console.log(email, password);

      if (user!.password === password.trim()) {
        dispatch(setUser(user));
        navigate("/");
      } else {
        setError("Invalid ID or password.");
      }

      setLoading(false);

    } catch (error) {
      console.error("Error signing in with ID and password:", error);
      setError("Error signing in with ID and password.");
      setLoading(false);
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
        console.log('====================================');
        console.log(noofusers);
        console.log('====================================');


        const studentId = generateSpecificID(noofusers);

        await setDoc(doc(db, "Guardian", userCredential.user.uid), { GuardianId: userCredential.user.uid, registeredID: [studentId] })
        await setDoc(doc(db, "students", studentId), { GuardianId: userCredential.user.uid, studentId: studentId });
        navigate(`/form?studentId=${studentId}`);
        setLoading(false);

      }

    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError(error as string);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2 max-sm:mt-10 bg-white flex items-center justify-center">
        <div className="text-center px-8 md:px-16 lg:px-24">
          <h1 className="text-3xl font-bold mb-4">Login to your Account</h1>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="bg-gray-200 p-3 rounded-full">
              <FaGoogle onClick={signInWithGoogle} />
            </button>
          </div>
          <p className="mb-6">or use your DKA account:</p>
          <form className="space-y-4" onSubmit={signIn}>
            <input
              // type="email"
              placeholder="DKA ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type='submit' className="px-4 py-2 bg-blue-500 text-white  rounded-3xl font-semibold hover:bg-blue-600 ">
              {
                loading ?
                  <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  :
                  "Sign In"
              }
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-anotherOne h-full max-sm:mt-4   bg-cover flex items-center justify-center p-8 max-sm:bg-anotherOne max-sm:bg-cover">
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
      <UsersModal isOpen={isModalOpen} onClose={closeUsersModal} guardian={Guardian}/>
    </div>
    
  );
};

export default SignIn;






