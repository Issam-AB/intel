import React from "react";
import styled, { withTheme } from "styled-components/macro";

import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
  Divider as MuiDivider,
  Button,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { ExpandMore } from "@material-ui/icons";
import "../../../../../../vendor/roundedBarCharts";
import { Bar } from "react-chartjs-2";

import { MoreVertical } from "react-feather";
import { makeStyles } from "@material-ui/core/styles";
const Divider = styled(MuiDivider)(spacing);

const Card = styled(MuiCard)(spacing);

const useStyles = makeStyles({
  Card: {
    height: "504px",
    boxShadow: "0px 0px 12px -5px #000000",
  },
  CardContent: {
    marginTop: "43px",
  },
  header: {
    fontWeight: "700",
  },
});
const ChartWrapper = styled.div`
  height: 372px;
  width: 100%;
`;

const BarChart = ({ theme }) => {
  // const firstDatasetColor = theme.palette.secondary.main;
  // const secondDatasetColor =
  // theme.palette.type === "dark"
  //   ? "rgba(255, 255, 255, 0.5)"
  //   : "rgba(0, 0, 0, 0.15)";

  const data = {
    labels: ["GMB", "GMB", "Ads", "Website Pool", "GMB - NEW"],
    datasets: [
      {
        label: "Desktop",
        backgroundColor: "#9A68FC",
        borderColor: "#9A68FC",
        hoverBackgroundColor: "#9A68FC",
        hoverBorderColor: "#9A68FC",
        data: [69, 66, 24, 48, 52],
        barPercentage: 0.5,
        categoryPercentage: 0.4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          stacked: false,
          ticks: {
            stepSize: 50,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          gridLines: {
            color: "transparent",
          },
        },
      ],
    },
  };
  const classes = useStyles();
  return (
    <Card mb={1} className={classes.Card}>
      {/* <div className={classes.header}> */}
      <CardHeader
        classes={{ title: classes.header }}
        action={
          <>
            <Button
              variant="contained"
              style={{ backgroundColor: "#6A74C9", color: "white" }}
              className={classes.button}
              endIcon={<ExpandMore />}
            >
              Export
            </Button>
            <IconButton aria-label="settings">
              <MoreVertical />
            </IconButton>
          </>
        }
        title="Call by Source"
      />

      <Divider />
      <CardContent className={classes.CardContent}>
        <ChartWrapper>
          <Bar data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
};

export default withTheme(BarChart);
