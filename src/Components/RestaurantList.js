import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { appDataAction } from "../reducer/appDataSlice";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

export default function RestaurantList() {
  const restaurantList = useSelector(
    (state) => state.restaurent.restaurantList
  );
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mealsPageOpenHandler = (country,name) => {
    dispatch(appDataAction.mealsCountrySet({country,name}));
    navigate("/mealslist");
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {restaurantList.map((item) => (
          <Grid item xs={6} md={4}>
            <Card
              sx={{ height: 460, ml: 2, mt: 2, mr: 2, cursor: "pointer" }}
              key={item.uuid}
              onClick={() => mealsPageOpenHandler(item.country,item.name)}
            >
              <CardMedia
                sx={{ height: 200 }}
                image={item.imageUrl}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}{" "}
                  <Rating name="read-only" value={item.rating} readOnly sx={{left:0}}/>
                </Typography>
                <small>{item.type}</small>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography size="small">{item.location}</Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
