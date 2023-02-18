import { Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ConfirmOrderPage = () => {
  const navigate=useNavigate();
  const OrderListHandler=()=>{
    navigate('/orderlistpage')
  }
  return (
    <div>
      <Paper
        elevation={50}
        sx={{
          padding: "30px 20px",
          width: 650,
          //  height: 8,
          margin: "20px auto",
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
          You have successfully completed your order,click below to check order!
        </h1>
        <button onClick={OrderListHandler}
          style={{
            width: "80%",
            height: 35,
            border: 0,
            borderRadius: "10px",
            marginLeft: "50px",
            color: "white",
            backgroundColor: "black",
            cursor:'pointer'
          }}
        >
          <strong >YOUR ORDERS</strong>
        </button>
      </Paper>
    </div>
  );
};
