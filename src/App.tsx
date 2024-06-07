import React from 'react';
import Layout from './screens/LandingPage/Layout';
import './App.css';
import {BrowserRouter as Router,Route , Routes} from 'react-router-dom'
import CoursesPage from './screens/OtherPages/CoursesPage';
import LoginPage from './screens/OtherPages/LoginPage';
import SignUpForm from './screens/OtherPages/FormPage';
import SignUpPage from './screens/OtherPages/SignUpPage';

const App: React.FC = () => {
  return (
    // <div className="App">
    //   <Layout />
    // </div>
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/course' element={<CoursesPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signUp' element={<SignUpPage/>}/>

          <Route path='/Sign-up-form' element={<SignUpForm/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
