/* eslint-disable import/first */
import React from "react";

import Integration from "../addons"

import { Grid } from "react-feather";

export const integrations = {
    id: "Integration",
    path: "/integration",
    children: [
        {
            path: "/integration/all-integration",
            name: "All Integration",
            icon: <Grid />,
            component: Integration,
        },
    ],
    component: null,
};
