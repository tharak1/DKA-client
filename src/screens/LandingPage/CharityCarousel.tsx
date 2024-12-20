import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { CharityUploadModel } from '../../models/CourseModel';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';

export default function CharityCarousel() {
  const navigate = useNavigate();

  const [charity,setCharity] = useState<CharityUploadModel[]>([]);


  useEffect(()=>{
    fetchAchievements();
  },[]);


  const fetchAchievements = async() => {
    const querySnapshot = await getDocs(collection(db,"charityUpload"));
    const courses: CharityUploadModel[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as CharityUploadModel[];

    setCharity(courses);

  }

  return (
    <>
          <h1 className="font-poppins text-4xl font-bold bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-transparent w-full text-center text-wrap p-4">Charity</h1>

      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='w-full h-96 max-sm:h-screen'

      >

{
  charity.map((charity:CharityUploadModel)=>(
    <SwiperSlide className='text-center flex flex-col justify-end items-end w-full h-full px-10 max-sm:px-12' key={charity.id}>
    <div className='w-full h-full flex justify-center items-center max-sm:flex-col-reverse max-sm:justify-start'>
      <div className='w-1/2 h-full  p-20 flex flex-col justify-center items-center  max-sm:p-0 max-sm:w-full max-sm:justify-start max-sm:mt-10'>
        <p>{charity.description}</p>
        <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 max-sm:py-2  mt-5 cursor-pointer block " onClick={() => { navigate("/charityform") }}>Donate Now</button>
      </div>
      <div className='w-1/2 h-full flex justify-end relative max-sm:w-full max-sm:h-1/2'>
        <div className='w-1/2 h-full bg-[#BFF7FF] max-sm:hidden'></div>
        <div className='w-full max-sm:h-9/12 h-full absolute px-24 py-14  max-sm:px-0 max-sm:py-0'>
          <img src={charity.image} alt="" loading='lazy' className='w-full h-full object-contain'/>
        </div>
      </div>
    </div>
  </SwiperSlide>
  ))
}

      </Swiper>
    </>
  );
}
