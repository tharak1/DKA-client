import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  mobileNumber: string;
  email: string;
  className: string;
  classMode: string;
  classSession: string;
  branch: string;
  totalAmount: number;
  imageUrl: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  studentName,
  mobileNumber,
  email,
  className,
  classMode,
  classSession,
  branch,
  totalAmount,
  imageUrl
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={onClose}>
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
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
              <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-black text-center">
                PAYMENT SUCCESSFUL
              </Dialog.Title>
              <div className="mt-6 flex">
                <div className="w-1/3">
                  <img src={imageUrl} alt="Class" className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="w-2/3 pl-8">
                  <p>Student name: <strong>{studentName}</strong></p>
                  <p>Mobile Number: <strong>{mobileNumber}</strong></p>
                  <p>Mail ID: <strong>{email}</strong></p>
                  <p className='text-xl mt-2'><strong>{className}</strong></p>
                  <p className="text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, can you make it more rounded?
                  </p>
                  <p className='mt-2'>Class mode: <strong>{classMode}</strong></p>
                  <p>Class Session: <strong>{classSession}</strong></p>
                  <p>Branch: <strong>{branch}</strong></p>
                  <p>Total Amount: ₹ <strong>{totalAmount}</strong> <strong>/month</strong></p>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                  onClick={onClose}
                >
                  PAID
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentModal;

// import React, { Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';

// interface PaymentModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   studentName: string;
//   mobileNumber: string;
//   email: string;
//   className: string;
//   classMode: string;
//   classSession: string;
//   branch: string;
//   totalAmount: number;
//   imageUrl: string;
// }

// const PaymentModal: React.FC<PaymentModalProps> = ({
//   isOpen,
//   onClose,
//   studentName,
//   mobileNumber,
//   email,
//   className,
//   classMode,
//   classSession,
//   branch,
//   totalAmount,
//   imageUrl
// }) => {
//   return (
//     <Transition show={isOpen} as={Fragment}>
//       <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={onClose}>
//         <div className="flex min-h-full items-center justify-center p-4 text-center">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <div className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//               <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-black text-center">
//                 PAYMENT SUCCESSFUL
//               </Dialog.Title>
//               <div className="mt-6 flex">
//                 <div className="w-1/3">
//                   <img src={imageUrl} alt="Class" className="w-full h-48 object-cover rounded-lg" />
//                 </div>
//                 <div className="w-2/3 pl-8">
//                   <p>Student name: <strong>{studentName}</strong></p>
//                   <p>Mobile Number: <strong>{mobileNumber}</strong></p>
//                   <p>Mail ID: <strong>{email}</strong></p>
//                   <p className='text-xl mt-2'><strong>{className}</strong></p>
//                   <p className="text-gray-500 mt-2">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, can you make it more rounded?
//                   </p>
//                   <p className='mt-2'>Class mode: <strong>{classMode}</strong></p>
//                   <p>Class Session: <strong>{classSession}</strong></p>
//                   <p>Branch: <strong>{branch}</strong></p>
//                   <p>Total Amount: ₹ <strong>{totalAmount}</strong> <strong>/month</strong></p>
//                 </div>
//               </div>
//               <div className="mt-6 flex justify-center">
//               <button
//                   type="button"
//                   className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
//                   onClick={onClose}
//                 >
//                   PAID
//                 </button>
//               </div>
//             </div>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default PaymentModal;

