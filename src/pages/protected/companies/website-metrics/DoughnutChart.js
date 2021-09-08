import React from "react";
import styled, { withTheme } from "styled-components/macro";

import { green, red, orange, purple } from "@material-ui/core/colors";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader,
  IconButton,
  Grid,
  TableCell as MuiTableCell,
  Typography,
  Divider as MuiDivider,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);
const Divider = styled(MuiDivider)(spacing);
const useStyles = makeStyles({
  card: {
    boxShadow: "0px 0px 12px -5px #000000",
    height: "382px"
  },
  title: {
    fontWeight: "700"
  }
})
const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(2)}px;
  }
`;

const ChartWrapper = styled.div`
  height: 168px;
  position: relative;
`;

const DoughnutInner = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -22px;
  text-align: center;
  z-index: 0;
`;

function DoughnutChart({ theme }) {
  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [230, 170, 180, 150, 270],
        backgroundColor: [theme.palette.secondary.main, "#9A68FC", "#45C1FF", "#50B432", orange[500], "#445AC9"],
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
        title="Top Channels"
        classes={{ title: classes.title }}
      />

      <CardContent>
        <ChartWrapper>
          <DoughnutInner variant="h4">
            <Typography variant="h2">603</Typography>
            <Typography variant="caption">Total Traffic</Typography>
          </DoughnutInner>
          <Doughnut data={data} options={options} />
        </ChartWrapper>
        <Divider my={6} style={{ marginLeft: "-17px", marginRight: "-16px" }} />
        <Grid container style={{ marginLeft: "1px", marginTop: "-37px", marginBottom: "-12px" }} spacing={9}>
          <Grid item>
            <Grid item>
              <div style={{ display: 'flex' }}>
                <span
                  style={{
                    backgroundColor: "#445AC9",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                    marginTop: "8px"
                  }}
                ></span>
                <Typography variant="subtitle2" style={{ lineHeight: "30px" }}>Google My Business</Typography>
              </div>

            </Grid>
            <Grid item>
              <div style={{ display: 'flex', lineHeight: "26px" }}>
                <span
                  style={{
                    backgroundColor: "#45C1FF",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                    marginTop: "8px",
                  }}
                ></span>
                <Typography variant="subtitle2" style={{ lineHeight: "30px" }}>Direct Traffic</Typography>
              </div>
            </Grid>
            <Grid item>
              <div style={{ display: 'flex' }}>
                <span
                  style={{
                    backgroundColor: "#9A68FC",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                    marginTop: "8px",
                  }}
                ></span>
                <Typography variant="subtitle2" style={{ lineHeight: "30px" }}>Organic Search</Typography>
              </div>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item>
              <div style={{ display: 'flex' }}>
                <span
                  style={{
                    backgroundColor: "#50B432",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                    marginTop: "8px",
                  }}
                ></span>
                <Typography variant="subtitle2" style={{ lineHeight: "30px" }}>Soucial Media</Typography>
              </div>
            </Grid>
            <Grid item>
              <div style={{ display: 'flex' }}>
                <span
                  style={{
                    backgroundColor: "#FF9800",
                    width: "12px",
                    height: "12px",
                    left: "-3%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                    marginTop: "8px",
                  }}
                ></span>
                <Typography variant="subtitle2" style={{ lineHeight: "30px" }}>Refferal (misc.)</Typography>
              </div>
            </Grid>

          </Grid>


        </Grid>
        <Divider style={{ marginLeft: "-17px", marginRight: "-16px" }} />
      </CardContent>
    </Card >
  );
}

export default withTheme(DoughnutChart);
