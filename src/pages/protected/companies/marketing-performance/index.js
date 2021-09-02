import React from "react";

import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { green } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

import Actions from "./Actions";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LanguagesTable from "./LanguagesTable";
import Stats from "./Stats";
import Account from "./Account";
import TrafficTable from "./TrafficTable";
import WorldMap from "./WorldMap";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Overview = () => {
  return (
    <React.Fragment>
      <Helmet title="Analytics Dashboard" />
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Marketing Performance
          </Typography>
          <Typography variant="subtitle1">
            Welcome back, Meche! We've missed you.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={6} lg={3} md={5} sm={6}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12}>
              <Stats title="INTELLIGENCE DASHBOARD" chip="Today" />
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12}>
              <Account
                title="Account Manager"
                name="Michael Field"
                call="(863)999-0010"
                email="Manager@backend.com"
                avatar="/static/img/avatars/avatar-"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={7}>
          <BarChart />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          <WorldMap />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DoughnutChart />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          <LanguagesTable />
        </Grid>
        <Grid item xs={12} lg={8}>
          <TrafficTable />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withTheme(Overview);
