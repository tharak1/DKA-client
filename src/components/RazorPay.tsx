import React from 'react';
import { db } from '../firebase_config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { CourseModel } from '../models/CourseModel';

// Define the props type
interface RazorPayProps {
  course:CourseModel
}

const RazorPay: React.FC<RazorPayProps> = ({course}) => {
  const navigate = useNavigate();

  const buyNow = async () => {
    var options = {
      key: "rzp_test_JHYaX11s6e4is0",
      key_secret: "w1ImdQ3gNSxBHonSUOYw7lZU",
      amount: parseInt((parseInt(course.price!) * 100).toString()),
      currency: "INR",
      order_receipt: 'order_rcptid_' + course.id,
      name: "sneek-shop",
      description: "for testing purpose",
      handler: async function (response: any) { // Adjust the type based on Razorpay response structure
        console.log(response);
        const paymentId = response.razorpay_payment_id;



        try {

          


        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc"
      }
    };

    var pay = new (window as any).Razorpay(options); // Adjust the type if necessary
    pay.open();
    console.log(pay);
  };

  return (
    <div>
      <button
        className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
        onClick={buyNow}
      >
        Place Order
      </button>
    </div>
  );
};

export default RazorPay;
