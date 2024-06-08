import React, { useState } from 'react';
import uploadImage from '../../hooks/UploadImage';
import { useLocation } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase_config';

const SignUpForm: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [uploading,setUploading] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        motherName: '',
        dob: '',
        gender: 'male',
        address: '',
        contactNo: '',
        schoolName: '',
        class: '',
        hearAbout: 'self interest',
        password: '',
        imageUrl:'',
        registeredCourses:[]
    });

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const studentId = searchParams.get('studentId');




    const handleSubmit111 = async() =>{
        setUploading(true)
        setFormData({...formData,imageUrl:await uploadImage(image!,formData.name,'student-profile')});
        console.log(studentId);
        
        const courseRef = doc(db, 'students',studentId!);
        await setDoc(courseRef,formData, { merge: true });


        setUploading(false);

    }
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            const objectURL = URL.createObjectURL(file);
            console.log("Object URL:", objectURL);
            // setFormData({...formData,imageUrl:objectURL})
        }
    };


    return (
        <>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}} required />
            </div>
            <div>
                <label>Father's Name:</label>
                <input type="text" name="fatherName" value={formData.fatherName} onChange={(e)=>{setFormData({...formData,fatherName:e.target.value})}} required />
            </div>
            <div>
                <label>Mother's Name:</label>
                <input type="text" name="motherName" value={formData.motherName} onChange={(e)=>{setFormData({...formData,motherName:e.target.value})}} required />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" name="dob" value={formData.dob} onChange={(e)=>{setFormData({...formData,dob:e.target.value})}} required />
            </div>
            <div>
                <label>Gender:</label>
                <label>
                    <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={(e)=>{setFormData({...formData,gender:e.target.value})}} />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={(e)=>{setFormData({...formData,gender:e.target.value})}} />
                    Female
                </label>
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={(e)=>{setFormData({...formData,address:e.target.value})}} required />
            </div>
            <div>
                <label>Contact Number:</label>
                <input type="tel" name="contactNo" value={formData.contactNo} onChange={(e)=>{setFormData({...formData,contactNo:e.target.value})}} required />
            </div>
            <div>
                <label>School Name:</label>
                <input type="text" name="schoolName" value={formData.schoolName} onChange={(e)=>{setFormData({...formData,schoolName:e.target.value})}} required />
            </div>
            <div>
                <label>Class:</label>
                <input type="text" name="class" value={formData.class} onChange={(e)=>{setFormData({...formData,class:e.target.value})}} required />
            </div>
            <div>
                <label>How did you hear about our academy?</label>
                <select name="hearAbout" value={formData.hearAbout} onChange={(e)=>{setFormData({...formData,hearAbout:e.target.value})}}>
                    <option value="self interest">Self Interest</option>
                    <option value="friend">Friend</option>
                    <option value="newspaper">Newspaper</option>
                </select>
            </div>
            <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {formData.imageUrl !='' && (
                <div>
                    <img src={formData.imageUrl} alt="Uploaded" />
                </div>
            )}
        </div>
            <div>
                <label>Create Password:</label>
                <input type="password" name="password" value={formData.password} onChange={(e)=>{setFormData({...formData,password:e.target.value})}} required />
            </div>
            <button className='bg-blue-500 py-2 px-4' onClick={handleSubmit111}>{uploading?"Submiting...":"Submit"}</button>
        </>
    );
}

export default SignUpForm;
