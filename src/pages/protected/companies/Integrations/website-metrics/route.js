/* eslint-disable import/first */
import React from "react";

import Dashborad from "./../website-metrics/index";
import { Activity } from "react-feather";

// Guards
import AuthGuard from "../../../../../components/AuthGuard";

export const websiteMetrics = {
  id: "Website Metrics",
  path: "/",
  containsHome: true,

  children: [
    {
      path: "/",
      // path: "/dashboard/analytics",
      name: "Dashboard",
      icon: <Activity />,
      component: Dashborad,
      // guard: AuthGuard,
    },
  ],
  component: null,
};
