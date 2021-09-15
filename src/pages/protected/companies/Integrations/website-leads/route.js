/* eslint-disable import/first */
import React from "react";

import GoodLeads from "./goodLeads";
import BlockedLeads from "./blockedLeads";
import CustomFilter from "./customFilter";
import Notification from "./notification";

import { Filter, Slash, Sliders, Bell } from "react-feather";

export const websiteLead = {
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
      path: "/website-leads/blocked-leads",
      name: "Blocked Leads",
      icon: <Slash />,
      component: BlockedLeads,
    },
    {
      path: "/website-leads/custom-filter",
      name: "Custom Filters",
      icon: <Sliders />,
      component: CustomFilter,
    },
    {
      path: "/pages/chat",
      name: "Notifications",
      badge: "3",
      icon: <Bell />,
      component: Notification,
    },
  ],
  component: null,
};
