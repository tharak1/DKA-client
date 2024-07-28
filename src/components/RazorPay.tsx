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

          } catch (error) {
            console.log(error);
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
    if (!data.selectedSession || !data.selectedClassType || !data.selectedBranchType) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  return (
    <div>
      {
        hasError?(
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
