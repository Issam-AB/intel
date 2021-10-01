/* eslint-disable import/first */
import React from "react";

import Overview from "./index";

import { Compass } from "react-feather";
import AuthGuard from "./../../../../../components/AuthGuard";

export const marketingPerformance = {
  id: "Marketing Performance",
  path: "/marketing-performance",
  //containsHome: true,
  children: [
    {
      path: "/marketing-performance/overview",
      name: "Overview",
      icon: <Compass />,
      component: Overview,
      guard: AuthGuard,
    },
  ],
  component: null,
};
