// src/features/user/userSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../models/UserModel';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase_config';


interface UserState {
    User: UserModel | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed'|'no_data';
    error: string | null;
}

const initialState: UserState = {
    User: null,
    status: 'idle',
    error: null,
};

export const fetchUser = createAsyncThunk(
    // 'user/fetchUser',
    // async(id:string)=>{
    //     const user = (await getDoc(doc(db,'students',id))).data() as UserModel;
    //     return user;
    // }

    'user/fetchUser',
    async (id: string) => {
        const userDoc = await getDoc(doc(db, 'students', id));
        const userData = userDoc.data();
        
        if (!userData) {
            throw new Error("User not found");
        }
        
        const user: UserModel = {
            id: userData.id, 
            name: userData.name,
            fatherName: userData.fatherName,
            motherName: userData.motherName,
            dob: userData.dob,
            gender: userData.gender,
            address: userData.address,
            contactNo: userData.contactNo,
            schoolName: userData.schoolName,
            class: userData.class,
            hearAbout: userData.hearAbout,
            password: userData.password,
            imageUrl: userData.imageUrl,
            registeredCourses: userData.registeredCourses,
            email: userData.email,
            country: userData.country,
            feedback: userData.feedback
        };

        console.log('====================================');
        console.log(userData);
        console.log('====================================');

        const hasData = Object.values(user).some(value => value !== undefined && value !== null && value !== '');
        return hasData ? user : null;
    }
)

const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserModel>) => {
            state.User = action.payload;
        },
        clearUser: (state) => {
            state.User = null;
        },
        updateUser: (state, action: PayloadAction<Partial<UserModel>>) => {
            if (state.User) {
                state.User = { ...state.User, ...action.payload };
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserModel | null>) => {
            if (action.payload) {

                state.User = action.payload;
                state.status = 'succeeded';
                state.error = null;
            } else {

                state.User = null;
                state.status = 'no_data'; 
                state.error = 'User not found or no data available';
            }
        })
          .addCase(fetchUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as string;
          });
    }
});

export const GetUser = (state:any)=>state.user.User;

export const loading = (state:any)=>state.user.status;

export const { setUser, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
