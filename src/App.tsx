import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PurchasedCourses from './screens/OtherPages/PurchasedCourses';
import MyCoursesPage from './screens/OtherPages/MyCoursesPage';
import MyPerformancePage from './screens/OtherPages/MyPerformancePage';
import Signup from './screens/OtherPages/Signups';
// import Modal from './screens/OtherPages/PaymentModal';
import PaymentModal from './screens/OtherPages/PaymentModal';
import PaymentBeforeModal from './screens/OtherPages/PaymentBeforeModal';


// Lazy load components
const Layout = React.lazy(() => import('./screens/LandingPage/Layout'));
const CoursesPage = React.lazy(() => import('./screens/OtherPages/CoursesPage'));
const SignIn = React.lazy(() => import('./screens/OtherPages/Signin'));
const Form = React.lazy(() => import('./screens/OtherPages/Form'));
const LoginPage = React.lazy(() => import('./screens/OtherPages/LoginPage'));
const SignUpPage = React.lazy(() => import('./screens/OtherPages/SignUpPage'));

const App: React.FC = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
   // Function to open the modal
  const openPaymentModal = () => setPaymentModalOpen(true);
  // Function to close the modal
  const closePaymentModal = () => setPaymentModalOpen(false);

  const [isPaymentBeforeModalOpen, setPaymentBeforeModalOpen] = useState(false);
  // Function to open the payment before modal
  const openPaymentBeforeModal = () => setPaymentBeforeModalOpen(true);
  // Function to close the payment before modal
  const closePaymentBeforeModal = () => setPaymentBeforeModalOpen(false);

   return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/course" element={<CoursesPage />} />
          <Route path="/join-now" element={<SignIn />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signups" element={<Signup />} />
          
          <Route path="/form" element={<Form />} />
          <Route path="/my_purchases" element={<PurchasedCourses />} />
          <Route path="/my_courses" element={<MyCoursesPage />} />
          <Route path='/my_performances' element={<MyPerformancePage/>}/>
          <Route path='/modal' element={<div><button onClick={openPaymentModal}>Open Payment Modal</button></div>}/>
          <Route path="/payment-before-modal" element={<div><button onClick={openPaymentBeforeModal}>Open Payment Before Modal</button></div>} />
        </Routes>
        <PaymentModal 
          isOpen={isPaymentModalOpen} 
          onClose={closePaymentModal}
          studentName="Chaitanya Varma"
          mobileNumber="1234567899"
          email="djbvkudfvbd@gmail.com"
          className="Kuchipudi"
          classMode="Offline class"
          classSession="Session 2 (6pm to 8pm)"
          branch="Branch @1"
          totalAmount={6000}
          imageUrl="https://images.theconversation.com/files/430015/original/file-20211103-27-1gojlp9.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" // Replace with your actual image URL
        />
        {/* payment before model */}
        <PaymentBeforeModal
          isOpen={isPaymentBeforeModalOpen}
          onClose={closePaymentBeforeModal}
          studentName="Chaitanya Varma"
          mobileNumber="1234567899"
          email="djbvkudfvbd@gmail.com"
          className="Kuchipudi"
          classMode="Offline class"
          classSession="Session 2 (6pm to 8pm)"
          branch="Music" // Default branch value
          totalAmount={6000}
          imageUrl="https://images.theconversation.com/files/430015/original/file-20211103-27-1gojlp9.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
        />

      </Suspense>
    </Router>
  );
}

export default App;
