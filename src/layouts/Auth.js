import React from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import {
  CssBaseline,
  Container,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { Check } from "react-feather";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  boxSubtitle: {
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
    marginLeft: "5px",
  },
});

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    /* background: ${(props) => props.theme.palette.background.default}; */
    background-color:#6320EE;
  }
`;

const Checks = styled(Check)`
  margin-left: "4px";
  color: #50b432;
  width: 17px;
`;

const Root = styled.div`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`;

const Auth = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <img
        src="/static/img/sign/Intelligence_logo.svg"
        alt="lgo"
        style={{ width: "13rem", marginTop: "2rem", marginLeft: "53rem" }}
      />
      <Root>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </Root>
      <Container maxWidthSm style={{ marginTop: "-11rem" }}>
        <Grid container direction="row" align="center" justify="space-around">
          <Grid item>
            <Box>
              <img
                src="/static/img/sign/Lead_Generation.svg"
                alt="generation"
                style={{ width: "4rem" }}
              />
            </Box>
            <Grid item style={{ marginTop: "23px" }}>
              <Typography
                align="left"
                variant="h5"
                style={{ fontWeight: "600", color: "white" }}
              >
                Lead Generation™
              </Typography>
              <Grid item style={{ marginTop: "10px" }}>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Proprietary Technology
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Exclusive Leads
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Organic
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Local
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Scalable
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Box>
              <img
                src="/static/img/sign/Website_Metric.svg"
                alt="metric"
                style={{ width: "4rem" }}
              />
            </Box>
            <Grid item style={{ marginTop: "29px" }}>
              <Typography
                align="left"
                variant="h5"
                style={{ fontWeight: "600", color: "white" }}
              >
                Website Metrics™
              </Typography>
              <Grid item style={{ marginTop: "10px" }}>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Visitor Intel
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Return vs. New visitors
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Traffic Sources
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Conversion Rates
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Device Intel
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Real-time website health
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Uptime monitoring
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Security monitoring
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Box>
              <img
                src="/static/img/sign/Lead_Management.svg"
                alt="managment"
                style={{ width: "4rem" }}
              />
            </Box>
            <Grid item style={{ marginTop: "23px" }}>
              <Typography
                align="left"
                variant="h5"
                style={{ fontWeight: "600", color: "white" }}
              >
                Lead Management™
              </Typography>
              <Grid item style={{ marginTop: "10px" }}>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    All leads in one location
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    className={classes.boxSubtitle}
                  >
                    Lead Insight
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Block Spam Leads
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Custom Block Filters
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Control Notifications
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    CRM Integrations
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Reporting
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box>
              <img
                src="/static/img/sign/Call_Tracking.svg"
                alt="metric"
                style={{ width: "4rem" }}
              />
            </Box>
            <Grid item style={{ marginTop: "34px" }}>
              <Typography
                align="left"
                variant="h5"
                style={{ fontWeight: "600", color: "white" }}
              >
                Call Tracking™
              </Typography>
              <Grid item style={{ marginTop: "10px" }}>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    View all company calls
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Average Durations
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    View missed calls + reason
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Record calls
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Listen to calls
                  </Typography>
                </Box>
                <Box display="flex">
                  <Checks />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.boxSubtitle}
                  >
                    Call Analytics
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Auth;
