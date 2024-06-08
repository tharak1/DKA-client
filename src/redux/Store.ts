import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const persistConfig = {
    key:"root",
    version:1,
    storage,
}

const reducer = combineReducers({

});

const persistedReducer = persistReducer(persistConfig,reducer);


export const store = configureStore({
    reducer : persistedReducer
});



export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();



export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;