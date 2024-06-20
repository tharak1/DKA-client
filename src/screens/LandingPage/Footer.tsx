import React from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

interface Props {
  // Add any props you need here
}

const Footer: React.FC<Props> = () => {
  return (
    <div className="flex flex-wrap justify-between space-y-4 p-10 m-1">
      {/* First part */}
      <div className="w-full md:w-auto md:flex-grow md:mr-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500  to-green-600 bg-clip-text text-transparent">Get Connected <br></br>To Us.</h1>
        <p className="text-gray-600 text-2xl mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed libero <br></br>sit amet justo luctus auctor.Lorem ipsum<br></br> dolor sit amet, consectetur adipiscing elit. Duis sed libero <br></br>sit amet justo luctus auctor.</p>
      </div>

      {/* Second part */}
      <div className="w-full md:w-auto md:flex-grow md:mr-8">
        <h2 className="text-2xl font-bold mb-2">Accounts</h2>
        <div className="flex flex-col space-y-2">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-xl">Login</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-xl">Sign Up</a>
        </div>
      </div>

      {/* Third part */}
      <div className="w-full md:w-auto md:flex-grow md:mr-8">
        <h2 className="text-2xl font-bold mb-2">Company</h2>
        <p className="text-gray-600 text-xl">About</p>
        <p className="text-gray-600 text-xl">Privacy </p>
        <p className="text-gray-600 text-xl">Policy Terms</p>
      </div>

      {/* Fourth part */}
      <div className="w-full md:w-auto md:flex-grow">
        <h3 className="text-2xl font-bold mb-2">Contact</h3>
        <div className="flex flex-col space-y-2 text-gray-600">
          <div className="flex items-center space-x-2">
            <FaWhatsapp />
            <span className='text-xl'>+91 83740 68550</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span className='text-xl'>info.taycoon@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin />
            <span className='text-xl'>Linkedin</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaInstagram />
            <span className='text-xl'>Instagram</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaTwitter />
            <span className='text-xl'>Twitter</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaFacebook />
            <span className='text-xl'>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
