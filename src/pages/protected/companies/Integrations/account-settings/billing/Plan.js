/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Typography,
  Divider as MuiDivider,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import Feature from "./Feature";

const Divider = styled(MuiDivider)(spacing);

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
    width: "19px",
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

const Plan = ({ data }) => {
  const classes = data.isEntreprise ? useEntrepriseStyles() : useStyles();

  return (
    <Box className={classes.paperPrime} classes={{ root: classes.root }}>
      <Grid item className={classes.itemCenter}>
        <Typography variant="h3" gutterBottom className={classes.Prime}>
          {data.name}
        </Typography>
        <Typography variant="h3" gutterBottom className={classes.dolar}>
          {data.price}
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          style={{ fontSize: "16px", marginBottom: "20px" }}
        >
          {data.type}
        </Typography>
        <Button className={classes.button} classes={{ label: classes.label }}>
          Get Started
        </Button>
      </Grid>
      <Divider my={8} />
      <Grid
        container
        align="center"
        spacing={2}
        style={{ width: "19rem", marginLeft: "-1rem" }}
      >
        {data.features.map((feature, key) => (
          <Feature
            key={key}
            feature={feature}
            isEntreprise={data.isEntreprise}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Plan;
