// src/features/user/userSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../models/UserModel';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase_config';


interface UserState {
    User: UserModel | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UserState = {
    User: null,
    status: 'idle',
    error: null,
};

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async(id:string)=>{
        const user = (await getDoc(doc(db,'students',id))).data() as UserModel;
        return user;
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
          .addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserModel>) => {
            state.User = action.payload;
            state.status = 'succeeded';
            state.error = null;
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
