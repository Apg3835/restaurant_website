import { configureStore } from "@reduxjs/toolkit";
import appDataSlice from "../reducer/appDataSlice";
import authSlice from "../reducer/authSlice";
const store=configureStore({
    reducer:{restaurent:appDataSlice.reducer,auth:authSlice.reducer},

})
export default store;