// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { GetUser } from '../../redux/UserSlice';
// import { UserModel } from '../../models/UserModel';

// const Reviews: React.FC = () => {
//   const reviews:any = [];

//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const handleMouseEnter = (index: number) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };
//   const navigate = useNavigate();

//   const user = useSelector(GetUser) as UserModel;

//   return (
//     <section id="dummy" className="pl-4 py-4 md:p-10 border-y-2">
//       <div className="max-w-7xl mx-auto flex flex-wrap">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0 md:mt-4">
//         <h1 className="text-4xl md:text-5xl/[3.7rem] font-bold mb-6 text-center md:text-left">
//           <span className="font-poppins bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
//             What our <br /> Customers say
//           </span>
//         </h1>
//           <p className="text-xl md:text-2xl font-semibold text-center md:text-left md:w-2/3">
//             Hear from our satisfied customers who have experienced our excellent services.
//           </p>
//           {
//             user.registeredCourses.length >0?(
//               <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-8 cursor-pointer block m-auto md:ml-20" onClick={()=>{navigate("/reviewform")}} >Give Review</button>
//             ):
//             (
//               <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-8 cursor-pointer block m-auto md:ml-20" onClick={()=>{navigate("/course?category=all")}} >Join now</button>
//             )
//           }
//         </div>
        
//         {/* Right Section */}
//         <div className="w-full md:w-1/2 mx-auto">
//         <div className="pr-6 overflow-y-scroll scrollbar"style={{ maxHeight: '470px' }}>
//         {reviews.map((review:any,index:any) => ( 
//            <div
//             key={index}
//             className={`flex flex-row mb-9 ml-[70px] ${hoveredIndex === index ? 'transform -transform duration-500 hover:translate-x-[-70px]': ''}`}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//             > 
//             <div className={`w-4 ${hoveredIndex === index ? 'bg-[#CC6C92]': 'bg-[#CACACA]'}`}></div>
//             <div className="flex items-center p-3 border-t-2 border-b-2 border-r-2 border-[#CACACA]">
//               <div>
//                 <img
//                   src={review.image}
//                   alt={review.name}
//                   className="h-20 rounded-full mr-5"
//                 />
//               </div>
//               <div className="flex-1">
//                   <h3 className="relative text-xl font-bold mb-2">{review.name}
//                      <span className={`absolute top-0 right-0 mr-4 text-5xl font-normal ${hoveredIndex === index ? 'text-[#7FC673]': 'text-[#CACACA]'}`}>&rdquo;</span>
//                   </h3>
//                 <p className="text-gray-600">{review.text}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//         </div>
//         </div>
        
//       </div>
//     </section>
//   );
// }

// export default Reviews;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';
import ReviewModel from '../../models/ReviewModel';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';

const Reviews: React.FC = () => {
  // const reviews: any = [
  //   {
  //     name: 'Tharak Reddy',
  //     image: 'https://via.placeholder.com/100x100',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //   },
  //   {
  //     name: 'sravana Jyothi',
  //     image: 'https://via.placeholder.com/100x100',
  //     text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  //   },
  //   {
  //     name: 'Chaitanya Varma',
  //     image: 'https://via.placeholder.com/100x100',
  //     text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  //   },
  //   {
  //     name: 'Tharak Reddy',
  //     image: 'https://via.placeholder.com/100x100',
  //     text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  //   },
  //   {
  //     name: 'sravana Jyothi',
  //     image: 'https://via.placeholder.com/100x100',
  //     text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  //   },
  //   {
  //     name: 'Chaitanya Varma',
  //     image: 'https://via.placeholder.com/100x100',
  //     text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
  //   },
  // ]; // Assume this is fetched from some data source

  const [reviews,setReviews] = useState<ReviewModel[]>([]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  const fetchReviews = async() => {
    const querySnapshot = await getDocs(collection(db,"Review"));
    const courses: ReviewModel[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as ReviewModel[];

    setReviews(courses);

  }

  useEffect(()=>{
    fetchReviews();
  },[]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const navigate = useNavigate();

  const user = useSelector(GetUser) as UserModel;

  return (
    <section id="dummy" className="pl-4 py-4 md:p-10 border-y-2">
      <div className="max-w-7xl max-sm:max-w-full mx-auto flex flex-wrap">
        {/* Left Section */}
        <div className="w-full md:w-1/2 pr-4 mb-10 md:mb-0 md:mt-4 ">
          <h1 className="text-4xl md:text-5xl/[3.7rem] font-bold mb-6 text-center md:text-left">
            <span className="font-poppins bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent">
              What our <br /> Customers say
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-center md:text-left md:w-2/3 max-sm:font-normal">
            Hear from our satisfied customers who have experienced our excellent services.
          </p>
          { user !=null ?user.registeredCourses.length > 0  ? (
            <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-8 cursor-pointer block m-auto md:ml-20" onClick={() => { navigate("/reviewform") }}>Give Review</button>
          ) : (
            <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-8 cursor-pointer block m-auto md:ml-20" onClick={() => { navigate("/course?category=all") }}>Join course</button>
          ): (
            <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-8 cursor-pointer block m-auto md:ml-20" onClick={() => { navigate("/login") }}>Join now</button>
          )}
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 max-sm:w-full mx-auto">
          <div className="pr-6 overflow-y-scroll scrollbar max-sm:w-full" style={{ maxHeight: '470px' }}>
            {reviews.length > 0 ? (
              reviews.map((review: ReviewModel, index: any) => (
                // <div
                //   key={index}
                //   className={`flex flex-row mb-9 ml-[70px]   ${hoveredIndex === index ? 'transform -transform duration-500 hover:translate-x-[-70px] ' : ''}`}
                //   onMouseEnter={() => handleMouseEnter(index)}
                //   onMouseLeave={handleMouseLeave}
                // >
                //   <div className={`w-3  ${hoveredIndex === index ? 'bg-[#CC6C92]' : 'bg-[#CACACA]'}`}></div>
                //   <div className="max-sm:w-full flex items-center justify-center p-3 border-t-2 border-b-2 border-r-2 border-[#CACACA] w-full">
                //     <div >
                //       <img
                //         src={review.profileImg}
                //         alt={review.name}
                //         className="h-16 w-16 rounded-full mr-5"
                //       />
                //     </div>
                //     <div className="flex-1">
                //       <h3 className="relative text-xl font-bold mb-2">{review.name}
                //         <span className={`absolute top-0 right-0 mr-4 text-5xl font-normal ${hoveredIndex === index ? 'text-[#7FC673]' : 'text-[#CACACA]'}`}>&rdquo;</span>
                //       </h3>
                //       <p className="text-gray-600">{review.description}</p>
                //     </div>
                //   </div>
                // </div>
                <div
                  key={index}
                  className={`flex flex-row mb-9 ml-[70px] max-sm:ml-0 ${hoveredIndex === index && 'transform duration-500 hover:translate-x-[-70px]'} max-sm:transform-none`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`w-3 ${hoveredIndex === index ? 'bg-[#CC6C92]' : 'bg-[#CACACA]'}`}></div>
                  <div className="max-sm:w-full flex items-center justify-center p-3 border-t-2 border-b-2 border-r-2 border-[#CACACA] w-full">
                    <div>
                      <img
                        src={review.profileImg}
                        alt={review.name}
                        className="h-16 w-16 rounded-full mr-5"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="relative text-xl font-bold mb-2">
                        {review.name}
                        <span className={`absolute top-0 right-0 mr-4 text-5xl font-normal ${hoveredIndex === index ? 'text-[#7FC673]' : 'text-[#CACACA]'}`}>&rdquo;</span>
                      </h3>
                      <p className="text-gray-600">{review.description}</p>
                    </div>
                  </div>
                </div>

              ))
            ) : (
              <div className="text-center text-xl font-semibold text-gray-600">
                No reviews yet. Be the first to share your experience!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
