import React from "react";

import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Paper,
  IconButton,
  InputBase,
  Button,
  Box,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import { Search as SearchIcon } from "@material-ui/icons";
import Integration from "./Integration";
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);
const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  input: {
    padding: "0 0px",
    display: "flex",
    alignItems: "center",
    marginLeft: "-25px",
    width: 542,
    height: 38,
    transition: "0.5s",
    backgroundColor: "#F9F9FC",
    "&:hover, &:focus": {
      border: "1px solid #6320EE",
      opacity: 4,
    },
    "&:hover, &:focus": {
      border: "1px solid #6320EE",
      opacity: 4,
    },
  },
  iconButton: {
    padding: "5px 10px",
  },
  ButtonSearch: {
    backgroundColor: "#23CC94",
    color: "white",
    width: "8rem",
    marginLeft: "9px",
  },
  textButton: {
    fontSize: "15px",
  },
  root: {
    background: "#F9F9FC",
    position: "-webkit-sticky",
    position: "sticky",
    top: 20,
    bottom: 20,
    paddingTop: "40px",
    paddingBottom: "40px",
    zIndex: 5,
  },
});

const CallLog = () => {
  const [totalCall, setTotalCall] = React.useState(true);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Helmet title="Integration" />
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={4}
        style={{ marginTop: "1rem" }}
        classes={{ root: classes.root }}
      >
        <Grid item style={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            style={{ marginBottom: "10px", fontWeight: "700" }}
            gutterBottom
          >
            Intelegence Integrations - +$100
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ marginTop: "-9px", fontWeight: "600", width: "37rem" }}
          >
            Select one our custom integrations to sync your data with Roofing
            intellegence or send your leads somewhere else! Don't see your
            desired integration? Contact us for a custom integration quote.
          </Typography>
          <Box display="flex" style={{ marginTop: "1rem" }}>
            <Paper component="form" className={classes.input}>
              <IconButton className={classes.iconButton} aria-label="menu">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search Integrations"
                inputProps={{ "aria-label": "search good leads" }}
              />
            </Paper>
            <Button
              classes={{
                root: classes.ButtonSearch,
                label: classes.textButton,
              }}
            >
              Search
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider my={3} />
      <Grid container>
        <Integration />
      </Grid>
    </React.Fragment>
  );
};

export default withTheme(CallLog);
