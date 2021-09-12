/* eslint-disable import/first */
import React from "react";

import async from "../components/Async";

import {
  Activity,
  Bell,
  CreditCard,
  Grid,
  Compass,
  Filter,
  FileText,
  Slash,
  Monitor,
  PhoneIncoming,
  Sliders,
  Users,
  User,
} from "react-feather";

// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Guards
import AuthGuard from "../components/AuthGuard";

// Components components
import Accordion from "../pages/components/Accordion";
import Alerts from "../pages/components/Alerts";
import Avatars from "../pages/components/Avatars";

// Dashboards components
//const Default = async(() => import("../pages/dashboards/Default"));
const Overview = async(() =>
  import("../pages/protected/companies/marketing-performance")
);
const Dashborad = async(() =>
  import("../pages/protected/companies/website-metrics")
);
// Pages components
import GoodLeads from "../pages/protected/companies/website-leads/goodLeads";
import Blank from "../pages/pages/Blank";
import InvoiceDetails from "../pages/pages/InvoiceDetails";
import InvoiceList from "../pages/pages/InvoiceList";

import Pricing from "../pages/pages/Pricing";
import _Settings from "../pages/pages/Settings";
import Chat from "../pages/pages/Chat";
// const Profile = async(() => import("../pages/pages/Profile"));
const Tasks = async(() => import("../pages/pages/Tasks"));

// Landing
import Landing from "../pages/presentation/Landing";

// Protected routes
import ProtectedPage from "../pages/protected/ProtectedPage";

const marketingPerformance = {
  id: "Marketing Performance",
  path: "/marketing-performance",
  //containsHome: true,
  children: [
    {
      path: "/marketing-performance/overview",
      name: "Overview",
      icon: <Compass />,
      component: Overview,
    },
  ],
  component: null,
};

const websiteMetrics = {
  id: "Website Metrics",
  path: "/dashboard",
  containsHome: true,
  children: [
    {
      path: "/",
      // path: "/dashboard/analytics",
      name: "Dashboard",
      icon: <Activity />,
      component: Dashborad,
    },
  ],
  component: null,
};

const websiteLead = {
  id: "Website Leads (forms)",
  path: "/website-leads",
  children: [
    {
      path: "/website-leads/good-leads",
      name: "Good Leads",
      icon: <Filter />,
      badge: "3",
      component: GoodLeads,
    },
    {
      path: "/pages/settings",
      name: "Blocked Leads",
      icon: <Slash />,
      component: _Settings,
    },
    {
      path: "/pages/pricing",
      name: "Custom Filters",
      icon: <Sliders />,
      component: Pricing,
    },
    {
      path: "/pages/chat",
      name: "Notifications",
      badge: "3",
      icon: <Bell />,
      component: Chat,
    },
    {
      path: "/pages/blank",
      name: "Integrations",
      icon: <Grid />,
      component: Blank,
    },
  ],
  component: null,
};

const callTracking = {
  id: "Call Tracking",
  path: "/invoices",
  children: [
    {
      path: "/invoices",
      name: "Call Log",
      icon: <PhoneIncoming />,
      component: InvoiceList,
    },
    {
      path: "/invoices/detail",
      name: "Reports",
      icon: <FileText />,
      component: InvoiceDetails,
    },
  ],
  component: null,
};

const support = {
  id: "Support",
  path: "/tasks",
  component: Tasks,
  children: null,
};

const accountSettings = {
  id: "Account Settings",
  path: "/components",
  children: [
    {
      path: "/components/alerts",
      name: "My Profile",
      icon: <User />,
      component: Alerts,
    },
    {
      path: "/components/accordion",
      name: "Users",
      icon: <Users />,
      component: Accordion,
    },
    {
      path: "/components/avatars",
      name: "Biling",
      icon: <CreditCard />,
      component: Avatars,
    },
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

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  marketingPerformance,
  websiteMetrics,
  websiteLead,
  callTracking,
  support,
  accountSettings,
];

// // Routes using the Auth layout
// export const authLayoutRoutes = [authRoutes];

// Routes using the Presentation layout
export const presentationLayoutRoutes = [landingRoutes];
// export const presentationLayoutRoutes = [marketingPerformance];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [
  marketingPerformance,
  websiteMetrics,
  websiteLead,
  callTracking,
  support,
  accountSettings,
];
