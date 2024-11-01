import React, { Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { UserModel } from '../../../models/UserModel';


interface LoginEmailIdSelecetionModalProps {
    isOpen: boolean;
    onClose: () => void;
    usersMailResult:UserModel [];
    setUserSelectedId: React.Dispatch<React.SetStateAction<string>>;
}

const LoginEmailIdSelecetionModal:React.FC<LoginEmailIdSelecetionModalProps> = ({isOpen,onClose,usersMailResult,setUserSelectedId}) => {

    const submit = (id : string) => {
        setUserSelectedId(id);
            onClose();
    }

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
                                                usersMailResult.map((obj)=>(
                                                    <div className='w-full h-10 border-2 rounded-md flex flex-col justify-center items-center cursor-pointer' key={obj.id} onClick={() => { submit(obj.id) }}>

                                                            <div className='flex flex-col '>
                                                                <p>Continue as : {obj.id}</p>
                                                            </div>
                                                                    
                                                    </div>
                                                ))
                                            }
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

export default LoginEmailIdSelecetionModal
