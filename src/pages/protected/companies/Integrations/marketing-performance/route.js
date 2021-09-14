/* eslint-disable import/first */
import React from "react";

import Overview from "./index";

import { Compass } from "react-feather";

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
    },
  ],
  component: null,
};
