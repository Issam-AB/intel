import React from "react";

import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import MyPlan from "./MyPlan";
import PaymentMethods from "./PaymentMethode";
import BillingDetails from "./BillingDetails";
import Invoices from "./Invoices";

import {
  Grid,
  Typography as MuiTypography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import { CheckSquare, CreditCard, List, Copy } from "react-feather";

// const Divider = styled(MuiDivider)(spacing);
// const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);
const data = {
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
};

const useStyles = makeStyles({
  title: {
    fontSize: "20px",
    fontWeight: "700",
    marginLeft: "10px",
  },
  ListItem: {
    width: "140%",
    paddingTop: "5px",
    paddingBottom: "3px",
    marginLeft: "-19px",
    paddingLeft: "29px",
    "&:hover, &:focus": {
      backgroundColor: "#ffff",
    },
  },
  icons: {
    width: "18px",
  },
  ListItemIcon: {
    minWidth: "36px",
  },
  primary: {
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },
});

const Billing = () => {
  const [isProfileShowing, setProfileShowing] = React.useState(true);
  const [isPayemntShowing, setPayemntShowing] = React.useState(false);
  const [isBillingDetails, setBillingDetails] = React.useState(false);
  const [isInvoicesShowing, setInvoicesShowing] = React.useState(false);

  const handleShowProfile = () => {
    setPayemntShowing(false);
    setProfileShowing(true);
    setBillingDetails(false);
    setInvoicesShowing(false);
  };

  const handleShowPayement = () => {
    setPayemntShowing(true);
    setProfileShowing(false);
    setBillingDetails(false);
    setInvoicesShowing(false);
  };
  const handlShowBillingDetails = () => {
    setPayemntShowing(false);
    setProfileShowing(false);
    setBillingDetails(true);
    setInvoicesShowing(false);
  };
  const handlShowInvoices = () => {
    setPayemntShowing(false);
    setProfileShowing(false);
    setBillingDetails(false);
    setInvoicesShowing(true);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet title="Integration" />

      <Grid container direction="row">
        <Grid item>
          <div>
            <Typography variant="h4" className={classes.title}>
              Billing
            </Typography>
          </div>
          <div style={{ marginTop: "30px" }}>
            <ListItem
              style={{ backgroundColor: isProfileShowing ? "#ffff" : false }}
              button
              classes={{ root: classes.ListItem }}
              onClick={handleShowProfile}
            >
              <ListItemIcon classes={{ root: classes.ListItemIcon }}>
                <CheckSquare className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                primary="My Plan"
                classes={{ primary: classes.primary }}
              />
            </ListItem>
            <ListItem
              style={{ backgroundColor: isPayemntShowing ? "#ffff" : false }}
              classes={{ root: classes.ListItem }}
              onClick={handleShowPayement}
            >
              <ListItemIcon classes={{ root: classes.ListItemIcon }}>
                <CreditCard className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                primary="Payment Method"
                classes={{ primary: classes.primary }}
              />
            </ListItem>
            <ListItem
              style={{
                backgroundColor: isBillingDetails ? "#ffff" : false,
              }}
              classes={{ root: classes.ListItem }}
              onClick={handlShowBillingDetails}
            >
              <ListItemIcon classes={{ root: classes.ListItemIcon }}>
                <List className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                primary="Billing Details"
                classes={{ primary: classes.primary }}
              />
            </ListItem>
            <ListItem
              style={{ backgroundColor: isInvoicesShowing ? "#ffff" : false }}
              classes={{ root: classes.ListItem }}
              onClick={handlShowInvoices}
            >
              <ListItemIcon classes={{ root: classes.ListItemIcon }}>
                <Copy className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                primary="Invoices"
                classes={{ primary: classes.primary }}
              />
            </ListItem>
          </div>
        </Grid>
        <Grid item md={10}>
          {isProfileShowing ? <MyPlan /> : ""}
          {isPayemntShowing ? <PaymentMethods selectedPlan={data} /> : ""}
          {isBillingDetails ? <BillingDetails /> : ""}
          {isInvoicesShowing ? <Invoices /> : ""}

          {/* <Spacer mb={50} /> */}
        </Grid>
      </Grid>

      <Grid container direction="row"></Grid>
    </React.Fragment>
  );
};

export default withTheme(Billing);
