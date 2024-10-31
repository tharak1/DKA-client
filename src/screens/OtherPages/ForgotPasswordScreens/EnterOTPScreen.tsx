import React, { useState, useRef, useEffect } from 'react';
import DKA from "../../../assets/DKA.png";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ip } from '../../../models/ip';
import NotificationModal from '../../../components/NotificationModal';
import { useAppDispatch } from '../../../redux/Store';
import { fetchUser } from '../../../redux/UserSlice';


interface EnterOTPScreenProps {
    Id: string;
    Email: string;
}

const EnterOTPScreen: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { Id, Email } = location.state as EnterOTPScreenProps;

    const [otp, setOtp] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);
    const [notification,setNotification] = useState({
        heading:"",
        body:""
    })
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(60); 
    const [canResend, setCanResend] = useState<boolean>(false);

    const open = () =>{
        setIsOpen(true);
    }

    const close = () =>{
        setIsOpen(false);
    }

    const [isOpen1,setIsOpen1] = useState<boolean>(false);

    const open1 = () =>{
        setIsOpen1(true);
    }

    const close1 = () =>{
        setIsOpen1(false);
    }

    const navigateToHome = async() =>{
        await dispatch(fetchUser(Id));
        navigate('/');
    }

    const navigateToChangePassword = async() => {
        navigate('/changePassword', { state: { Id: Id }});
    }

    const inputsRef = useRef<HTMLInputElement[]>([]);

    const handleChange = (index: number, value: string) => {
        const newOtp = otp.split('');
        newOtp[index] = value; 
        setOtp(newOtp.join(''));

        if (value && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === 'Backspace' && !otp[index]) {
            if (index > 0) {
                inputsRef.current[index - 1].focus();
            }
        }
    };

    const verifyOtp = async(e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const url = `${ip}/api/forgotPassword/verifyOTP`;
        try {
            const response = await axios.post(url, {Id,responseOTP:otp});
            console.log('Response:', response.data);

            if(response.data.Message === "OTP verified"){

                setNotification({
                    heading:"Success",
                    body:"Want to login or change password."
                });
                open();
            }else{
                setNotification({
                    heading:"Failed",
                    body:"Wrong Otp check and submit again."
                });
                open1();
            }

            

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error:', error);
            }
        }

        setLoading(false);
    }


    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const handleResend = async(e:React.FormEvent) => {
        e.preventDefault
        const url = `${ip}/api/forgotPassword/verifyMail`;
        try {
            const response = await axios.post(url, {Id});
            console.log('Response:', response.data);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error:', error);
            }
        }
        setTimer(60);
        setCanResend(false);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 max-sm:px-2 py-8 mx-auto h-screen lg:py-0">
                <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-18 h-12 mr-2" src={DKA} alt="logo" />
                </div>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Email Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>We have sent a code to your email {Email} with Id {Id}</p>
                        </div>
                    </div>

                    <div>
                        <form >
                            <div className="flex flex-col space-y-12">
                                <div className="flex mt-6 flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <div className="w-12 h-12" key={index}>
                                            <input
                                                className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-500 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                type="text"
                                                maxLength={1} 
                                                value={otp[index] || ''} 
                                                onChange={(e) => handleChange(index, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                ref={(el) => (inputsRef.current[index] = el!)}
                                                required={true}
                                            />
                                        </div>
                                    ))}
                                </div>

                                

                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            onClick={verifyOtp}
                                        >
                                            {
                                                loading?
                                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                </svg>
                                                :"Verify OTP"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                                        {timer > 0 ? (
                                            <p className="text-gray-400">Resend OTP in {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</p>
                                        ) : (
                                            <button
                                                className="text-blue-600 hover:underline"
                                                onClick={handleResend}
                                                disabled={!canResend}
                                            >
                                                Resend OTP
                                            </button>
                                        )}
                                    </div>
                    </div>
                </div>
            </div>

            <NotificationModal isOpen = {isOpen1} onClose={close1} heading={notification.heading} body={notification.body} type='none'/>


            <NotificationModal isOpen = {isOpen} onClose={close} heading={notification.heading} body={notification.body} type='emailverification' type1='Change Password' ActionFunction={navigateToHome} ActionFunction2={navigateToChangePassword}/>
        </section>
    );

}

export default EnterOTPScreen;
