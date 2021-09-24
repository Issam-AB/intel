import React from "react";

import {
  Paper,
  Typography,
  Divider as MuiDivider,
  Button,
  Grid,
  Box,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Phone } from "react-feather";
import Feature from "./Feature";

// const Button = styled(MuiButton)(spacing);

const useStyles = makeStyles((theme) => ({
  paper: {
    // width: "63rem",
    height: "30rem",
    marginLeft: "42px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    padding: "22px 33px",
  },
  btnCall: {
    marginRight: "38px",
    color: "#6A74C9",
    borderColor: "#6A74C9",
  },
  startIconsCalls: {
    width: "1rem",
  },
  modePayment: {
    height: "69px",
    marginLeft: "6px",
  },
  itemCenter: {
    textAlign: "center",
  },
  Prime: {
    fontSize: "31px",
    fontWeight: "700",
    lineHeight: "39px",
  },
  dolar: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#6320EE",
  },
  modePaymentt: {
    height: "45px",
    marginTop: "12px",
    marginLeft: "6px",
  },
  paperPrime: {
    padding: "2rem",
  },
  Plan: {
    fontSize: "22px",
    paddingTop: "41px",
    paddingBottom: "15px",
    fontWeight: "600",
    textAlign: "center",
    color: "#FFFFFF",
    borderTopRadius: 8,
  },
  cards: {
    borderRadius: 20,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    border: "2px solid #6320EE",
  },
}));
const Divider = styled(MuiDivider)(spacing);
const PaymentMethode = ({ selectedPlan }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={6}>
      <Grid item md={8}>
        <Paper elevation={3} className={classes.paper}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography className={classes.title}>
              Primary Payment Methode
            </Typography>
            <Button
              variant="outlined"
              startIcon={<Phone />}
              classes={{
                outlined: classes.btnCall,
                startIcon: classes.startIconsCalls,
              }}
            >
              863-399-9200
            </Button>
          </div>
          <Divider
            style={{ height: "2px", margin: "-1px 37px", marginBottom: "3rem" }}
          />
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: "800", lineHeight: "3rem" }}
            >
              Update your payment methode
            </Typography>
            <Typography style={{ fontWeight: "600", fontsize: "15px" }}>
              Fill out this form to update the payment method on file for your
              subsription:
            </Typography>
            <Grid container direction="row" justify="center">
              <img
                className={classes.modePayment}
                src="/static/img/modePayment/masterCard.png"
                alt="master Card"
              />
              <img
                className={classes.modePaymentt}
                src="/static/img/modePayment/visaa.png"
                alt="master Card"
              />
              <img
                style={{ marginLeft: "12px" }}
                className={classes.modePaymentt}
                src="/static/img/modePayment/express.png"
                alt="master Card"
              />
              <img
                className={classes.modePayment}
                src="/static/img/modePayment/discover.png"
                alt="master Card"
              />
            </Grid>
            <Grid container></Grid>
          </div>
        </Paper>
      </Grid>
      <Grid item md={4}>
        <Paper className={classes.cards}>
          <Box
            style={{
              backgroundColor: "#6320EE",
              borderTopLeftRadius: 14,
              borderTopRightRadius: 14,
            }}
          >
            <Typography className={classes.Plan}>Your Plan</Typography>
          </Box>
          <Box className={classes.paperPrime} classes={{ root: classes.root }}>
            <Grid item className={classes.itemCenter}>
              <Typography variant="h3" gutterBottom className={classes.Prime}>
                {selectedPlan.name}
              </Typography>
              <Typography variant="h3" gutterBottom className={classes.dolar}>
                {selectedPlan.price}
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  fontSize: "16px",
                  marginBottom: "20px",
                  fontWeight: "700",
                }}
              >
                {selectedPlan.type}
              </Typography>
            </Grid>
            <Divider my={8} />
            <Grid
              container
              align="center"
              spacing={2}
              style={{ width: "18rem", marginLeft: "4rem" }}
            >
              {selectedPlan.features.map((feature, key) => (
                <Feature
                  key={key}
                  feature={feature}
                  isEntreprise={selectedPlan.isEntreprise}
                />
              ))}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PaymentMethode;
