import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthService } from "../Components/services/apiAuthServices";

export const userSignUpAction = createAsyncThunk(
  "userSignUpAction",
  async (credential) => {
    const response = await apiAuthService.signUp(credential);
    return response;
  }
);
export const userSignInAction = createAsyncThunk(
  "userSignInAction",
  async (credential, thunk) => {
    const response = await apiAuthService.signIn(credential);
    setTimeout(() => {
      thunk.dispatch(getUserDataAction());
    }, 1000);
    return response;
  }
);
export const userForgotPasswordAction = createAsyncThunk(
  "userForgotPasswordAction",
  async (credential) => {
    const response = await apiAuthService.forgotPassword(credential);
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
    const response = await apiAuthService.updateUserData(credential);
    return response;
  }
);
