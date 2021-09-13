/* eslint-disable import/first */
import React from "react";

// import InvoiceDetails from "../pages/pages/InvoiceDetails";
// import InvoiceList from "../pages/pages/InvoiceList";

import InvoiceDetails from "./Report";
import InvoiceList from "./Report";

import {

    PhoneIncoming,
    FileText,
} from "react-feather";

export const callTracking = {
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
