import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import PrivateRoute from "../Providers/PrivateRoute";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import MyList from "../Pages/MyList/MyList";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import UpdateTouristsSpot from "../Pages/UpdateTouristsSpot/UpdateTouristsSpot";

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
          path: "/allTouristsSpot",
          element: <AllTouristsSpot></AllTouristsSpot>
        },
        {
          path: "/allTouristSpot/:id",
          element: <DetailsPage></DetailsPage>
        },
        {
          path: "/addTouristsSpot",
          element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
        },
        {
          path: "/updateTouristsSpot/:id",
          element: <PrivateRoute><UpdateTouristsSpot></UpdateTouristsSpot></PrivateRoute>
        },
        {
          path: "/my-list",
          element: <PrivateRoute><MyList></MyList></PrivateRoute>
        },
        {
          path: "/my-list/:id",
          element: <PrivateRoute><MyList></MyList></PrivateRoute>
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