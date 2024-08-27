import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase_config';
import { CourseModel } from '../../models/CourseModel';
import Navbar from '../LandingPage/Navbar';
import CourseCard from '../../components/CourseCard';
import { useSelector } from 'react-redux';
import { GetUser } from '../../redux/UserSlice';
import { UserModel } from '../../models/UserModel';

const CoursesPage: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let category = searchParams.get('category');
    console.log(category);
    

    const [courses, setCourses] = useState<CourseModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchCoursesByCategory();
    }, [location.search]);

    const user = useSelector(GetUser) as UserModel;

    const fetchCoursesByCategory = async () => {
        setLoading(true);
        let q;

        if (category === 'all') {
            if(user){
                let country = user.country === 'India' ? 'India' : 'other';
                q = query(
                    collection(db, "courses"),
                    where("courseCountry", "in", [country, "all"])
                );
            }else{
                q = query(collection(db, "courses") );
            }   
        } else {
            if (user) {
                let country = user.country === 'India' ? 'India' : 'other';
                q = query(
                    collection(db, "courses"),
                    where("courseCountry", "in", [country, "all"]),
                    where("category", "==", category)
                );
            } else {
                q = query(collection(db, "courses"), where("category", "==", category));

            }
        }

        const querySnapshot = await getDocs(q);
        const courses: CourseModel[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as CourseModel[];

        setCourses(courses);
        setLoading(false);
    }

    const [searchInput, setSearchInput] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
      }
    
      const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
      }
    
      const filteredCourses = courses.filter((course: CourseModel) => {
        return (
          (selectedCategory === '' || course.category === selectedCategory) &&
          (searchInput === '' || course.courseName!.toLowerCase().includes(searchInput.toLowerCase()))
        );
      });

      const [categories, setCategories] = useState<string[]>([]);

      useEffect(() => {
        fetchCategories();
      }, []);
    
      const fetchCategories = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "categories"));
          const data = querySnapshot.docs.map((doc) => doc.data().name);
          setCategories(data);
        } catch (error) {
          console.error("Error fetching categories: ", error);
        }
      };


    

    return (
        <>
            <Navbar />
            <div className='pt-20 px-20 max-sm:px-4 w-full min-h-screen bg-slate-100 gap-3 overflow-auto'>
                <div className='w-full flex flex-col items-start mb-4'>
                    <h1 className='text-2xl font-bold'>{category === 'all' ? "Cultural Activities" :category}</h1>
                    <p>Here are your details about the {category === 'all' ? "Cultural Activities" :category}</p>
                </div>

                <div className='col-span-1 max-sm:row-span-2 mb-5 flex flex-row max-sm:flex-col max-sm:p-3'>
                    <form className="col-span-1 ">
                    <div className="flex">
                        <label htmlFor="search-category" className="sr-only">Select Category</label>
                        <select
                        id="search-category"
                        className=" inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-2 focus:outline-none"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        >
                            {category === "all"?                       
                                <>
                                <option value="">All categories</option>
                                {categories.map((obj: string) => (
                                    <option value={obj} key={obj}>{obj}</option>
                                ))}
                            </>:<option value="">{category}</option>
                            }
                        </select>
                        
                        <div className={`relative w-96`}>
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 placeholder-gray-400 focus:placeholder-gray-600"
                            placeholder="Search courses..."
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 bottom-0 p-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        </div>
                        
                    </div>
                    </form>
                </div>

                {loading ? (
                    <div className='flex w-full justify-center items-center'>
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                ) : courses.length === 0 ? (
                    <div className='flex w-full h-full justify-center items-center'>
                        <h2>No courses available</h2>
                    </div>
                ) : (
                    <div className='w-full flex flex-col space-y-5'>
                        {filteredCourses.map((obj) => (
                            <CourseCard courseDetails={obj} key={obj.id} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default CoursesPage;
