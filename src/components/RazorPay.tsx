import { CourseModel } from '../models/CourseModel';
import { addDoc, arrayUnion, collection, doc, getDoc, increment, updateDoc } from 'firebase/firestore';
import { db } from '../firebase_config';
import React, { useEffect, useState } from 'react';
import { GetUser, fetchUser } from '../redux/UserSlice';
import { useSelector } from 'react-redux';
import { UserModel } from '../models/UserModel';
import { useAppDispatch } from '../redux/Store';
import { useNavigate } from 'react-router-dom';
import NotificationModal from './NotificationModal';

interface SomeData {
  selectedSession: string;
  selectedClassType: string;
  selectedBranchType: string;
}

interface RazorPayProps {
  course: CourseModel;
  data: SomeData;
  AnotherFunction:()=>void;
}

const RazorPay: React.FC<RazorPayProps> = ({ course, data, AnotherFunction }) => {
  const user = useSelector(GetUser) as UserModel;
  const [hasError, setHasError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    handlePayment();
  },[data])


  const [isOpen,setIsOpen] = useState<boolean>(false);

  const open = ()=>{
    console.log("hiiiiiiiiiiiiiiiiiiiiiii");

    AnotherFunction();
    setIsOpen(true)
  }

  const onClose = ()=>{
    setIsOpen(false)
    navigate('/my_courses');
  }

  const buyNow = async () => {
    if (!hasError) {
    setLoading(true);

      const options = {
        key: "rzp_test_JHYaX11s6e4is0",
        key_secret: "w1ImdQ3gNSxBHonSUOYw7lZU",
        amount: parseInt((parseInt(course.price!) * 100).toString()),
        currency: "INR",
        order_receipt: 'order_rcptid_' + course.id,
        name: `DKA - ${course.courseName}`,
        description: "for testing purpose",
        handler: async function (response: any) {
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() + 1);
          const paymentId = response.razorpay_payment_id;
          const orderObj = {
            paymentId,
            studentId: user.id,
            studentName: user.name,
            courseId: course.id,
            courseName: course.courseName,
            courseImageUrl: course.image,
            courseAmount: course.price,
            courseType: data.selectedClassType,
            courseSession: data.selectedSession,
            branch: data.selectedBranchType,
            parentName: user.fatherName,
            parentPhoneNo: user.contactNo,
            email: user.email,
            date: new Date().toISOString().split('T')[0],
            endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
            status: "Success"
          };

          try {
            await addDoc(collection(db, 'payments'), orderObj);
            const up = {
              courseId: course.id,
              courseName: course.courseName,
              boughtDate: new Date().toISOString().split('T')[0],
              endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
              paymentId,
              status: "success",
              courseType: data.selectedClassType,
              courseSession: data.selectedSession,
              branch: data.selectedBranchType,
            };

            await updateDoc(doc(db, 'students', user.id), { registeredCourses: arrayUnion(up) });
            await updateDoc(doc(db, 'courses', course.id!), { coursesSold: increment(1) });
            const docSnap = await getDoc(doc(db, 'performances', course.id!));
            const performance = docSnap.data()!.performanceTemplate;
            await updateDoc(doc(db, 'performances', course.id!), { students: arrayUnion({ studentId: user.id, studentName: user.name, ...performance }) });
            await updateDoc(doc(db, "regStuByCourse", course.id!), { students: arrayUnion(user.id) });
            await dispatch(fetchUser(user.id));

            open();

            navigate('/my_courses');
    setLoading(false);
            
          } catch (error) {
            console.log(error);
    setLoading(false);

          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const pay = new window.Razorpay(options);
      pay.open();
    }
  };

  const handlePayment = () => {
    if ( !data.selectedClassType || !data.selectedBranchType) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  return (
    <div>
      {
        loading?
        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
        :hasError?(
          <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-400 via-red-500 to-green-600 border border-transparent rounded-md hover:bg-gradient-to-r hover:from-green-500 hover:via-green-600 hover:to-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
          
        >
          Fill all Fields
        </button>
        ):(
          <button
          type="button"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-400 via-red-500 to-green-600 border border-transparent rounded-md hover:bg-gradient-to-r hover:from-green-500 hover:via-green-600 hover:to-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
          onClick={buyNow}
          >
            {hasError ? "Fill all Fields" : "Pay Now"}
          </button>
        )
      }
      <NotificationModal isOpen={isOpen} onClose={onClose} heading='Payment Notification' body='Success / fail' type='something'/>
    </div>
  );
};

export default RazorPay;
