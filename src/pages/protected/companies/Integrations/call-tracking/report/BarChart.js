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
import { Bar } from "react-chartjs-2";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 322px;
  width: 100%;
`;
const themes = createMuiTheme({
  overrides: {
    MuiCheckbox: {
      colorSecondary: {
        color: '# custom color',
        '&$checked': {
          color: '#6320EE',
        },
      },
      colorPrimary: {
        color: '# custom color',
        '&$checked': {
          color: '#custom color',
        },
      },
    },
  },
})

const useStyles = makeStyles({
  traffic: {
    borderBottom: "1px solid #E8EEF1",
  },
  Card: {
    height: "475px",
    boxShadow: "0px 0px 12px -5px #000000",
  },
  // Checkbox: {
  //   color: "#6320EE"
  // }
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
      // {
      //   label: "Last year",
      //   backgroundColor: theme.palette.secondary.main,
      //   borderColor: theme.palette.secondary.main,
      //   hoverBackgroundColor: theme.palette.secondary.main,
      //   hoverBorderColor: theme.palette.secondary.main,
      //   data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
      //   barPercentage: 0.75,
      //   categoryPercentage: 0.5,
      // },
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
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
        <ThemeProvider theme={themes}>
          <FormGroup row style={{ marginLeft: "5px" }}>
            <FormControlLabel
              control={

                <Checkbox
                  // checked={state.checkedA}
                  color="primary"
                  onChange={handleChange}
                  name="checkedA"
                />

              }
              label="Website Traffic"
              style={{ marginRight: "72px", fontWeight: "bold" }}
            />
            <FormControlLabel
              control={
                <>

                  <Checkbox
                    defaultChecked
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
                    name="checkedF"
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
        </ThemeProvider>
        <Spacer mb={5} />
        <ChartWrapper>
          <Bar data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card >
  );
}

export default withTheme(BarChart);
