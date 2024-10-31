import React, { useState } from 'react';
import DKA from "../../../assets/DKA.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ip } from '../../../models/ip';

// navigate('/admin/online_exam_viewport', { state: { examDetails: examReport, regStu: regStuCourse }, replace: true });
// const { examDetails , regStu } = location.state as AdminOnlineExamViewPortProps;


const EnterIdScreen:React.FC = () => {
    const navigate = useNavigate();

    const [Id, setId] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);

    const verifyIdAndSendMail = async(e:React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        const url = `${ip}/api/forgotPassword/verifyMail`;
        try {
            const response = await axios.post(url, {Id});
            console.log('Response:', response.data);

            navigate("/verifyOtp", { state: { Id: Id, Email: response.data.Email }});

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error:', error);
            }
        }
        setLoading(false);
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-18 h-12 mr-2" src={DKA} alt="logo"/>
                </div>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        FIND YOUR ACCOUNT
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">

                        <p className="mb-1 text-sm font-semibold leading-tight tracking-tight text-gray-500  dark:text-white">
                            Enter your DKA Id.
                        </p>

                        <div>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="DKA00000" 
                                required={true}
                                value={Id}
                                onChange={(e) => {setId(e.target.value)}}
                            />
                        </div>

                        <p className="mb-1 text-base font-semibold leading-tight tracking-tight text-gray-500  dark:text-white">
                            You will recieve an OTP through mail to regestered mail.
                        </p>

                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={verifyIdAndSendMail}>
                            {loading?
                                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                :
                                "Continue"
                            }
                        </button>
                    
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EnterIdScreen
