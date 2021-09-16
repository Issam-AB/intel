import React from "react";
import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { green, red } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

import Actions from "./Actions";
import BarChart from "./BarChart";
import Stats from "./Stats";
import Rate from "./Rate";
import StateLeads from "./StateLeads";
import TrafficSource from "./TrafficSource";
import DoughnutChart from "./DoughnutChart";
import DoughnutChartDivice from "./DoughnutChartDivice";
import WebsiteHealth from "./WesbiteHealth";

const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

function Dashborad({ theme }) {
  return (
    <React.Fragment>
      <Helmet title="Website Matrics" />
      <Grid justify="space-between" container spacing={2}>
        <Grid item>
          <Typography
            variant="h3"
            style={{
              marginBottom: "10px",
              fontWeight: "700",
              fontSize: "20px",
            }}
            gutterBottom
          >
            Website Matrics
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

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={5}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              style={{
                marginBottom: "10px",
                fontWeight: "700",
                fontSize: "20px",
              }}
              gutterBottom
            >
              Overview
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                marginTop: "-10px",
                marginBottom: "10px",
                fontWeight: "600",
              }}
            >
              This Month of July
            </Typography>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6}>
              <Stats
                title="Total People"
                amount="17,244"
                chip="Today"
                percentageText="+14%"
                percentagecolor={green[500]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Stats
                title="Average Actions"
                amount="100"
                chip="Today"
                percentageText="-12%"
                percentagecolor={red[500]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Stats
                title="Return Visitors"
                amount="2%"
                chip="Today"
                percentageText="-18%"
                percentagecolor={red[500]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Stats
                title="New Visitors"
                amount="98%"
                chip="Today"
                percentageText="+27%"
                percentagecolor={green[500]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Rate
                title="Conversion Rate"
                amount="5.5%"
                chip="Today"
                percentageText="+6%"
                percentagecolor={green[500]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={7}>
          <BarChart />
        </Grid>
      </Grid>
      <Spacer mb={6} />

      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{
              marginBottom: "10px",
              fontWeight: "700",
              fontSize: "20px",
            }}
            gutterBottom
          >
            Website Leads
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              marginTop: "-10px",
              marginBottom: "-7px",
              fontWeight: "600",
            }}
          >
            This Month of July
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <StateLeads
            title="People"
            amount="17,244"
            chip="Today"
            percentageText="+26%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <StateLeads
            title="Total Leads"
            amount="603"
            chip="Today"
            percentageText="-14%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <StateLeads
            title="Conversion Rate"
            amount="3.49%"
            chip="Today"
            percentageText="+18%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <StateLeads
            title="Cost Per Lead"
            amount="$112.9"
            chip="Yearly"
            percentageText="-9%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <StateLeads
            title="Cost"
            amount="$74,772"
            chip="Yearly"
            percentageText="-9%"
            percentagecolor={red[500]}
          />
        </Grid>
      </Grid>
      <Spacer mb={10} />
      <Grid container spacing={6}>
        <Grid item xs={12} lg={5}>
          <TrafficSource />
        </Grid>
        <Grid item xs={12} lg={3}>
          <DoughnutChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DoughnutChartDivice />
        </Grid>
      </Grid>

      <Spacer mb={3} />

      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{
              marginBottom: "10px",
              fontWeight: "700",
              fontSize: "20px",
            }}
            gutterBottom
          >
            Website Health
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              marginTop: "-10px",
              marginBottom: "-7px",
              fontWeight: "600",
            }}
          >
            This Month of July
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <WebsiteHealth title="Uptime Montoring" amount="100%" chip="Verify" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <WebsiteHealth
            title="Security Monitoring"
            amount="100%"
            chip="Verify"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <WebsiteHealth title="Hosting" amount="Perfect" chip="Verify" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <WebsiteHealth title="Website Speed" amount="3.4s" chip="Verify" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <WebsiteHealth title="Lead Capture" amount="Perfect" chip="Verify" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withTheme(Dashborad);
