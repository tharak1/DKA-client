import React from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

interface Props {
  // Add any props you need here
}

const Footer: React.FC<Props> = () => {
  return (
    <div className="flex flex-wrap justify-between space-y-4 p-10 max-sm:p-4 m-1 bg-footer bg-cover">
      {/* First part */}
      <div className="w-full md:w-auto md:flex-grow md:mr-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500  to-green-600 bg-clip-text text-transparent">Get Connected <br></br>To Us.</h1>
        <p className="text-gray-600 text-2xl mt-5 max-sm:font-normal max-sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed libero <br></br>sit amet justo luctus auctor.Lorem ipsum<br></br> dolor sit amet, consectetur adipiscing elit. Duis sed libero <br></br>sit amet justo luctus auctor.</p>
      </div>

      {/* Second part */}

      {/* Third part */}
      {/* <div className="w-full md:w-auto md:flex-grow md:mr-8">
        <h2 className="text-2xl font-bold mb-2">Company</h2>
        <p className="text-gray-600 text-xl max-sm:text-lg">About</p>
        <p className="text-gray-600 text-xl max-sm:text-lg">Privacy </p>
        <p className="text-gray-600 text-xl max-sm:text-lg">Policy Terms</p>
      </div> */}

      {/* Fourth part */}
      <div className="w-full md:w-auto md:flex-grow">
        <h3 className="text-2xl font-bold mb-2">Contact</h3>
        <div className="flex flex-col space-y-2 text-gray-600">
          <div className="flex items-center space-x-2">
            <FaWhatsapp />
            <span className='text-xl max-sm:text-lg'>+91 79898 33031</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span className='text-xl max-sm:text-lg'>info.DKA@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin />
            <span className='text-xl max-sm:text-lg'>Linkedin</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaInstagram />
            <span className='text-xl max-sm:text-lg'>Instagram</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaTwitter />
            <span className='text-xl max-sm:text-lg'>Twitter</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaFacebook />
            <span className='text-xl max-sm:text-lg'>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
