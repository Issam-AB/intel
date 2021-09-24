/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography, Grid } from "@material-ui/core";
// import Popup from "./Popup";
import { Check } from "react-feather";
import { makeStyles } from "@material-ui/core/styles";

const boxStyle = {
  paper: {
    width: "86.5rem",
    height: "48rem",
    marginLeft: "42px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  title: {
    fontSize: "19px",
    fontWeight: "800",
    padding: "13px 33px",
    lineHeight: "7px",
  },
  titleName: {
    fontSize: "14px",
    fontweight: "600",
  },
  itemCenter: {
    textAlign: "center",
  },
  paperPrime: {
    marginLeft: "3rem",
    padding: "3rem",
    height: "37rem",
    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  root: {
    border: "2px solid white",
    "&:hover": {
      border: "2px solid #6320EE",
    },
    borderRadius: "8px",
    boxShadow: null,
  },
  root3: {
    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
    border: "2px solid white",
    "&:hover": {
      border: "2px solid #6320EE",
      backgroundColor: "#6320EE",
      color: "white",
    },
    borderRadius: "8px",
  },
  Prime: {
    fontSize: "23px",
    fontWeight: "700",
    lineHeight: "39px",
  },
  dolar: {
    fontSize: "30px",
    fontWeight: "800",
    color: "#6320EE",
  },
  dolar3: {
    fontSize: "30px",
    fontWeight: "800",
    color: "#6320EE",
    "&:hover": {
      color: "white",
    },
  },
  button: {
    backgroundColor: "#23CC94",
    padding: "15px 80px",
    color: "white",
    fontSize: "15px",
    fontWeight: "700",
    marginLeft: "-15px",
  },
  icon: {
    width: "21px",
    color: "#23CC94",
    height: "25px",
    marginRight: "6px",
  },
  card: {
    marginTop: "20px",
    marginRight: "30px",
    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "8px",
    border: "2px solid white",
    "&:hover": {
      border: "2px solid #6320EE",
    },
  },
  label: {
    width: "6rem",
  },
};

const entrepriseStyle = {
  ...boxStyle,
  dolar: {
    fontSize: "30px",
    fontWeight: "800",
    color: "#fff",
  },
  root: {
    border: "2px solid #6320EE",
    borderRadius: "8px",
    backgroundColor: "#6320EE",
    color: "#fff",
  },
};

const useEntrepriseStyles = makeStyles((theme) => entrepriseStyle);

const useStyles = makeStyles((theme) => boxStyle);

const Feature = ({ feature, isEntreprise }) => {
  const classes = isEntreprise ? useEntrepriseStyles() : useStyles();
  return (
    <Grid item>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Check className={classes.icon} />
        <Typography
          variant="h5"
          style={{ fontSize: "17px", fontWeight: "700" }}
        >
          {feature.name}
        </Typography>
      </div>

      {feature.description !== "" ? (
        <Typography
          variant="h5"
          style={{
            fontSize: "14px",
            fontWeight: "600",
            float: "left",
            marginLeft: "25px",
            padding: "3px",
          }}
        >
          {feature.description}
        </Typography>
      ) : (
        ""
      )}
    </Grid>
  );
};
export default Feature;
