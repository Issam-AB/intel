import React from "react";

import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
    Grid,
    Divider as MuiDivider,
    Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import AdvancedTable from "./AdvancedTable";
import Actions from "./Actions";
import BarChart from "./BarChart";
import Intelegence from "./Intelegence";
import Account from "./Account";
import StatsCall from "./StatsCall"
import BarcharSource from "./BarchartSource"

import BarCalls from "./BarCalls"

const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);
const Typography = styled(MuiTypography)(spacing);

const CallLog = () => {
    const [totalCall, setTotalCall] = React.useState(true)
    return (
        <React.Fragment>
            <Helmet title="Marketing Performance" />
            <Grid container justify="space-between" spacing={4}>
                <Grid item>
                    <Typography
                        variant="h3"
                        style={{ marginBottom: "10px", fontWeight: "700" }}
                        gutterBottom
                    >
                        Website Leads
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{ marginTop: "-10px", fontWeight: "600" }}
                    >
                        Welcome back, Client's <span>Fist Name!</span> We've missed you.{" "}
                        <span role="img" aria-label="Waving Hand Sign">
                            👋
                        </span>
                    </Typography>
                </Grid>

                <Grid item>
                    <Actions />
                </Grid>
            </Grid>

            <Divider my={3} />

            <Grid container spacing={6} style={{ marginTop: "10px" }}>
                <Grid item lg={3}>
                    <Grid item xs={12} lg={4} xl>
                        <Intelegence title="INTELLIGENCE DASHBOARD" />
                    </Grid>
                    <Grid item xs={12} lg={4} xl>
                        <Account
                            title="Account Manager"
                            name="Michael Field"
                            call="(863)999-0010"
                            email="Manager@backend.com"
                            avatar="/static/img/avatars/avatar-"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <BarChart />
                </Grid>
            </Grid>
            <Spacer mb={6} />
            <Grid container spacing={6} style={{ marginTop: "10px" }}>
                <Grid item lg={3} xs={12} >
                    <Grid item lg={10}>
                        <StatsCall title="Total Calls" amount="185" chip="Today" totalCall={totalCall} />
                    </Grid>
                    <Grid item lg={10}>
                        <StatsCall title="Average Call Duration" amount="3 min 21 secs" chip="Today" />
                    </Grid>
                    <Grid item lg={10}>
                        <StatsCall title="Missed Call" amount="12 (8% missed)" chip="Today" />
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <BarCalls />
                </Grid>
                <Grid item xs={12} lg={4} >
                    <BarcharSource />
                </Grid>
            </Grid>
            <Spacer mb={6} />
            <Grid container spacing={6}>
                <Grid item xs={12} lg={12}>
                    <AdvancedTable />
                </Grid>
            </Grid>
        </React.Fragment >
    );
};

export default withTheme(CallLog);
