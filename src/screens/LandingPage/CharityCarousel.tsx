import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export default function CharityCarousel() {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='w-full h-96 max-sm:h-screen'

      >
        <SwiperSlide className='text-center flex flex-col justify-end items-end w-full h-full px-10 max-sm:px-12'>
          <div className='w-full h-full flex justify-center items-center max-sm:flex-col-reverse max-sm:justify-start'>
            <div className='w-1/2 h-full  p-20 flex flex-col justify-center items-center max-sm:p-0 max-sm:w-full max-sm:justify-start'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facere eligendi nobis totam. Quidem harum quos sint laudantium ab quasi quas temporibus fugit error rerum porro, iure quam odio nihil necessitatibus voluptas nostrum perspiciatis culpa! Consectetur voluptate harum rerum temporibus numquam sapiente magnam. Atque id nostrum eius nemo ab odio!</p>
              <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-5 cursor-pointer block " onClick={() => { navigate("/charityform") }}>Donate Now</button>
            </div>
            <div className='w-1/2 h-full flex justify-end relative max-sm:w-full'>
              <div className='w-1/2 h-full bg-[#BFF7FF] max-sm:hidden'></div>
              <div className='w-full h-full absolute px-24 py-14 max-sm:px-0 max-sm:py-0'>
                <img src="https://www.dadabhagwan.org/media/1993/1-charity-benefits-of-charity.jpg" alt="" className='w-full h-full object-contain'/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='text-center flex flex-col justify-end items-end w-full h-full px-10 max-sm:px-12'>
          <div className='w-full h-full flex justify-center items-center max-sm:flex-col-reverse max-sm:justify-start'>
            <div className='w-1/2 h-full  p-20 flex flex-col justify-center items-center max-sm:p-0 max-sm:w-full max-sm:justify-start'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facere eligendi nobis totam. Quidem harum quos sint laudantium ab quasi quas temporibus fugit error rerum porro, iure quam odio nihil necessitatibus voluptas nostrum perspiciatis culpa! Consectetur voluptate harum rerum temporibus numquam sapiente magnam. Atque id nostrum eius nemo ab odio!</p>
              <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-5 cursor-pointer block " onClick={() => { navigate("/charityform") }}>Donate Now</button>
            </div>
            <div className='w-1/2 h-full flex justify-end relative max-sm:w-full'>
              <div className='w-1/2 h-full bg-[#BFF7FF] max-sm:hidden'></div>
              <div className='w-full h-full absolute px-24 py-14 max-sm:px-0 max-sm:py-0'>
                <img src="https://www.dadabhagwan.org/media/1993/1-charity-benefits-of-charity.jpg" alt="" className='w-full h-full object-contain'/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='text-center flex flex-col justify-end items-end w-full h-full px-10 max-sm:px-12'>
          <div className='w-full h-full flex justify-center items-center max-sm:flex-col-reverse max-sm:justify-start'>
            <div className='w-1/2 h-full  p-20 flex flex-col justify-center items-center max-sm:p-0 max-sm:w-full max-sm:justify-start'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facere eligendi nobis totam. Quidem harum quos sint laudantium ab quasi quas temporibus fugit error rerum porro, iure quam odio nihil necessitatibus voluptas nostrum perspiciatis culpa! Consectetur voluptate harum rerum temporibus numquam sapiente magnam. Atque id nostrum eius nemo ab odio!</p>
              <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-5 cursor-pointer block " onClick={() => { navigate("/charityform") }}>Donate Now</button>
            </div>
            <div className='w-1/2 h-full flex justify-end relative max-sm:w-full'>
              <div className='w-1/2 h-full bg-[#BFF7FF] max-sm:hidden'></div>
              <div className='w-full h-full absolute px-24 py-14 max-sm:px-0 max-sm:py-0'>
                <img src="https://www.dadabhagwan.org/media/1993/1-charity-benefits-of-charity.jpg" alt="" className='w-full h-full object-contain'/>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='text-center flex flex-col justify-end items-end w-full h-full px-10 max-sm:px-12'>
          <div className='w-full h-full flex justify-center items-center max-sm:flex-col-reverse max-sm:justify-start'>
            <div className='w-1/2 h-full  p-20 flex flex-col justify-center items-center max-sm:p-0 max-sm:w-full max-sm:justify-start'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facere eligendi nobis totam. Quidem harum quos sint laudantium ab quasi quas temporibus fugit error rerum porro, iure quam odio nihil necessitatibus voluptas nostrum perspiciatis culpa! Consectetur voluptate harum rerum temporibus numquam sapiente magnam. Atque id nostrum eius nemo ab odio!</p>
              <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-5 cursor-pointer block " onClick={() => { navigate("/charityform") }}>Donate Now</button>
            </div>
            <div className='w-1/2 h-full flex justify-end relative max-sm:w-full'>
              <div className='w-1/2 h-full bg-[#BFF7FF] max-sm:hidden'></div>
              <div className='w-full h-full absolute px-24 py-14 max-sm:px-0 max-sm:py-0'>
                <img src="https://www.dadabhagwan.org/media/1993/1-charity-benefits-of-charity.jpg" alt="" className='w-full h-full object-contain'/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center flex flex-col justify-end items-end w-full h-full px-10 max-sm:px-12'>
          <div className='w-full h-full flex justify-center items-center max-sm:flex-col-reverse max-sm:justify-start'>
            <div className='w-1/2 h-full  p-20 flex flex-col justify-center items-center max-sm:p-0 max-sm:w-full max-sm:justify-start'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facere eligendi nobis totam. Quidem harum quos sint laudantium ab quasi quas temporibus fugit error rerum porro, iure quam odio nihil necessitatibus voluptas nostrum perspiciatis culpa! Consectetur voluptate harum rerum temporibus numquam sapiente magnam. Atque id nostrum eius nemo ab odio!</p>
              <button className="bg-[#b9ddf5] text-black bg-gradient-to-t from-[#F5E6F0] to-[#DDF2F9] text-lg font-bold py-4 px-5 mt-5 cursor-pointer block " onClick={() => { navigate("/charityform") }}>Donate Now</button>
            </div>
            <div className='w-1/2 h-full flex justify-end relative max-sm:w-full'>
              <div className='w-1/2 h-full bg-[#BFF7FF] max-sm:hidden'></div>
              <div className='w-full h-full absolute px-24 py-14 max-sm:px-0 max-sm:py-0'>
                <img src="https://www.dadabhagwan.org/media/1993/1-charity-benefits-of-charity.jpg" alt="" className='w-full h-full object-contain'/>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
