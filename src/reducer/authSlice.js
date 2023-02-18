import { createSlice } from "@reduxjs/toolkit";
import {
  getUserDataAction,
  userForgotPasswordAction,
  userSignInAction,
  userSignUpAction,
} from "./asyncAuthReducer";

const authSlice = createSlice({
  name: "user",
  initialState: {
    userSignUpData: undefined,
    userLogInData: undefined,
    userProfileData: undefined,
    isLoggedIn:false,
    
  },
  reducers: {
    userLogOut(state, action) {
      localStorage.removeItem("idToken");
      state.isLoggedIn=false;
      state.userProfileData=undefined;
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignUpAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userSignUpData = action.payload;
    });
    builder.addCase(userSignInAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userLogInData = action.payload;
      const idToken = action.payload.idToken;
      localStorage.setItem("idToken", idToken);
      state.isLoggedIn=true;
      
    });
    builder.addCase(userForgotPasswordAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
    });
    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      console.log("6 fima; fdvk", action.payload);
      state.userProfileData = action.payload;
      // state.isLoggedIn=true;
      
    });
  },
});
export default authSlice;
export const authSliceActions=authSlice.actions;
// export const selectUser = (state) => state.user.userProfileData;
