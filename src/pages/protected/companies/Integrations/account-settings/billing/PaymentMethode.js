import React from "react";

import {
  Paper,
  Typography,
  Divider as MuiDivider,
  Button,
  Grid,
  TextField as MuiTextField,
} from "@material-ui/core";
// import Popup from "./Popup";
import { Alert as MuiAlert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Phone } from "react-feather";

import { Backup } from "@material-ui/icons";
const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

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
}));
const Divider = styled(MuiDivider)(spacing);
const EditProfile = () => {
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
            <Typography style={{ fontWeight: "600", fontsize: "14px" }}>
              Fill out this form to update the payment method on file for your
              subsription:
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item md={4}>
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.title}>
            Primary Payment Methode
          </Typography>
          <Divider />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EditProfile;
