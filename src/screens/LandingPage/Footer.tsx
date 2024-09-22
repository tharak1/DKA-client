import React from 'react';
import { FaWhatsapp, FaEnvelope,  FaInstagram } from 'react-icons/fa';

interface Props {
  // Add any props you need here
}

const Footer: React.FC<Props> = () => {
  return (
    <div className="flex flex-row flex-wrap justify-end space-y-4 p-10 max-sm:p-4 m-1 bg-footer bg-cover">
     
      <div className="w-full md:w-auto md:flex-grow md:mr-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500  to-green-600 bg-clip-text text-transparent">Get Connected <br></br>With Us.</h1>
      
      </div>

      
 

      {/* Fourth part */}
      <div className="w-full md:w-auto md:flex-grow text-end pr-[100px]">
        <h3 className="text-2xl font-bold mb-2 pr-[120px] max-sm:pr-[109px]">Contact</h3>
        <div className="flex flex-col space-y- text-gray-600">
          <div className="flex items-center justify-end space-x-1">
            <FaWhatsapp />
            <span className='text-xl pr-[35px] max-sm:text-lg max-sm:pr-[41px]'>+91 90101 95454</span>
          </div>
          <div className="flex items-center justify-end space-x-1">
            <FaEnvelope />
            <span className='text-xl pr-[2px] max-sm:text-lg max-sm:pr-[13px]'>info.DKA@gmail.com</span>
          </div>
         
          {/* <a href="https://www.instagram.com/divya_kala_academy?igsh=MW1wcmRhMmJuanZpbA==">
            <div className="flex items-center space-x-2">
              <FaInstagram />
              <span className='text-xl max-sm:text-lg'>Instagram</span>
            </div>
          </a> */}
          <a
            href="https://www.instagram.com/divya_kala_academy?igsh=MW1wcmRhMmJuanZpbA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-end space-x-2">
              <FaInstagram />
              <span className='text-xl pr-[98px] max-sm:text-lg'>Instagram</span>
            </div>
          </a>

          
        </div>
      </div>
    </div>
  );
}

export default Footer;
