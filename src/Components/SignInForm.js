import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Avatar, TextField, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userForgotPasswordAction,
  userSignInAction,
} from "../reducer/asyncAuthReducer";

const SignInForm = () => {
  const [signInEnteredEmail, setSignInEnteredEmail] = useState("");
  const [signInEnteredPassword, setSignInEnteredPassword] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userLogInData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData !== undefined) {
      navigate('/')
    }
  }, [userData]);

  const signInEmailHandler = (e) => {
    setSignInEnteredEmail(e.target.value);
  };

  const signInPasswordHandler = (e) => {
    setSignInEnteredPassword(e.target.value);
  };
  const forgotButtonHandler = () => {
    dispatch(userForgotPasswordAction({ email: signInEnteredEmail }));
  };

  const signInButtonHandler = (e) => {
    e.preventDefault();
    const signInDetail = {
      email: signInEnteredEmail,
      password: signInEnteredPassword,
    };
    console.log(signInDetail);
    dispatch(userSignInAction(signInDetail));
  };

  const headerStyle = { margin: 0 };

  const signUpButtonHandler = () => {
    navigate("/signUp");
  };

  return (
    <Grid>
      <Paper
        elevation={20}
        sx={{ padding: "30px 20px", width: 400, margin: "20px auto" }}
      >
        <Grid align="center">
          <Avatar sx={{ backgroundColor: "#1bbd7e" }}>
            <PersonAddIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign In</h2>
          <b>
            <Typography variant="caption">
              Please fill this form to enter your account !
            </Typography>
          </b>
          <hr />
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter name"
            onChange={signInEmailHandler}
          />
          &nbsp;
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter password"
            onChange={signInPasswordHandler}
          />
          <Stack
            spacing={2}
            mt={1}
            justifyContent="space-between"
            direction="row"
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // sx={{ marginTop: 1 }}
              onClick={signInButtonHandler}
            >
              SIGN IN
            </Button>
            <Button
              variant="contained"
              color="error"
              // sx={{ marginTop: 1,hei }}
              onClick={forgotButtonHandler}
            >
              forgot password
            </Button>
          </Stack>
          <Grid sx={{ display: "flex" }}>
            <p>If you don't have any account ?</p>
            <Button variant="text" onClick={signUpButtonHandler}>
              click here
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignInForm;
