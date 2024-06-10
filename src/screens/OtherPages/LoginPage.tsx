import React, { useState } from 'react';
import { auth, db, googleProvider } from "../../firebase_config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { useAppDispatch } from '../../redux/Store';
// import { setUser } from '../../redux/UserCoursesSlice';
import { GuardianModel, UserModel } from '../../models/UserModel';
import { setUser } from '../../redux/UserSlice';
import UsersModal from '../../components/UsersModal';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false);

    const [Guardian,setGuardian] = useState<GuardianModel>({
        GuardianId:'',
        registeredID:[]
    })

    const closeUsersModal = () =>{
        setIsModalOpen(false);
    }

    const generateSpecificID = (numberOfUsers:number) => {
        const paddingLength = 5;
        const prefix = "DKA";
        const numberString = numberOfUsers.toString().padStart(paddingLength, '0');
        return prefix + numberString;
    };

    const signIn = async () => {
        try {
            const userCredential = await getDoc(doc(db,'students',email.trim()));
            const user = userCredential.data() as UserModel;
            console.log(user);
            console.log(email,password);
            
            if(user!.password ===  password.trim()){
                dispatch(setUser(user))
                navigate("/");
            }
        } catch (error) {
            console.error("Error signing in with email and password:", error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            console.log(userCredential);
            var userIdToFind = userCredential.user.uid;
            console.log(userCredential.user);
            const userRef = doc(db, 'Guardian', userIdToFind);  
            const userDoc = await getDoc(userRef);
            if(userDoc.exists()){
                const userData = userDoc.data();
                console.log(userData);
                setIsModalOpen(true);
                setGuardian(userData as GuardianModel);
            }
            else{
                const querySnapshot = await getDocs(collection(db, 'students'));
                const noofusers = querySnapshot.size;

                const studentId = generateSpecificID(noofusers);
                await setDoc(doc(db, "Guardian",userCredential.user.uid),{GuardianId : userCredential.user.uid,registeredID:[studentId]})
                await setDoc(doc(db, "students", studentId), {GuardianId : userCredential.user.uid,studentId:studentId});
                navigate(`/form?studentId=${studentId}`);

            }
            
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    return (
        <>
        <div className='w-full h-screen flex flex-row justify-center items-center'>

            <div className="flex flex-row w-1/2  justify-center items-center">

                    <div className="w-full border-2 rounded-lg px-6 py-8 md:px-8 lg:w-1/2">
                        <p className="mt-3 text-xl text-center text-gray-600 ">
                            Welcome back!
                        </p>

                        <button onClick={signInWithGoogle} className="w-full flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg  hover:bg-gray-50 ">
                            <div className="px-4 py-2">
                                <svg className="w-6 h-6" viewBox="0 0 40 40">
                                    {/* Google SVG */}
                                </svg>
                            </div>
                            <span className="w-5/6 px-4 py-3 font-bold text-center">Continue with Google</span>
                        </button>

                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b lg:w-1/4"></span>
                            <span className="text-xs text-center text-gray-500 uppercase  hover:underline">or login with UserID</span>
                            <span className="w-1/5 border-b  lg:w-1/4"></span>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="LoggingEmailAddress">User Id</label>
                            <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-gray-600 " htmlFor="loggingPassword">Password</label>

                            </div>

                            <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="mt-6">
                            <button onClick={signIn} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b  md:w-1/4"></span>
                            <button onClick={()=>{navigate('/signUp')}} className="text-xs text-gray-500 uppercase  hover:underline">or sign up</button>
                            <span className="w-1/5 border-b  md:w-1/4"></span>
                        </div>
                    </div>
            </div>
        </div>
        <UsersModal isOpen={isModalOpen} onClose={closeUsersModal} guardian={Guardian}/>
        </>
    );
}

export default LoginPage
