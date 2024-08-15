import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { GuardianModel } from '../models/UserModel';
import { useSelector } from 'react-redux';
import { fetchUser, loading } from '../redux/UserSlice';
import { useAppDispatch } from '../redux/Store';
import { useNavigate } from 'react-router-dom';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../firebase_config';


interface UsersModalProps {
    isOpen: boolean;
    onClose: () => void;
    guardian:GuardianModel;
}

const UsersModal:React.FC<UsersModalProps> = ({isOpen,onClose,guardian}) => {
    // const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    // const Loading = useSelector(loading);

    const [newLoading,setNewLoading] = useState<boolean>(false);

    const generateSpecificID = (numberOfUsers:number) => {
        const paddingLength = 5;
        const prefix = "DKA";
        const numberString = (numberOfUsers+1).toString().padStart(paddingLength, '0');
        return prefix + numberString;
    };

    // const Loginevent = async(id:string) =>{
    //     await dispatch(fetchUser(id));

    //     if(Loading === 'succeeded'){
    //         navigate('/');
    //     }
    //     else if(Loading === 'no_data'){
    //         navigate(`/form?studentId=${id}`);
    //     }

    // }

    // const addUser = async() =>{
    //     setNewLoading(true);
    //     const arr = guardian.registeredID;
    //     const querySnapshot = await getDocs(collection(db, 'students'));
    //     const noofusers = querySnapshot.size;

    //     const studentId = generateSpecificID(noofusers);
    //     arr.push(studentId);


    //     await setDoc(doc(db, "Guardian",guardian.GuardianId),{registeredID:arr}, { merge: true });
    //     await setDoc(doc(db, "students", studentId), {GuardianId : guardian.GuardianId,studentId:studentId});

    //     setNewLoading(false);
    //     navigate(`/form?studentId=${studentId}`);
    // }


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const Loading = useSelector(loading);

    const [currentStudentId, setCurrentStudentId] = useState<string | null>(null);

    useEffect(() => {
        if (Loading === 'succeeded' && currentStudentId) {
            navigate('/');
        } else if (Loading === 'no_data' && currentStudentId) {
            navigate(`/form?studentId=${currentStudentId}`);
        }
    }, [Loading, currentStudentId, navigate]);

    const Loginevent = async (id: string) => {
        setCurrentStudentId(id);
        await dispatch(fetchUser(id));
    };

    const addUser = async () => {
        setNewLoading(true);
        const arr = guardian.registeredID;
        const querySnapshot = await getDocs(collection(db, 'students'));
        const noofusers = querySnapshot.size;

        const studentId = generateSpecificID(noofusers);
        arr.push(studentId);

        await setDoc(doc(db, "Guardian", guardian.GuardianId), { registeredID: arr }, { merge: true });
        await setDoc(doc(db, "students", studentId), { GuardianId: guardian.GuardianId, studentId: studentId });

        setNewLoading(false);
        Loginevent(studentId);
    };

  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
            <TransitionChild
                as={Fragment}
                enter="ease-out duration-300" 
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center  dark:bg-opacity-25">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all bg-slate-100 ">
                            <section>
                                <div className="flex flex-col items-center justify-center p-8 mx-auto lg:py-0 max-sm:p-4  overflow-auto">
                                    <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                                        <h1>
                                            Users present on this email : 
                                        </h1>
                                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col justify-center items-center w-full">
                                            {
                                                guardian.registeredID.map((obj)=>(
                                                    <div className='w-full h-10 border-2 rounded-md flex flex-col justify-center items-center cursor-pointer' key={obj} onClick={()=>{Loginevent(obj)}}>
                                                       {
                                                        Loading === 'Loading'?(
                                                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                        </svg>
                                                        ):(
                                                            <div className='flex flex-col '>
                                                                <p>Continue as : {obj}</p>
                                                            </div>
                                                        )
                                                       }
                                                    </div>
                                                ))
                                            }
                                            
                                        </div>

                                        <div className='p-6 space-y-1 md:space-y-1 sm:p-8'>
                                            <button className=' w-full h-10 border-2 rounded-md flex justify-center items-center cursor-pointer bg-blue-500 text-white hover:bg-blue-400' onClick={addUser}>
                                                {
                                                        newLoading?(
                                                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                        </svg>
                                                        ):(
                                                            "Add Another Student"
                                                        )     
                                                }
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
  )
}

export default UsersModal
