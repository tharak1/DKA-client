import React from 'react';
import Layout from './screens/LandingPage/Layout';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursesPage from './screens/OtherPages/CoursesPage';
import SignIn from './screens/LandingPage/Signin';
import Signup from './screens/LandingPage/Signup';
import Form from './screens/LandingPage/Form';
import LoginPage from './screens/OtherPages/LoginPage';

const App: React.FC = () => {
  return (
    // <div className="App">
    //   <Layout />
    // </div>
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/login' element={<LoginPage/>}/> 
          <Route path='/course' element={<CoursesPage/>}/>
          <Route path='/join-now' element={<SignIn/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
