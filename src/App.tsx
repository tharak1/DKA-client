// // import React, { Suspense } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import PurchasedCourses from './screens/OtherPages/PurchasedCourses';
// // import MyCoursesPage from './screens/OtherPages/MyCoursesPage';
// // import MyPerformancePage from './screens/OtherPages/MyPerformancePage';
// // import Signup from './screens/OtherPages/Signups';
// // // import Modal from './screens/OtherPages/PaymentModal';
// // import { SpeedInsights } from '@vercel/speed-insights/react';
// // import CharityForm from './screens/OtherPages/CharityForm';
// // import ReviewForm from './screens/OtherPages/ReviewForm';
// // import ProfilePage from './screens/OtherPages/ProfilePage';
// // import GiveFeedback from './screens/OtherPages/GiveFeedback';
// // import { useSelector } from 'react-redux';
// // import { GetUser } from './redux/UserSlice';
// // import { UserModel } from './models/UserModel';

// // // Lazy load components
// // const Layout = React.lazy(() => import('./screens/LandingPage/Layout'));
// // const CoursesPage = React.lazy(() => import('./screens/OtherPages/CoursesPage'));
// // const SignIn = React.lazy(() => import('./screens/OtherPages/Signin'));
// // const Form = React.lazy(() => import('./screens/OtherPages/Form'));
// // const LoginPage = React.lazy(() => import('./screens/OtherPages/LoginPage'));
// // const SignUpPage = React.lazy(() => import('./screens/OtherPages/SignUpPage'));

// // const App: React.FC = () => {

// //   const user = useSelector(GetUser) as UserModel;

// //    return (
// //     <Router>
// //       <SpeedInsights />
// //       <Suspense fallback={<div>Loading...</div>}>
// //         <Routes>
// //           <Route path="/" element={<Layout />} />
// //           <Route path="/login" element={<LoginPage />} />
// //           <Route path="/course" element={<CoursesPage />} />
// //           <Route path="/join-now" element={<SignIn />} />
// //           <Route path="/signup" element={<SignUpPage />} />
// //           <Route path="/signups" element={<Signup />} />
          
// //           <Route path="/form" element={<Form />} />
// //           <Route path="/charityform" element={<CharityForm />} />
// //           <Route path="/reviewform" element={<ReviewForm />} />
          
// //           <Route path="/my_purchases" element={<PurchasedCourses />} />
// //           <Route path="/my_courses" element={<MyCoursesPage />} />
// //           <Route path='/my_performances' element={<MyPerformancePage/>}/>
// //           <Route path='/my_profile' element={<ProfilePage/>}/>
// //           <Route path='/give_feedback' element={<GiveFeedback/>}/>

// //        </Routes>
// //       </Suspense>
// //     </Router>
// //   );
// // }

// // export default App;



// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import PurchasedCourses from './screens/OtherPages/PurchasedCourses';
// import MyCoursesPage from './screens/OtherPages/MyCoursesPage';
// import MyPerformancePage from './screens/OtherPages/MyPerformancePage';
// import Signup from './screens/OtherPages/Signups';
// import { SpeedInsights } from '@vercel/speed-insights/react';
// import CharityForm from './screens/OtherPages/CharityForm';
// import ReviewForm from './screens/OtherPages/ReviewForm';
// import ProfilePage from './screens/OtherPages/ProfilePage';
// import GiveFeedback from './screens/OtherPages/GiveFeedback';
// import { useSelector } from 'react-redux';
// import { GetUser } from './redux/UserSlice';
// import { UserModel } from './models/UserModel';
// import ResultsPage from './screens/OtherPages/ResultsPage';

// // Lazy load components
// const Layout = React.lazy(() => import('./screens/LandingPage/Layout'));
// const CoursesPage = React.lazy(() => import('./screens/OtherPages/CoursesPage'));
// const SignIn = React.lazy(() => import('./screens/OtherPages/Signin'));
// const Form = React.lazy(() => import('./screens/OtherPages/Form'));
// // const LoginPage = React.lazy(() => import('./screens/OtherPages/LoginPage'));
// // const SignUpPage = React.lazy(() => import('./screens/OtherPages/SignUpPage'));





// const App: React.FC = () => {
//   const user = useSelector(GetUser) as UserModel | null;

//   return (
//     <Router>
//       <SpeedInsights />
//       <Suspense fallback={
//         <div className='flex w-full h-screen justify-center items-center'>
//             <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
//                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
//             </svg>
//         </div>
//       }>
//         <Routes>
//           <Route path="/" element={<Layout />} />
//           <Route path="/login" element={<SignIn />} />
//           {/* <Route path="/join-now" element={<SignIn />} /> */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/signups" element={<Signup />} />
//           <Route path="/form" element={<Form />} />
//           <Route path="/charityform" element={<CharityForm />} />
//           <Route path="/course" element={<CoursesPage />} />
//           <Route path="/results" element={<ResultsPage />} />
          

//           {
//             user ? (
//               <>
//                 <Route path="/reviewform" element={<ReviewForm />} />
//                 <Route path="/my_purchases" element={<PurchasedCourses />} />
//                 <Route path="/my_courses" element={<MyCoursesPage />} />
//                 <Route path='/my_performances' element={<MyPerformancePage />} />
//                 <Route path='/my_profile' element={<ProfilePage />} />
//                 <Route path='/give_feedback' element={<GiveFeedback />} />
//               </>
//             ) : (
//               <Route path="*" element={<Navigate to="/" replace />} />
//             )
//           }
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;


// App.tsx



import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PurchasedCourses from './screens/OtherPages/PurchasedCourses';
import MyCoursesPage from './screens/OtherPages/MyCoursesPage';
import MyPerformancePage from './screens/OtherPages/MyPerformancePage';
import Signup from './screens/OtherPages/Signups';

import CharityForm from './screens/OtherPages/CharityForm';
import ReviewForm from './screens/OtherPages/ReviewForm';
import ProfilePage from './screens/OtherPages/ProfilePage';
import GiveFeedback from './screens/OtherPages/GiveFeedback';
// import { useSelector } from 'react-redux';
// import { GetUser } from './redux/UserSlice';
// import { UserModel } from './models/UserModel';
import ResultsPage from './screens/OtherPages/ResultsPage';

// Lazy load components
const Layout = React.lazy(() => import('./screens/LandingPage/Layout'));
const CoursesPage = React.lazy(() => import('./screens/OtherPages/CoursesPage'));
const SignIn = React.lazy(() => import('./screens/OtherPages/Signin'));
const Form = React.lazy(() => import('./screens/OtherPages/Form'));
// const LoginPage = React.lazy(() => import('./screens/OtherPages/LoginPage'));
// const SignUpPage = React.lazy(() => import('./screens/OtherPages/SignUpPage'));

// import ProtectedRoute from './ProtectedRoute'; // Adjust path
import { useSelector } from 'react-redux';
import { GetUser } from './redux/UserSlice';
import { UserModel } from './models/UserModel';
import ExamsPage from './screens/OtherPages/ExamsPage';

const App: React.FC = () => {
  const user = useSelector(GetUser) as UserModel | null;

  return (
    <Router>
<Suspense
  fallback={
    <div className="flex w-full h-screen justify-center items-center">
      {/* Loader */}
    </div>
  }
>
  <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/form" element={<Form />} />
    <Route path="/charityform" element={<CharityForm />} />
    
    {/* Make the /course route accessible without authentication */}
    <Route path="/course" element={<CoursesPage />} />
    <Route path="/results" element={<ResultsPage />} /> 

    {/* Authenticated routes */}
    {user ? (
      <>
        <Route path="/reviewform" element={<ReviewForm />} />
        <Route path="/my_purchases" element={<PurchasedCourses />} />
        <Route path="/my_courses" element={<MyCoursesPage />} />
        <Route path="/my_performances" element={<MyPerformancePage />} />
        <Route path="/my_profile" element={<ProfilePage />} />
        <Route path="/give_feedback" element={<GiveFeedback />} />
        <Route path="/exams" element={<ExamsPage />} />

      </>
    ) : (
      // Redirect to /login if user is not authenticated and tries to access these routes
      <Route path="*" element={<Navigate to="/" replace />} />
    )}
  </Routes>
</Suspense>

    </Router>
  );
};

export default App;
