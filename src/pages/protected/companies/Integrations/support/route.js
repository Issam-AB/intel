import React from "react";

import AllRequest from "../support/allRequest";
import NewRrquest from "../support/newRequest";

import { Copy, FilePlus } from "react-feather";

export const support = {
    id: "Support",
    path: "/support",
    children: [
        {
            path: "/support/all-request",
            name: "All Request",
            icon: <Copy />,
            component: AllRequest,
        },
        {
            path: "/support/new-request",
            name: "New Request",
            icon: <FilePlus />,
            component: NewRrquest,
        },
    ],
    component: null,
};

