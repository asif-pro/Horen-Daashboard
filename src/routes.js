// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import UserDashboard from "views/Dashboard/UserDashboard"
import SuperAdmin from "views/SuperAdmin/Dashboard";
import Groups from "views/Dashboard/UserDashboard/Groups";
import Order from 'views/Order/Order'
import Checkout from "views/Checkout/Checkout";
import OrderSuccess from "views/Order/OrderSuccess";
import Drawer from "components/Drawer/Drawer";
import IndividualDevice from "views/IndividualDevice";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import TopNavigation from "views/Dashboard/Dashboard/components/TopNavigation";

var dashRoutes = [
  {
    path: "/user/dashboard",
    name: "User Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: TopNavigation,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Order",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color="inherit" />,
    component: Order,
    layout: "/auth",
  },
  {
    path: "/individual_device",
    name: "Individual Device",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color="inherit" />,
    component: IndividualDevice,
    layout: "/admin",
  },
  {
    path: "/checkout",
    name: "Checkout",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color="inherit" />,
    component: Checkout,
    layout: "/auth",
  },
  {
    path: "/order_success",
    name: "Order Success",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color="inherit" />,
    component: OrderSuccess,
    layout: "/auth",
  },
  {
    path: "/drawer",
    name: "Drawer",
    rtlName: "لوحة القيادة",
    icon: <DocumentIcon color="inherit" />,
    component: Drawer,
    layout: "/admin",
  },
  {
    name: "RU-23490",
    icon: <DocumentIcon color="inherit" />,
  },
  // {
  //   path: "/user/groups",
  //   name: "Groups",
  //   rtlName: "لوحة القيادة",
  //   icon: <HomeIcon color="inherit" />,
  //   component: Groups,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user/leaderboard",
  //   name: "Leaderboard",
  //   rtlName: "لوحة القيادة",
  //   icon: <HomeIcon color="inherit" />,
  //   component: UserDashboard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/admin/dashboard",
  //   name: "Admin Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: <HomeIcon color="inherit" />,
  //   component: SuperAdmin,
  //   layout: "/admin",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color="inherit" />,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
