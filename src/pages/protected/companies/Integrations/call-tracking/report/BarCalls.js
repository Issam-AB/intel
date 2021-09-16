import React from "react";
import styled, { withTheme } from "styled-components/macro";

import {
    Card as MuiCard,
    CardContent,
    CardHeader,
    IconButton,
    Grid, Typography,
    Divider as MuiDivider,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import {
    FiberManualRecord as FiberManualRecordIcons,
} from "@material-ui/icons";
import "../../../../../../vendor/roundedBarCharts";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

import { MoreVertical } from "react-feather";
import { makeStyles } from "@material-ui/core/styles"

const Divider = styled(MuiDivider)(spacing);

const useStyles = makeStyles({
    Card: {
        marginLeft: "-66px",
        boxShadow: "0px 0px 12px -5px #000000",
        height: "505px"
    },
    header: {
        fontWeight: "700"
    }
});

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const DoughnutInner = styled.div`
  width: 100%;
  position: absolute;
  top: 59px;
  left: 2%;
  /* margin-top: -24px; */
  text-align: center;
  z-index: 0;
  margin-left: -2px;
`;
const ChartMissed = styled.div`
  height: 168px;
  position: relative;
  width: 240px;
  /* margin-left: -15px; */
  left: 462px;
  top: -193px;
  margin-top: -120px;
`;
const BarChart = ({ theme }) => {
    const firstDatasetColor = theme.palette.secondary.main;
    const secondDatasetColor =
        theme.palette.type === "dark"
            ? "rgba(255, 255, 255, 0.5)"
            : "rgba(0, 0, 0, 0.15)";


    const data = {
        labels: [
            "Sun",
            "Mon",
            "Tues",
            "Wed",
            "Thur",
            "Frid",
            "Satu",
        ],
        datasets: [
            {
                label: "Mobile",
                backgroundColor: "#DCDFF0",
                borderColor: "#DCDFF0",
                hoverBackgroundColor: "#DCDFF0",
                hoverBorderColor: "#DCDFF0",
                data: [70, 145, 110, 148, 114, 45, 115],
                barPercentage: 0.5,
                categoryPercentage: 0.5,
            },
            {
                label: "Desktop",
                backgroundColor: "#E01E1E",
                borderColor: "#E01E1E",
                hoverBackgroundColor: "#E01E1E",
                hoverBorderColor: "#E01E1E",
                data: [4, 6, 8, 48, 52, 51, 20],
                barPercentage: 0.4,
                categoryPercentage: 0.6,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        cornerRadius: 2,
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    stacked: true,
                    ticks: {
                        stepSize: 50,
                        fontColor: theme.palette.text.secondary,
                    },
                },
            ],
            xAxes: [
                {
                    stacked: true,
                    gridLines: {
                        color: "transparent",
                    },
                    ticks: {
                        fontColor: theme.palette.text.secondary,
                    },
                },
            ],
        },
    };
    const dataDoughnut = {
        labels: ["Social", "Search Engines",],
        datasets: [
            {
                data: [430, 80],
                backgroundColor: ["#DCDFF0", "#E01E1E"],
                borderWidth: 2,
                borderColor: theme.palette.background.paper,
            },
        ],
    };
    const optionsDoughnut = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        cutoutPercentage: 80,
    };
    const classes = useStyles()
    return (
        <Card mb={1} className={classes.Card}>
            <CardHeader
                classes={{ title: classes.header }}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertical />
                    </IconButton>
                }
                title="Missed Calls"
            />
            <Divider />
            <CardContent>
                <Grid container direction="row">
                    <div style={{ margin: "3px 10px", marginBottom: "23px", display: "flex" }}>
                        <FiberManualRecordIcons style={{ color: "#E01E1E", marginRight: "10px" }} />
                        <Typography variant="subtitle1">Missed Calls</Typography>
                    </div>
                    <div style={{ margin: "3px 10px", marginLeft: "107px", marginBottom: "23px", display: "flex" }}>
                        <FiberManualRecordIcons style={{ color: "#DCDFF0", marginRight: "10px" }} />
                        <Typography variant="subtitle1">Answered Calls</Typography>
                    </div>
                </Grid>
                <ChartWrapper>
                    <Grid container direction="row">
                        <Grid item lg={8}>
                            <Bar data={data} options={options} />
                        </Grid>
                        <Divider orientation="vertical" style={{ marginTop: "-69px", height: "449px" }} />
                        <Grid item lg={4}>
                            <ChartMissed>
                                <DoughnutInner variant="h4">
                                    <Typography variant="h2">8%</Typography>
                                    <Typography variant="caption" style={{ fontWeight: "700" }}>Missed Calls</Typography>
                                </DoughnutInner>
                                <Doughnut data={dataDoughnut} options={optionsDoughnut} />
                                <div style={{ marginLeft: "10px", display: "grid", textAlign: "center", marginTop: "20px" }}>
                                    <Typography variant="caption">12 out of 185</Typography>
                                    <Typography variant="caption">calls were missed</Typography>
                                </div>
                            </ChartMissed>
                        </Grid>
                    </Grid>
                </ChartWrapper>
            </CardContent>
        </Card >
    );
};

export default withTheme(BarChart);
