import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSliceActions } from "../reducer/authSlice";
import { getUserDataAction } from "../reducer/asyncAuthReducer";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 12,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function ResponsiveAppBar() {
  const dispatch = useDispatch();

  const badgeNumber = useSelector((state) => state.restaurent.cartItems);
  const userLogIn = useSelector((state) => state.auth.isLoggedIn);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userData = useSelector((state) => state.auth.userProfileData);

  const nevigate = useNavigate();

  const homePageHandler = () => {
    nevigate("/");
  };
  const cartButtonHandler = () => {
    nevigate("/cart");
  };
  const signInHandler = () => {
    nevigate("/signIn");
    handleCloseUserMenu();
  };
  const myProfileHandler = () => {
    nevigate("/myProfile");
  };
  const logOutHandler = () => {
    dispatch(authSliceActions.userLogOut());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log("nav bar component");

  console.log(userData);

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            THE BUKKHAD STREET
          </Typography>
        

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
         

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={homePageHandler}
          >
            THE BUKKHAD STREET
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={badgeNumber.length}
                    color="secondary"
                  >
                    <ShoppingCartIcon
                      sx={{ color: "white", marginRight: 2 }}
                      onClick={cartButtonHandler}
                    />
                  </StyledBadge>
                </IconButton>


          <Box sx={{ flexGrow: 0 }}>
          
            {userData !== undefined ? (
              <div>
                
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, color: "white" }}
                  >
                    <Avatar src="/broken-image.jpg" />
                  </IconButton>
                </Tooltip>
              </div>
            ) : (
              <Typography onClick={signInHandler} sx={{ cursor: "pointer" }}>
                Sign In
              </Typography>
            )}
          
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={signInHandler}>
                <Typography textAlign="center" onClick={logOutHandler}>
                  Log Out
                </Typography>
              </MenuItem>
              <MenuItem onClick={myProfileHandler}>
                <Typography textAlign="center" onClick={handleCloseUserMenu}>
                  {" "}
                  My Profile
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
