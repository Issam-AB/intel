import React from "react";

// import InvoiceDetails from "../pages/pages/InvoiceDetails";
// import InvoiceList from "../pages/pages/InvoiceList";

import CallLog from "./callLog";
import Report from "./report";

import { PhoneIncoming, FileText } from "react-feather";
import AuthGuard from "./../../../../../components/AuthGuard";

export const callTracking = {
  id: "Call Tracking",
  path: "/call-tracking",
  children: [
    {
      path: "/call-tracking/call-log",
      name: "Call Log",
      icon: <PhoneIncoming />,
      component: CallLog,
      guard: AuthGuard,
    },
    {
      path: "/call-tracking/reports",
      name: "Reports",
      icon: <FileText />,
      component: Report,
      guard: AuthGuard,
    },
  ],
  component: null,
};
