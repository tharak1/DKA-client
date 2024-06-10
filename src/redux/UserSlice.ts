// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../models/UserModel';


interface UserState {
    User: UserModel | null;
}

const initialState: UserState = {
    User: null
};

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
    }
});

export const GetUser = (state:any)=>state.user.User;

export const { setUser, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
