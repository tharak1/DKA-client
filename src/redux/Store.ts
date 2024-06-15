import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer  from "./UserSlice";

const persistConfig = {
    key:"clientRoot",
    version:1,
    storage,
}

const reducer = combineReducers({
    user:userReducer
});

const persistedReducer = persistReducer(persistConfig,reducer);


export const store = configureStore({
    reducer : persistedReducer
});



export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();



export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;