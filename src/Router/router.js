import AppointBooking from "../components/AppoinmentPage/AppointBooking";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import Dashboard from "../components/Dashboard/Dashboard";
import MyAppointment from "../components/Dashboard/MyAppointment";
import Home from "../components/Home/Home";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "appoinment",
        element: <AppointBooking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
    ],
  },
]);

export default router;
