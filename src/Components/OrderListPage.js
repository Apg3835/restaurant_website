import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useSelector } from "react-redux";
import { Paper } from "@mui/material";

const OrderListPage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const orderList = useSelector((state) => state.restaurent.myOrderList);
  console.log(orderList);
  return (
    <div>
      <Paper
        elevation={50}
        sx={{
          padding: "30px 20px",
          width: "80%",
          //  height: 8,
          margin: "20px auto",
          boxShadow: "5px 5px 5px #353738",
          backgroundColor: "#e8e4e3",
          border: 3,
          borderColor: "black",
        }}
      >
      {orderList.map((item) => (
        <Accordion sx={{marginBottom:1}}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {item.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", width: "30%",mr:3}}>
              {item.date}
            </Typography>
            <Typography sx={{ color: "green",width: "30%",flexShrink: 0}}>
              Total Amount=${item.amount}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.arr.map((order) => (
              <Typography>
                {order.name}x{order.quantity}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper></div>
  );
};

export default OrderListPage;
