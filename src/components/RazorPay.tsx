import { CourseModel } from '../models/CourseModel';
import { addDoc, arrayUnion, collection, doc, getDoc, updateDoc} from 'firebase/firestore';
import { db } from '../firebase_config';
import React from 'react';
import { GetUser, fetchUser } from '../redux/UserSlice';
import { useSelector } from 'react-redux';
import { UserModel } from '../models/UserModel';
import { useAppDispatch } from '../redux/Store';
import { useNavigate } from 'react-router-dom';

interface RazorPayProps{
  course:CourseModel
}

const RazorPay:React.FC<RazorPayProps> = ({course}) => {

  const user = useSelector(GetUser) as UserModel;
  const dispatch = useAppDispatch();
  const naviagate = useNavigate();

  const buyNow = async () => {
    const options = {
      key: "rzp_test_JHYaX11s6e4is0",
      key_secret: "w1ImdQ3gNSxBHonSUOYw7lZU",
      amount: parseInt((parseInt(course.price!) * 100).toString()),
      currency: "INR",
      order_receipt: 'order_rcptid_' + course.id,
      name: "sneek-shop",
      description: "for testing purpose",
      handler: async function (response: any) {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() + 1);
        console.log(response);
        const paymentId = response.razorpay_payment_id;
        const orderObj = {
          paymentId,
          studentId: user.id,
          studentName: user.name,
          courseId: course.id,
          courseName: course.courseName,
          courseImageUrl:course.image,
          courseAmount: course.price,
          courseType: "offline",
          courseSession: "6:00 AM to 7:00 AM",
          branch: "hyd",
          parentName: user.fatherName,
          parentPhoneNo: user.contactNo,
          email: user.email,
          date:new Date().toISOString().split('T')[0],
          endDate:new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
          status:"Success"
        };


        try {
          await addDoc(collection(db, 'payments',), orderObj);
          const up = {
            courseId:course.id,
            courseName:course.courseName,
            boughtDate:new Date().toISOString().split('T')[0],
            endDate:new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
            paymentId,
            status:"success",
            courseType: "offline",
            courseSession: "6:00 AM to 7:00 AM",
            branch: "hyd",
          }

          await updateDoc(doc(db,'students',user.id),{registeredCourses:arrayUnion(up)});
          const docSnap = await getDoc(doc(db,'performances',course.id!));
          const performance = docSnap.data()!.performanceTemplate;
          await updateDoc(doc(db,'performances',course.id!),{students:arrayUnion({studentId:user.id,studentName:user.name,...performance})})
          await updateDoc(doc(db,"regStuByCourse",course.id!),{students:arrayUnion(user.id)})
          dispatch(fetchUser(user.id));
          naviagate('/my_courses');
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };

  return (
    <div>
      <button
        className="mt-4 mb-8 w-full rounded-md bg-blue-700 hover:bg-blue-500 px-6 py-3 font-medium text-white"
        onClick={buyNow}
      >
        Join Now
      </button>
    </div>
  );
};

export default RazorPay;
