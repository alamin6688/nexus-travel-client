import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import PrivateRoute from "../Providers/PrivateRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/addTouristsSpot",
          element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
        },
        {
          path: "/sign-up",
          element: <SignUp></SignUp>
        },
        {
          path: "/sign-in",
          element: <SignIn></SignIn>
        },
      ]
    },
  ]);