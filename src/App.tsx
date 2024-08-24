// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PurchasedCourses from './screens/OtherPages/PurchasedCourses';
// import MyCoursesPage from './screens/OtherPages/MyCoursesPage';
// import MyPerformancePage from './screens/OtherPages/MyPerformancePage';
// import Signup from './screens/OtherPages/Signups';
// // import Modal from './screens/OtherPages/PaymentModal';
// import { SpeedInsights } from '@vercel/speed-insights/react';
// import CharityForm from './screens/OtherPages/CharityForm';
// import ReviewForm from './screens/OtherPages/ReviewForm';
// import ProfilePage from './screens/OtherPages/ProfilePage';
// import GiveFeedback from './screens/OtherPages/GiveFeedback';
// import { useSelector } from 'react-redux';
// import { GetUser } from './redux/UserSlice';
// import { UserModel } from './models/UserModel';

// // Lazy load components
// const Layout = React.lazy(() => import('./screens/LandingPage/Layout'));
// const CoursesPage = React.lazy(() => import('./screens/OtherPages/CoursesPage'));
// const SignIn = React.lazy(() => import('./screens/OtherPages/Signin'));
// const Form = React.lazy(() => import('./screens/OtherPages/Form'));
// const LoginPage = React.lazy(() => import('./screens/OtherPages/LoginPage'));
// const SignUpPage = React.lazy(() => import('./screens/OtherPages/SignUpPage'));

// const App: React.FC = () => {

//   const user = useSelector(GetUser) as UserModel;

//    return (
//     <Router>
//       <SpeedInsights />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Layout />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/course" element={<CoursesPage />} />
//           <Route path="/join-now" element={<SignIn />} />
//           <Route path="/signup" element={<SignUpPage />} />
//           <Route path="/signups" element={<Signup />} />
          
//           <Route path="/form" element={<Form />} />
//           <Route path="/charityform" element={<CharityForm />} />
//           <Route path="/reviewform" element={<ReviewForm />} />
          
//           <Route path="/my_purchases" element={<PurchasedCourses />} />
//           <Route path="/my_courses" element={<MyCoursesPage />} />
//           <Route path='/my_performances' element={<MyPerformancePage/>}/>
//           <Route path='/my_profile' element={<ProfilePage/>}/>
//           <Route path='/give_feedback' element={<GiveFeedback/>}/>

//        </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;



import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PurchasedCourses from './screens/OtherPages/PurchasedCourses';
import MyCoursesPage from './screens/OtherPages/MyCoursesPage';
import MyPerformancePage from './screens/OtherPages/MyPerformancePage';
import Signup from './screens/OtherPages/Signups';
import { SpeedInsights } from '@vercel/speed-insights/react';
import CharityForm from './screens/OtherPages/CharityForm';
import ReviewForm from './screens/OtherPages/ReviewForm';
import ProfilePage from './screens/OtherPages/ProfilePage';
import GiveFeedback from './screens/OtherPages/GiveFeedback';
import { useSelector } from 'react-redux';
import { GetUser } from './redux/UserSlice';
import { UserModel } from './models/UserModel';

// Lazy load components
const Layout = React.lazy(() => import('./screens/LandingPage/Layout'));
const CoursesPage = React.lazy(() => import('./screens/OtherPages/CoursesPage'));
const SignIn = React.lazy(() => import('./screens/OtherPages/Signin'));
const Form = React.lazy(() => import('./screens/OtherPages/Form'));
const LoginPage = React.lazy(() => import('./screens/OtherPages/LoginPage'));
const SignUpPage = React.lazy(() => import('./screens/OtherPages/SignUpPage'));





const App: React.FC = () => {
  const user = useSelector(GetUser) as UserModel | null;

  return (
    <Router>
      <SpeedInsights />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join-now" element={<SignIn />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signups" element={<Signup />} />
          <Route path="/form" element={<Form />} />
          <Route path="/charityform" element={<CharityForm />} />
          <Route path="/course" element={<CoursesPage />} />

          {
            user ? (
              <>
                <Route path="/reviewform" element={<ReviewForm />} />
                <Route path="/my_purchases" element={<PurchasedCourses />} />
                <Route path="/my_courses" element={<MyCoursesPage />} />
                <Route path='/my_performances' element={<MyPerformancePage />} />
                <Route path='/my_profile' element={<ProfilePage />} />
                <Route path='/give_feedback' element={<GiveFeedback />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" replace />} />
            )
          }
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
