import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Avatar, TextField, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { userSignUpAction } from "../reducer/asyncAuthReducer";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const signInbuttonHandler = () => {
    navigate("/signIn");
  };

  const dispatch = useDispatch();
  const [enteredEmail, setEnterdEmail] = useState("");
  const [enteredPassword, setEnterdPassword] = useState("");
  const eneterdEmailHandler = (e) => {
    setEnterdEmail(e.target.value);
  };
  const enteredPasswordHandler = (e) => {
    setEnterdPassword(e.target.value);
  };
  const signUpButtonHandler = (e) => {
    e.preventDefault();
    const signUpDetail = {
      email: enteredEmail,
      password: enteredPassword,
    };
    dispatch(userSignUpAction(signUpDetail));
    setEnterdEmail("");
    setEnterdPassword("");
    navigate("/signIn");
    console.log(1);
  };

  const headerStyle = { margin: 0 };

  return (
    <Grid>
      <Paper
        elevation={20}
        sx={{ padding: "30px 20px", width: 400, margin: "20px auto" }}
      >
        <Grid align="center">
          <Avatar sx={{ backgroundColor: "red" }}>
            <PersonAddIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <b>
            <Typography variant="caption">
              Please fill this form to create an account !
            </Typography>
          </b>
          <hr />
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter email"
            onChange={eneterdEmailHandler}
            value={enteredEmail}
          />
          &nbsp;
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter password"
            onChange={enteredPasswordHandler}
            value={enteredPassword}
          />
          <Stack spacing={2} direction="row">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 1 }}
              onClick={signUpButtonHandler}
            >
              SIGN UP
            </Button>
          </Stack>
          <Grid sx={{ display: "flex" }}>
            <p>Already have any account ?</p>&nbsp;
            <p
              style={{ cursor: "pointer", color: "blue" }}
              onClick={signInbuttonHandler}
            >
              Click Here
            </p>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUpForm;
