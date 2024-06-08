import React from 'react';
import Layout from './screens/LandingPage/Layout';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursesPage from './screens/OtherPages/CoursesPage';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
