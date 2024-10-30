import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Courses from './Courses';  
// import Contact from './Contact';
import Reviews from './Reviews';
import Achievements from './Achievements';
import Footer from './Footer';
import CharityCarousel from './CharityCarousel';
import { db } from '../../firebase_config';
import { collection, getDocs } from 'firebase/firestore';

// import { useAppDispatch } from '../../redux/Store';
// import { fetchUser, GetUser } from '../../redux/UserSlice';
// import { useSelector } from 'react-redux';

interface text {
  smallQuote:string;
  quote:string;
  aboutUs:string;
  statsText:string;
  StudentsParticipatedInNationals:string;
  PassPercentage:string;
  YearsOfExperience:string;
}

const Layout: React.FC = () => {
  // const dispatch = useAppDispatch();

  // const user = useSelector(GetUser) ;

  // useEffect(()=>{
  //   if(user){
  //     dispatch(fetchUser(user.id))
  //   }
  // },[])


  const [data,setData] = useState<text>({
    smallQuote:'',
    quote:'',
    aboutUs:'',
    statsText:'',
    StudentsParticipatedInNationals:'',
    PassPercentage:"",
    YearsOfExperience:"",
});

useEffect(()=>{
    getData();
},[]);

const getData = async()=>{
    try {
        const querySnapshot = await getDocs(collection(db, 'aboutUs'));
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0]; // Assuming you only have one document

          setData(docData.data() as text); // Set the data in state
        }
      } catch (error) {
        console.error("Error fetching aboutUs data:", error);
      } finally {

      }
}


  return (
    <div className='bg-[#F7F8FB]'>
      <Navbar />
      <main className=""> {/* Add padding-top to avoid overlap with fixed navbar */}
        <Home data={data} />
        <div className="py-10 max-sm:py-0" id="about"> {/* Add padding-y between components */}
          <About data={data}/>
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
