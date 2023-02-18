import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthService } from "../Components/services/apiAuthServices";

export const userSignUpAction = createAsyncThunk(
  "userSignUpAction",
  async (credential) => {
    // console.log(2, credential);
    const response = await apiAuthService.signUp(credential);
    // console.log(response, 5);
    return response;
  }
);
export const userSignInAction = createAsyncThunk(
  "userSignInAction",
  async (credential, thunk) => {
    // console.log(2, credential);
    const response = await apiAuthService.signIn(credential);
    // console.log(response, 5);
    setTimeout(()=>{thunk.dispatch(getUserDataAction())},1000)
    
    return response;
  }
);
export const userForgotPasswordAction = createAsyncThunk(
  "userForgotPasswordAction",
  async (credential) => {
    // console.log(2, credential);
  
    const response = await apiAuthService.forgotPassword(credential);
    // console.log(response, 5);
    return response;
  }
);
export const getUserDataAction = createAsyncThunk(
  "getUserDataAction",
  async () => {
    console.log(2);
    const response = await apiAuthService.getUserData();
    console.log("this is data", response, 5);
    return response;
  }
);
export const updateUserProfileAction = createAsyncThunk(
  "updateUserProfileAction",
  async (credential) => {
    // console.log(2,credential);
    const response = await apiAuthService.updateUserData(credential);
    // console.log("this is data", response, 5);
    return response;
  }
);

