import React, { Fragment, useState } from 'react';
import { Dialog, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { CourseModel } from '../../models/CourseModel';
import { useSelector } from 'react-redux';
import { GetUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';
import RazorPay from '../../components/RazorPay';

interface PaymentModalProps {
  course: CourseModel;
}

const PaymentBeforeModal: React.FC<PaymentModalProps> = ({ course }) => {
  const user = useSelector(GetUser) as UserModel;

  const [obj, setObj] = useState({
    selectedSession: "",
    selectedClassType: "",
    selectedBranchType: "",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);




  const onClose = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);

  };



  return (
    <>
      <div>
        <button
          className="mt-4 mb-8 w-full rounded-md bg-blue-700 hover:bg-blue-500 px-6 py-3 font-medium text-white"
          onClick={open}
        >
          Join Now
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-y-auto z-50 shadow-lg" onClose={onClose}>
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <div className="absolute top-4 right-4">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <DialogTitle as="h3" className="text-lg font-bold leading-6 text-black text-center">
                  Payment Details
                </DialogTitle>
                <div className="mt-6 flex max-sm:flex-col">
                  <div className="w-1/3 max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center">
                    <img src={course.image} alt="Class" className="w-1/2 h-48  object-cover rounded-lg" />
                  </div>
                  <div className="w-2/3 max-sm:w-full pl-8">
                    <p>Student name: <strong>{user.name}</strong></p>
                    <p>Mobile Number: <strong>{user.contactNo}</strong></p>
                    <p>Mail ID: <strong>{user.email}</strong></p>
                    <p className="text-xl mt-2"><strong>{course.courseName}</strong></p>
                    <p className="text-gray-500 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mt-2 flex items-center">
                      <p className="mr-4">Class mode:</p>
                      {course.online && (
                        <label className="mr-4">
                          <input type="radio" value="Online" checked={obj.selectedClassType === "online"} onChange={() => setObj({ ...obj, selectedClassType: "online" })} />
                          Online class
                        </label>
                      )}
                      {course.offline && (
                        <label>
                          <input type="radio" value="Offline"
                            checked={obj.selectedClassType === "offline"}
                            onChange={() => setObj({ ...obj, selectedClassType: "offline" })}
                          />
                          Offline class
                        </label>
                      )}
                    </div>
                    <div className="mt-2">
                      <p>Class Session:</p>
                      {course.sessions!.map((obj1) => (
                        <div key={obj1} className="flex items-center">
                          <input
                            type="radio"
                            name={`sessions-${course.id}`}
                            id={`session-${obj1}`}
                            value={obj1}
                            checked={obj.selectedSession === obj1}
                            onChange={() => setObj({ ...obj, selectedSession: obj1 })}
                            className="mr-2"
                          />
                          <label htmlFor={`session-${obj}`} className="dark:text-white">{obj1}</label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <label className="block">
                        Branch:
                        <select
                          value={obj.selectedBranchType}
                          onChange={(e) => { setObj({ ...obj, selectedBranchType: e.target.value }) }}
                          className=" w-1/2 ml-3 mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                          <option value="">--- Select Branch ---</option>
                          <option value="Hyd">Hyd</option>
                          <option value="Sec">Sec</option>
                        </select>
                      </label>
                    </div>
                    <p className="mt-4">Total Amount: ₹ <strong>{course.price}</strong> <strong>/month</strong></p>

                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <RazorPay course={course} data={obj} AnotherFunction={onClose} />
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PaymentBeforeModal;
