/* eslint-disable import/first */
import React from "react";

// import async from "../components/Async";

import {
  CreditCard,
  Monitor,
  Users as UsersIcon,
  User,
  Copy,
  FilePlus,
  Grid,
} from "react-feather";
import AllRequest from "../pages/protected/companies/Integrations/support/allRequest";
import NewRrquest from "../pages/protected/companies/Integrations/support/newRequest";

import Integration from "../pages/protected/companies/Integrations/addons";
import MyProfile from "../pages/protected/companies/Integrations/account-settings/myProfile";
import Users from "../pages/protected/companies/Integrations/account-settings/users";
import Billing from "../pages/protected/companies/Integrations/account-settings/billing";

import InegrationsRoutes from "./../pages/protected/companies/Integrations/index";
// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Guards
import AuthGuard from "../components/AuthGuard";

// Auth components
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import ResetNewPassword from "../pages/auth/ResetNewPassword";
// import Page404 from "../pages/auth/Page404";
// import Page500 from "../pages/auth/Page500";

// Components components
// import Accordion from "../pages/components/Accordion";
// import Alerts from "../pages/components/Alerts";
// import Avatars from "../pages/components/Avatars";

// Dashboards components
//const Default = async(() => import("../pages/dashboards/Default"));
// const Overview = async(() =>
//   import("../pages/protected/companies/marketing-performance")
// // );
// const Dashborad = async(() =>
//   import("../pages/protected/companies/Integrations/website-metrics")
// );
// Pages components
// import GoodLeads from "../pages/protected/companies/Integrations/website-leads/goodLeads";
// import BlockedLeads from "../pages/protected/companies/Integrations/website-leads/blockedLeads"
// import Blank from "../pages/pages/Blank";
// import InvoiceDetails from "../pages/pages/InvoiceDetails";
// import InvoiceList from "../pages/pages/InvoiceList";

// import Pricing from "../pages/pages/Pricing";
// import _Settings from "../pages/pages/Settings";
// import Chat from "../pages/pages/Chat";
// const Profile = async(() => import("../pages/pages/Profile"));
// const Tasks = async(() => import("../pages/pages/Tasks"));

// Landing
import Landing from "../pages/presentation/Landing";

// Protected routes
import ProtectedPage from "../pages/protected/ProtectedPage";
// import { integrations } from "../pages/protected/companies/Integrations/addons/route";

// const marketingPerformance = {
//   id: "Marketing Performance",
//   path: "/marketing-performance",
//   //containsHome: true,
//   children: [
//     {
//       path: "/marketing-performance/overview",
//       name: "Overview",
//       icon: <Compass />,
//       component: Overview,
//     },
//   ],
//   component: null,
// };

// const websiteMetrics = {
//   id: "Website Metrics",
//   path: "/dashboard",
//   containsHome: true,
//   children: [
//     {
//       path: "/",
//       // path: "/dashboard/analytics",
//       name: "Dashboard",
//       icon: <Activity />,
//       component: Dashborad,
//     },
//   ],
//   component: null,
// };

// const websiteLead = {
//   id: "Website Leads (forms)",
//   path: "/website-leads",
//   children: [
//     {
//       path: "/website-leads/good-leads",
//       name: "Good Leads",
//       icon: <Filter />,
//       badge: "3",
//       component: GoodLeads,
//     },
//     {
//       path: "/website-leads/blocked-leads",
//       name: "Blocked Leads",
//       icon: <Slash />,
//       component: BlockedLeads,
//     },
//     {
//       path: "/pages/pricing",
//       name: "Custom Filters",
//       icon: <Sliders />,
//       component: Pricing,
//     },
//     {
//       path: "/pages/chat",
//       name: "Notifications",
//       badge: "3",
//       icon: <Bell />,
//       component: Chat,
//     },
//     {
//       path: "/pages/blank",
//       name: "Integrations",
//       icon: <Grid />,
//       component: Blank,
//     },
//   ],
//   component: null,
// };

// // const callTracking = {
// //   id: "Call Tracking",
// //   path: "/invoices",
// //   children: [
// //     {
// //       path: "/invoices",
// //       name: "Call Log",
// //       icon: <PhoneIncoming />,
// //       component: InvoiceList,
// //     },
// //     {
// //       path: "/invoices/detail",
// //       name: "Reports",
// //       icon: <FileText />,
// //       component: InvoiceDetails,
// //     },
// //   ],
// //   component: null,
// // };

export const support = {
  id: "Support",
  path: "/support",
  children: [
    {
      path: "/support/all-request",
      name: "All Request",
      icon: <Copy />,
      component: AllRequest,
      guard: AuthGuard,
    },
    {
      path: "/support/new-request",
      name: "New Request",
      icon: <FilePlus />,
      component: NewRrquest,
      guard: AuthGuard,
    },
  ],
  component: null,
};
export const integrations = {
  id: "Integration",
  path: "/integration",
  children: [
    {
      path: "/integration/all-integration",
      name: "All Integration",
      icon: <Grid />,
      component: Integration,
      guard: AuthGuard,
    },
  ],
  component: null,
};

const accountSettings = {
  id: "Account Settings",
  path: "/account-settings",
  children: [
    {
      path: "/account-settings/my-profile",
      name: "My Profile",
      icon: <User />,
      component: MyProfile,
      guard: AuthGuard,
    },
    {
      path: "/account-settings/users",
      name: "Users",
      icon: <UsersIcon />,
      component: Users,
      guard: AuthGuard,
    },
    {
      path: "/account-settings/billing",
      name: "Biling",
      icon: <CreditCard />,
      component: Billing,
      guard: AuthGuard,
    },
  ],
  // component: null,
};

const authRoutes = {
  id: "Auth",
  path: "/auth",
  icon: <Users />,
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn,
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp,
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword,
    },
    {
      path: "/auth/reset-password/:id/:token",
      name: "Reset New Password",
      component: ResetNewPassword,
    },
    // {
    //   path: "/auth/404",
    //   name: "404 Page",
    //   component: Page404,
    // },
    // {
    //   path: "/auth/500",
    //   name: "500 Page",
    //   component: Page500,
    // },
  ],
  component: null,
};

const landingRoutes = {
  id: "Landing Page",
  path: "/Landing-Page",
  header: "Docs",
  icon: <Monitor />,
  component: Landing,
  children: null,
};

// This route is only visible while signed in
const protectedPageRoutes = {
  id: "Private",
  path: "/private",
  component: ProtectedPage,
  children: null,
  guard: AuthGuard,
};

// // Routes using the Dashboard layout
export const dashboardLayoutRoutes = InegrationsRoutes;

// dashboardLayoutRoutes.push(websiteMetrics);
// dashboardLayoutRoutes.push(callTracking);
// dashboardLayoutRoutes.push(integrations);
// dashboardLayoutRoutes.push(support);
// dashboardLayoutRoutes.push(accountSettings);

// Routes using the Dashboard layout
dashboardLayoutRoutes.push([integrations, support, accountSettings]);

// = [
//   // marketingPerformance,
//   // websiteMetrics,
//   // websiteLead,
//   // callTracking,
//   support,
//   accountSettings,
// ];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes using the Presentation layout
export const presentationLayoutRoutes = [landingRoutes];
// export const presentationLayoutRoutes = [marketingPerformance];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes, accountSettings];

// Routes visible in the sidebar
export const sidebarRoutes = InegrationsRoutes;

// sidebarRoutes.push(websiteMetrics);
sidebarRoutes.push(integrations);
sidebarRoutes.push(support);
sidebarRoutes.push(accountSettings);
// sidebarRoutes.push(authRoutes);
