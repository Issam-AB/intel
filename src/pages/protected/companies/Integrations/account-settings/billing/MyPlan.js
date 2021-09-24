import React from "react";
import Plan from "./Plan";
import { Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";

const Spacer = styled.div(spacing);

const useStyles = makeStyles((theme) => ({
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
}));
const EditProfile = () => {
  const classes = useStyles();

  const data = [
    {
      name: "Prime",
      type: "Monthly",
      description: "Website Archtecteur",
      features: [
        { name: "Website Archtecteur", description: "" },
        { name: "Accelerated Market", description: "1 Location / 1 Website" },
        { name: "Lead Intel Dashboard", description: "" },
      ],
      price: "$6,999",
      isEntreprise: false,
    },
    {
      name: "Authority",
      type: "Monthly",
      description: "Website Archtecteur",
      features: [
        { name: "Website Archtecteur", description: "" },
        { name: "Accelerated Market", description: "2 Location" },
        { name: "Lead Intel Dashboard", description: "" },
        { name: "Google Ads + Retargeting", description: "" },
        { name: "Dedicated Google Ads Specialist", description: "" },
      ],
      price: "$7,000",
      isEntreprise: false,
    },
    {
      name: "Entreprise",
      type: "Monthly",
      description: "Website Archtecteur",
      features: [
        { name: "Website Archtecteur", description: "" },
        { name: "Accelerated Maeket", description: "4 Location" },
        { name: "Lead Intel Dashboard", description: "" },
        { name: "Google Ads + Retargeting", description: "" },
        { name: "Dedicated Google Ads Specialist", description: "" },
        { name: "24/7 Live Chat", description: "" },
      ],
      price: "$12,758",
      isEntreprise: true,
    },
  ];

  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Grid
          style={{
            paddingTop: "49px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography className={classes.title}>
            We have a plan for evryone
          </Typography>
          <Typography className={classes.titleName}>
            Wheter you're a business or an individual, 14-day trial no credit
            required.
          </Typography>
        </Grid>
        <Spacer mt={14} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={8}
        >
          {data.map((plan, key) => (
            <Plan key={key} data={plan} />
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default EditProfile;
