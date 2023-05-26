import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

import { useSelector, useDispatch } from "react-redux";
import { appDataAction } from "../reducer/appDataSlice";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "50%",
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cart() {
  const cartItem = useSelector((state) => state.restaurent.cartItems);
  console.log(cartItem)
  const userData = useSelector((state) => state.auth.userProfileData);
  const restaurantName = useSelector(
    (state) => state.restaurent.restaurantName
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mealsList = useSelector((state) => state.restaurent.mealsCountry);
  const [totalAmounts, setTotalAmounts] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const date = new Date(); // get current date and time
  const day = date.getDate(); // get day of the month (1-31)
  const month = date.toLocaleString("default", { month: "short" }); // get month abbreviation (Jan, Feb, etc.)
  const year = date.getFullYear(); // get four-digit year
  const hour = date.getHours(); // get hour (0-23)
  const minute = date.getMinutes(); // get minute (0-59)
  const ampm = hour >= 12 ? "P.M." : "A.M."; // determine AM/PM
  const hour12 = hour % 12 || 12; // convert to 12-hour format
  const time = `${hour12}:${minute}${ampm}`; // format time as "hh:mmAM/PM"
  const formattedDate = `${day} ${month} ${year} ${time}`; // format date as "day month year hh:mmAM/PM"

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (cartItem.length !== 0) {
      totalAmount();
    }

    return;
  }, [cartItem]);
  const restaurantOrderHandler = (name, date, amount, myorderArr) => {
    dispatch(
      appDataAction.addItemsToMyOrderList({
        name,
        date,
        amount,
        myorderArr,
      })
    );
    navigate("/confirmorderpage");
  };
  const signInFormOpenHandler = () => {
    navigate("/signIn");
  };
  const homePageHandler = () => {
    navigate("/");
  };

  console.log(formattedDate); // output: "12 Nov 2023 3:36P.M."

  const totalAmount = () => {
    const amountOfEachFoodItem = cartItem.map((item) => {
      return item.quantity * item.price;
    });
    const total = amountOfEachFoodItem.reduce((previous, current) => {
      return previous + current;
    });
    setTotalAmounts(total.toFixed(2));
  };

  console.log(cartItem);

  const incrementButtonHandler = (item) => {
    console.log(item);
    dispatch(appDataAction.increment({ item: item,name:mealsList.name}));
  };
  const decrementButtonHandler = (item) => {
    dispatch(appDataAction.decrement(item));
  };
  return (
    <div>
      {cartItem.length === 0 ? (
        <Paper
          elevation={50}
          sx={{
            padding: "30px 20px",
            width: 493,
            //  height: 8,
            margin: "20px auto",
            marginTop:"8rem",
            boxShadow: "5px 5px 5px #353738",
            backgroundColor: "#e8e4e3",
            border: 3,
            borderColor: "black",
          }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Cart is empty
          </h1>
          <button
            style={{
              width: "80%",
              height: 35,
              border: 0,
              borderRadius: "10px",
              marginLeft: "50px",
              color: "white",
              backgroundColor: "black",
            }}
            onClick={homePageHandler}
          >
            <strong>HOME</strong>
          </button>
        </Paper>
      ) : (
        <div style={{marginTop:"5rem"}}>
          {cartItem.map((item) => (
            <Paper
              key={item.id}
              elevation={50}
              sx={{
                border: 3,
                p: 2,
                margin: "auto",
                marginTop: 0.5,
                maxWidth: 500,
                flexGrow: 1,

                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" sx={{ border: 1 }} src={item.imageurl} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                        sx={{ mt: 3, fontSize: "20px" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom></Typography>
                      <Typography variant="body2" color="text.secondary">
                        {}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <button
                        onClick={() => decrementButtonHandler(item)}
                        style={{
                          backgroundColor: "#575654",
                          color: "whitesmoke",
                          height: "30px",
                          width: "40px",
                          borderRadius: "5px",
                          fontWeight: "bolder",
                          fontSize: "15px",
                          border: 0,
                          boxShadow: "4px 4px 4px #c9c8c5",
                        }}
                      >
                        -
                      </button>
                      &nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;
                      <button
                        onClick={() => incrementButtonHandler(item)}
                        style={{
                          backgroundColor: "#575654",
                          color: "whitesmoke",
                          height: "30px",
                          width: "40px",
                          borderRadius: "5px",
                          fontWeight: "bolder",
                          fontSize: "15px",
                          border: 0,
                          boxShadow: "4px 4px 4px #c9c8c5",
                        }}
                      >
                        +
                      </button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" component="div">
                      ${item.price}x{item.quantity}=$
                      {(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
          <div>
            <Box sx={{ mt: -1.9 }}>
              <Paper
                elevation={50}
                sx={{
                  padding: "30px 20px",
                  width: 493,
                  height: 8,
                  margin: "20px auto",
                  boxShadow: "5px 5px 5px #353738",
                  backgroundColor: "#62f060",
                  border: 3,
                  borderColor: "#054f05",
                }}
              >
                <Typography
                  sx={{ fontSize: 25, textAlign: "center", mt: -1.5 }}
                >
                  Total Amounts=${totalAmounts}
                </Typography>
              </Paper>
            </Box>
          </div>
          {userData !== undefined ? (
            <div>
              <Box sx={{ mt: -1.9 }}>
                <Paper
                  elevation={50}
                  sx={{
                    padding: "30px 20px",
                    width: 493,
                    height: 8,
                    margin: "20px auto",
                    boxShadow: "5px 5px 5px #353738",
                    backgroundColor: "#47c1ed",
                    border: 3,
                    borderColor: "#057096",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 25, textAlign: "center", mt: -1.5 }}
                    onClick={() =>
                      restaurantOrderHandler(
                        restaurantName,
                        formattedDate,
                        totalAmounts,
                        cartItem
                      )
                    }
                  >
                    Order Now
                  </Typography>
                </Paper>
              </Box>
            </div>
          ) : (
            <div>
              <Box sx={{ mt: -1.9 }}>
                <Paper
                  elevation={50}
                  sx={{
                    padding: "30px 20px",
                    width: 493,
                    height: 8,
                    margin: "20px auto",
                    boxShadow: "5px 5px 5px #353738",
                    backgroundColor: "#47c1ed",
                    border: 3,
                    borderColor: "#057096",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 25, textAlign: "center", mt: -1.5 }}
                    onClick={handleClickOpen}
                  >
                    Order Now
                  </Typography>
                </Paper>
              </Box>

              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"You haven't signIn yet!"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Kindly signIn to the app for ordering your favourite meals
                    from nearing restaurant.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={signInFormOpenHandler}>SIGN IN</Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
