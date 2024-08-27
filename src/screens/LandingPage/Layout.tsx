import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Courses from './Courses';  
// import Contact from './Contact';
import Reviews from './Reviews';
import Achievements from './Achievements';
import Footer from './Footer';
import CharityCarousel from './CharityCarousel';
// import { useAppDispatch } from '../../redux/Store';
// import { fetchUser, GetUser } from '../../redux/UserSlice';
// import { useSelector } from 'react-redux';

const Layout: React.FC = () => {
  // const dispatch = useAppDispatch();

  // const user = useSelector(GetUser) ;

  // useEffect(()=>{
  //   if(user){
  //     dispatch(fetchUser(user.id))
  //   }
  // },[])


  return (
    <div className='bg-[#F7F8FB]'>
      <Navbar />
      <main className=""> {/* Add padding-top to avoid overlap with fixed navbar */}
        <Home />
        <div className="py-10 max-sm:py-0" id="about"> {/* Add padding-y between components */}
          <About />
        </div>
        <div className="py-4" > {/* Add padding-y between components */}
          <Courses />
        </div>
        <div className="py-2"> {/* Add padding-y between components */}
          <Reviews />
        </div>
        <div className="sm:py-10 "> {/* Add padding-y between components */}
          <Achievements />
        </div>
        <div className="py-12 "> {/* Add padding-y between components */}
          <CharityCarousel />
        </div>
        <div className="sm:pt-10" id = "footer"> 
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
