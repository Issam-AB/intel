/* eslint-disable import/first */
import React from "react";

// import InvoiceDetails from "../pages/pages/InvoiceDetails";
// import InvoiceList from "../pages/pages/InvoiceList";

import CallLog from "./callLog";
import Report from "./report";

import { PhoneIncoming, FileText } from "react-feather";

export const callTracking = {
  id: "Call Tracking",
  path: "/call-tracking",
  children: [
    {
      path: "/call-tracking/call-log",
      name: "Call Log",
      icon: <PhoneIncoming />,
      component: CallLog,
    },
    {
      path: "/call-tracking/reports",
      name: "Reports",
      icon: <FileText />,
      component: Report,
    },
  ],
  component: null,
};
