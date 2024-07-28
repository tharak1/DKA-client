import { CourseModel, MyCourseModal } from '../models/CourseModel';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase_config';
import React, { useState } from 'react';
import { GetUser } from '../redux/UserSlice';
import { useSelector } from 'react-redux';
import { UserModel } from '../models/UserModel';
import { useNavigate } from 'react-router-dom';
import NotificationModal from './NotificationModal';

interface SomeData {
  selectedSession: string;
  selectedClassType: string;
  selectedBranchType: string;
}

interface RazorPayProps {
  course: CourseModel;
  data?: SomeData;
  AnotherFunction?: () => void;
}

const RazorPayRenew: React.FC<RazorPayProps> = ({ course }) => {
  const user = useSelector(GetUser) as UserModel;

  const navigate = useNavigate();


  const [isOpen, setIsOpen] = useState<boolean>(false);


  const onClose = () => {
    setIsOpen(false);
    navigate('/my_courses');
  };

  const buyNow = async () => {
    if (true) {
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

          try {
            const userDocRef = doc(db, 'students', user.id);
            const userDocSnap = await getDoc(userDocRef);
            const registeredCourses = userDocSnap.data()?.registeredCourses as MyCourseModal[] || [];
            const courseIndex = registeredCourses.findIndex((c: any) => c.courseId === course.id);

            if (courseIndex !== -1) {
              // If course is already registered, update the existing registration
              const updatedCourse = {
                ...registeredCourses[courseIndex],
                boughtDate: new Date().toISOString().split('T')[0],
                endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
                paymentId,
                status: "success",
              };
              registeredCourses[courseIndex] = updatedCourse;
              await updateDoc(userDocRef, { registeredCourses });
            } else {
              // If course is not registered, add a new registration
            }

            await addDoc(collection(db, 'payments'), {
              paymentId,
              studentId: user.id,
              studentName: user.name,
              courseId: course.id,
              courseName: course.courseName,
              courseImageUrl: course.image,
              courseAmount: course.price,
              courseType: registeredCourses[courseIndex].courseType,
              courseSession: registeredCourses[courseIndex].courseSession,
              branch: registeredCourses[courseIndex].branch,
              parentName: user.fatherName,
              parentPhoneNo: user.contactNo,
              email: user.email,
              date: new Date().toISOString().split('T')[0],
              endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
              status: "Success"
            });
            // await dispatch(fetchUser(user.id));


            // navigate('/my_courses', { replace: true });
            window.location.reload();
            console.log('====================================');
            console.log(window.location);
            console.log('====================================');

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



  return (
    <div>
      {
        // hasError ? (
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600" onClick={buyNow} type="button">Renew Course </button>

        // ) : (
        //   <button
        //     type="button"
        //     className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-400 via-red-500 to-green-600 border border-transparent rounded-md hover:bg-gradient-to-r hover:from-green-500 hover:via-green-600 hover:to-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
        //     onClick={buyNow}
        //   >
        //     {hasError ? "Fill all Fields" : "Pay Now"}
        //   </button>
        // )
      }
      <NotificationModal isOpen={isOpen} onClose={onClose} heading='Payment Notification' body='Success / fail' type='something' />
    </div>
  );
};

export default RazorPayRenew;
