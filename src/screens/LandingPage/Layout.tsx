import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Courses from './Courses';  
// import Contact from './Contact';
import Reviews from './Reviews';
import Achievements from './Achievements';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20"> {/* Add padding-top to avoid overlap with fixed navbar */}
        <Home />
        <div className="py-10" id="about"> {/* Add padding-y between components */}
          <About />
        </div>
        
        <div className="py-4" > {/* Add padding-y between components */}
          <Courses />
        </div>
        <div className="py-2"> {/* Add padding-y between components */}
          <Reviews />
        </div>
        <div className="py-10 "> {/* Add padding-y between components */}
          <Achievements />
        </div>
        <div className="py-10"> 
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
