import { Redirect } from "react-router";
import  Home  from "../components/Home/Home";
import { Login } from "../components/Login";
import UserManagementPage  from "../components/Admin/UserManagement/UserManagementPage";
import AdminHomePage  from "../components/Admin/AdminHomePage/AdminHomePage";
import ViewUserPage from "../components/Admin/ViewUserPage/ViewUserPage"
import  BookSeatPage  from "../components/BookSeatPage/BookSeatPage";
import AddNewUser from "../components/Admin/AddNewUser/AddNewUser"
import Table from "../components/Table";
import AuthLayout from "../layouts/Auth";
import DashboardLayout from '../layouts/Dashboard';

import Page from "../components/Seats/Page"
import Manager_seatlayout from "../components/Seats/Manager_seatlayout";
import Employee_seatlayout from "../components/Seats/Employee-seatlayout";
// import Page from "../components/SeatLayout/src/pages/Page";
// import Manager_seatlayout from "../components/SeatLayout/src/pages/Manager_seatlayout";
// import Employee_seatlayout from "../components/SeatLayout/src/pages/Employee-seatlayout";

import UserProfile from "../components/User/UserProfilePage/UserProfile";
import UserBookHistory from "../components/User/UserBookHistory/UserBookHistory";


import Page from "../components/Pages/Page";

export const routes = [
  {
    path: "/",
    exact: true,
    component: () =>  <Redirect to="/home" />,
  },
  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      {
        path: "/auth/login",
        exact: true,
        component: Login,
      },
    ],
  },
<<<<<<< HEAD
  {
    path: "/seatlayout",
    component: Page,
    routes: [
      {
        path: "/seatlayout",
        exact: true,
        component: Page,
      },
    ],
  },
=======
>>>>>>> 040cf89c61db6f80cdd16578065b6e1255633512
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: "/home",
        exact: true,
        component: (props) => {return props.isAuthenticated ? <Home /> : <Redirect to="/auth/login" />}
          ,
      },
      {
        path: "/seatlayout",
        exact: true,
        component: (props) => {return !props.isAuthenticated ? <Redirect to="/auth/login" /> : localStorage.getItem('id')==7 ? <Page/> :  localStorage.getItem('id')==100 ? <Manager_seatlayout/> : <Employee_seatlayout/> }
        // component: (props) => {return props.isAuthenticated ? <Page /> : <Redirect to="/auth/login" />}
      },
      {
        path: "/admin/usermanagement",
        exact: true,
        component: (props) => {return props.isAuthenticated ? <UserManagementPage /> : <Redirect to="/auth/login" />}
      },
      {
        path: "/user/userprofile",
        exact: true,
        component: (props) => {return props.isAuthenticated ? <UserProfile /> : <Redirect to="/auth/login" />}
          ,
      },
      {
        path: "/user/userbookhistory",
        exact: true,
        component: (props) => {return props.isAuthenticated ?  <UserBookHistory /> : <Redirect to="/auth/login" />}
          ,
      },
      {
        path: "/admin/adminhome",
        exact: true,
        component: (props) => {return props.isAuthenticated ? <AdminHomePage /> : <Redirect to="/auth/login" />}
          ,
      },
      {
        path: "/admin/viewuser/:associate_id",
        exact: true,
        component: (props) => {return props.isAuthenticated ? <ViewUserPage /> : <Redirect to="/auth/login" />}
          ,
      },
      {
        path: "/bookyourseat",
        exact: true,
        component: (props) => {return props.isAuthenticated ? <BookSeatPage /> : <Redirect to="/auth/login" />}
          ,
      },
      {
        path: "/admin/addnewuser",
        exact: true,
        component: (props) => {return props.isAuthenticated ? <AddNewUser /> : <Redirect to="/auth/login" />}
          ,
      },
      {
        path:"/table",
        exact: true,
        component: (props) => {return props.isAuthenticated ? <Table /> : <Redirect to="/auth/login" />}
      }
    ]
  }
];
