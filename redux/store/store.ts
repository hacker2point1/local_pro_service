import { configureStore } from "@reduxjs/toolkit";
import {} from "process";
import authSlice from "../slice/authSlice";


const store = configureStore({
  reducer: {
    auth: authSlice,
    
  },
});


export default store;