import React from 'react';
import Layout from './screens/LandingPage/Layout';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursesPage from './screens/OtherPages/CoursesPage';
import Signup from './screens/LandingPage/Signup'; // Correct import for Signup
import SignIn from './screens/LandingPage/Signin'; // Correct import for SignIn
import Form from './screens/LandingPage/Form';

const App: React.FC = () => {
  return (
    // <div className="App">
    //   <Layout />
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/course' element={<CoursesPage />} />
        {/* <Route path='/performance' element={<Performance />} /> */}
        <Route path='/joinnow' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/form'element={<Form/>}/> {/* Corrected the path */}
      </Routes>
    </Router>
  );
}

export default App;
