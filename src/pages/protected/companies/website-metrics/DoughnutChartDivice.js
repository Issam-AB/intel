import React from "react";
import styled, { withTheme } from "styled-components/macro";

import { green } from "@material-ui/core/colors";
import { rgba } from "polished";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader,
  IconButton,
  Typography,
  Typography as MuiTypography,
  Paper,
  Box,
  Divider as MuiDivider,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import arrowup from "../../../../vendor/icons/arrow-up.svg";
import { MoreVertical } from "react-feather";
import { DesktopWindows, PhoneAndroid, Tablet } from "@material-ui/icons";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);
const useStyles = makeStyles({
  card: {
    boxShadow: "0px 0px 12px -5px #000000",
  },
  title: {
    fontWeight: "700",
  },
  cardContent: {
    display: "flex",
  },
  paper: {
    padding: "14px 55px",
  },
  icons: {
    marginLeft: "-55px",
    fontSize: "45px",
    marginTop: "14px",
  },
});
const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(2)}px;
  }
`;

const ChartWrapper = styled.div`
  height: 168px;
  position: relative;
  width: 240px;
  margin-left: -15px;
  margin-top: 40px;
`;

const DoughnutInner = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -24px;
  text-align: center;
  z-index: 0;
  margin-left: -2px;
`;
const Percentage = styled(MuiTypography)`
  span {
    color: ${(props) => props.percentagecolor};
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
    background: ${(props) => rgba(props.percentagecolor, 0.1)};
    padding: 2px;
    border-radius: 3px;
    margin-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

function DoughnutChart({ theme }) {
  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [430, 300, 420],
        backgroundColor: ["#9A68FC", "#45C1FF", "#9A68FC"],
        borderWidth: 5,
        borderColor: theme.palette.background.paper,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };
  const classes = useStyles();

  return (
    <Card mb={3} className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        title="Divices"
        classes={{ title: classes.title }}
      />
      <Divider />
      <CardContent className={classes.cardContent}>
        <ChartWrapper>
          <DoughnutInner variant="h4">
            <Typography variant="h2">603</Typography>
            <Typography variant="caption">Total Leads</Typography>
          </DoughnutInner>
          <Doughnut data={data} options={options} />
        </ChartWrapper>
        <div style={{ marginTop: "-17px" }}>
          <Paper variant="outlined" className={classes.paper}>
            <Box display="flex" spacing={12}>
              <Box mx={10}>
                <DesktopWindows
                  className={classes.icons}
                  style={{ color: "#45C1FF" }}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2">Desktop</Typography>
                <Typography variant="h2">43.4%</Typography>
                <Percentage
                  variant="subtitle2"
                  mb={4}
                  color="textSecondary"
                  percentagecolor={green[500]}
                >
                  <img
                    src={arrowup}
                    alt="arrowup"
                    style={{
                      marginRight: "8px",
                      width: "8px",
                      height: "16px",
                    }}
                  />
                  <span>+6%</span>
                </Percentage>
              </Box>
            </Box>
          </Paper>
          <Paper variant="outlined" className={classes.paper}>
            <Box display="flex" spacing={12}>
              <Box mx={10}>
                <PhoneAndroid
                  className={classes.icons}
                  style={{ color: "#9A68FC" }}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2">Mobile</Typography>
                <Typography variant="h2">42.4%</Typography>
                <Percentage
                  variant="subtitle2"
                  mb={4}
                  color="textSecondary"
                  percentagecolor={green[500]}
                >
                  <img
                    src={arrowup}
                    alt="arrowup"
                    style={{
                      marginRight: "8px",
                      width: "8px",
                      height: "16px",
                    }}
                  />
                  <span>+6%</span>
                </Percentage>
              </Box>
            </Box>
          </Paper>
          <Paper variant="outlined" className={classes.paper}>
            <Box display="flex" spacing={12}>
              <Box mx={10}>
                <Tablet
                  className={classes.icons}
                  style={{ color: "#445AC9" }}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2">Tablet</Typography>
                <Typography variant="h2">5.4%</Typography>
                <Percentage
                  variant="subtitle2"
                  mb={4}
                  color="textSecondary"
                  percentagecolor={green[500]}
                >
                  <img
                    src={arrowup}
                    alt="arrowup"
                    style={{
                      marginRight: "8px",
                      width: "8px",
                      height: "16px",
                    }}
                  />
                  <span>+6%</span>
                </Percentage>
              </Box>
            </Box>
          </Paper>
        </div>
      </CardContent>
      {/* <ChartWrapper>
          <DoughnutInner variant="h4">
            <Typography variant="h2">603</Typography>
            <Typography variant="caption">Total Traffic</Typography>
          </DoughnutInner>
          <Doughnut data={data} options={options} />
        </ChartWrapper>
        <Divider my={6} style={{ marginLeft: "-17px", marginRight: "-16px" }} />
        <Grid container style={{ marginLeft: "1px", marginTop: "-30px", marginBottom: "-6px" }} spacing={9}>
          <Grid item>
            <Grid item>
              <div style={{ display: 'flex', }}>
                <span
                  style={{
                    backgroundColor: "#445AC9",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                  }}
                ></span>
                <Typography variant="subtitle2">Google My Business</Typography>
              </div>

            </Grid>
            <Grid item>
              <div style={{ display: 'flex', }}>
                <span
                  style={{
                    backgroundColor: "#45C1FF",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                  }}
                ></span>
                <Typography variant="subtitle2">Direct Traffic</Typography>
              </div>
            </Grid>
            <Grid item>
              <div style={{ display: 'flex', }}>
                <span
                  style={{
                    backgroundColor: "#9A68FC",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                  }}
                ></span>
                <Typography variant="subtitle2">Organic Search</Typography>
              </div>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item>
              <div style={{ display: 'flex', }}>
                <span
                  style={{
                    backgroundColor: "#50B432",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                  }}
                ></span>
                <Typography variant="subtitle2">Soucial Media</Typography>
              </div>
            </Grid>
            <Grid item>
              <div style={{ display: 'flex', }}>
                <span
                  style={{
                    backgroundColor: "#FF9800",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                  }}
                ></span>
                <Typography variant="subtitle2">Refferal (misc.)</Typography>
              </div>
            </Grid>

          </Grid>


        </Grid>
        <Divider my={1} style={{ marginLeft: "-17px", marginRight: "-16px" }} /> */}
    </Card>
  );
}

export default withTheme(DoughnutChart);
