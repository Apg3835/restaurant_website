import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import { Header } from "./Components/Header";
import MealsSummary from "./Components/MealsSummary";
import ComplexGrid from "./Components/MealsList";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataAction } from "./reducer/asyncAuthReducer";

import MyProfile from "./Components/MyProfile";
import LogOut from "./Components/LogOut";
import MyProfileEditForm from "./Components/MyProfileEditForm";
import RestaurantList from "./Components/RestaurantList";
import { ConfirmOrderPage } from "./Components/ConfirmOrderPage";
import OrderListPage from "./Components/OrderListPage";

function App() {
  const userData = useSelector((state) => state.auth.userProfileData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData === undefined) {
      console.log("getting user data in a[ppjs");
      dispatch(getUserDataAction());
    } else {
      return;
    }
  }, [userData]);

  return (
    <div>
      <ResponsiveAppBar />

      {console.log(userData)}

      <Routes>
       
         <Route path="/" element={<div><Header />
              <MealsSummary />
              <RestaurantList /></div>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signIn" element={<SignInForm />}></Route>
        <Route path="/signUp" element={<SignUpForm />}></Route>
        <Route path="/myProfile" element={<div><MyProfile /></div>}></Route>
        <Route path="/logOut" element={<LogOut />}></Route>
        <Route path="/myprofileeditform" element={<MyProfileEditForm />}></Route>
        <Route path="/confirmorderpage" element={<ConfirmOrderPage />}></Route>
        <Route path="/mealslist" element={<ComplexGrid />}></Route>
        <Route path="/orderlistpage" element={<OrderListPage />}></Route>


      </Routes>
    </div>
  );
}

export default App;
