import React from "react";
import styled, { withTheme } from "styled-components/macro";

import {
  CardContent,
  Card as MuiCard,
  Typography,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Actions from "./Actions";
import { spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import { Line, Bar } from "react-chartjs-2";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 344px;
  width: 100%;
`;
const useStyles = makeStyles({
  traffic: {
    borderBottom: "1px solid #E8EEF1",
  },
  Card: {
    height: "501px",
    boxShadow: "0px 0px 12px -5px #000000",
  },
});

function BarChart({ theme }) {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        type: "bar",
        label: "Last year",
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        hoverBackgroundColor: theme.palette.secondary.main,
        hoverBorderColor: theme.palette.secondary.main,
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },
      {
        label: "This year",
        backgroundColor: "#9A68FC",
        borderColor: theme.palette.grey[300],
        hoverBackgroundColor: theme.palette.grey[300],
        hoverBorderColor: theme.palette.grey[300],
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },

      {
        type: "line",
        label: "Line Dataset",
        data: [50, 50, 50, 50],
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
            stepSize: 20,
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
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedLeads: false,
  });
  console.log(state);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // React.useEffect(() => {
  //   const { checkedLeads } = state;
  //   if (checkedLeads === true) {
  //     for (let chart in data) {
  //       console.log(data[chart]);
  //     }
  //     // const dataset = data.map((data) => data.datasets);
  //     // console.log(dataset);
  //   } else console.log("is false");
  // });

  return (
    <Card mb={1} className={classes.Card}>
      <CardContent>
        <Grid
          justify="space-between"
          container
          spacing={6}
          className={classes.traffic}
        >
          <Grid item>
            <Typography
              variant="h5"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              Traffic Report
            </Typography>
            <Typography variant="body2" gutterBottom>
              Monitor traffic acrosss all of your marketing effort
            </Typography>
          </Grid>

          <Grid item>
            <Actions />
          </Grid>
        </Grid>

        <Spacer mb={5} />
        <FormGroup row style={{ marginLeft: "5px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="All Traffic"
            style={{ marginRight: "72px", fontWeight: "bold" }}
          />
          <FormControlLabel
            control={
              <>
                <Checkbox
                  // checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                />
                <span
                  style={{
                    backgroundColor: "#9A68FC",
                    width: "9px",
                    height: "9px",
                    left: "-4%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                  }}
                ></span>
              </>
            }
            label="Phone Calls"
            style={{ marginRight: "72px" }}
          />
          <FormControlLabel
            control={
              <>
                <Checkbox
                  //checked={state.checkedF}
                  onChange={handleChange}
                  name="checkedLeads"
                  color="primary"
                />
                <span
                  style={{
                    backgroundColor: "#4782DA",
                    width: "9px",
                    height: "9px",
                    left: "-4%",
                    position: "relative",
                    borderRadius: "50%",
                    margin: "3px",
                  }}
                ></span>
              </>
            }
            label="Website Leads"
            style={{ marginRight: "75px" }}
          />
        </FormGroup>
        <Spacer mb={5} />
        <ChartWrapper>
          <Line data={data} options={options} />
          <Bar data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}

export default withTheme(BarChart);
