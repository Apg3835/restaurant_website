import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

import { useSelector, useDispatch } from "react-redux";
import { appDataAction } from "../reducer/appDataSlice";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.restaurent.mealsCountry);
  const incrementButtonHandler = (item) => {
    dispatch(appDataAction.increment({ item: item, name: mealsList.name }));
  };
  const decrementButtonHandler = (item) => {
    dispatch(appDataAction.decrement({ item: item, name: mealsList.name }));
  };
  return (
    <div>
      <Paper
        elevation={50}
        sx={{
          padding: "30px 20px",
          width: "35%",
          height: "8%",
          margin: "20px auto",
          boxShadow: "5px 5px 5px #353738",
          backgroundColor: "#e8e4e3",
          border: 3,
          borderColor: "black",
        }}
      >
        <h1 style={{ textAlign: "center" }}>{mealsList.name}</h1>
      </Paper>
      {mealsList &&
        mealsList.country.map((item) => (
          <Paper
            key={item.id}
            sx={{
              p: 2,
              margin: "auto",
              marginTop: 2,
              maxWidth: "40%",
              flexGrow: 1,
              marginBottom: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={item.imageUrl} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom></Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
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
                    ${item.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
    </div>
  );
}
