import React from "react";

import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import EditeProfile from "./EditProfile";
import PassordChange from "./PsswordChange";
import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import { User, Lock } from "react-feather";

const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  title: {
    fontSize: "18px",
    fontWeight: "700",
  },
  ListItem: {
    width: "119%",
    paddingTop: "3px",
    paddingBottom: "3px",
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

const Profile = () => {
  const [isProfileShowing, setProfileShowing] = React.useState(true);
  const [isPasswordShowing, setPasswordShowing] = React.useState(false);

  const handleShowProfile = () => {
    setPasswordShowing(false);
    setProfileShowing(true);
  };

  const handleShowPassword = () => {
    setPasswordShowing(true);
    setProfileShowing(false);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet title="Integration" />
      <Grid container>
        <Grid item>
          <Typography
            variant="h3"
            style={{ marginBottom: "10px", fontWeight: "700" }}
            gutterBottom
          >
            Welcome, Client's First Name
          </Typography>
        </Grid>
      </Grid>
      <Divider my={3} />
      <Grid container direction="row">
        <Grid item>
          <div>
            <Typography variant="h4" className={classes.title}>
              My Profile Settings
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontsize: "13px", fontWeight: "600" }}
            >
              Manage your Intelegence account
            </Typography>
          </div>
          <div style={{ marginTop: "13px" }}>
            <ListItem
              style={{ backgroundColor: isProfileShowing ? "#ffff" : false }}
              button
              classes={{ root: classes.ListItem }}
              onClick={handleShowProfile}
            >
              <ListItemIcon classes={{ root: classes.ListItemIcon }}>
                <User className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                primary="Edit Profile"
                classes={{ primary: classes.primary }}
              />
            </ListItem>
            <ListItem
              style={{ backgroundColor: isPasswordShowing ? "#ffff" : false }}
              classes={{ root: classes.ListItem }}
              onClick={handleShowPassword}
            >
              <ListItemIcon classes={{ root: classes.ListItemIcon }}>
                <Lock className={classes.icons} />
              </ListItemIcon>
              <ListItemText
                primary="Change Password"
                classes={{ primary: classes.primary }}
              />
            </ListItem>
          </div>
        </Grid>
        <Grid item>
          {isProfileShowing ? <EditeProfile /> : ""}
          {isPasswordShowing ? <PassordChange /> : ""}

          <Spacer mb={50} />
        </Grid>
      </Grid>

      <Grid container direction="row"></Grid>
    </React.Fragment>
  );
};

export default withTheme(Profile);
