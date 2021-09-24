import React from "react";

import {
  Paper,
  Typography,
  Grid,
  Button,
  Menu,
  MenuItem,
  Container,
  Divider as MuiDivider,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";

import Table from "./Table";
const Spacer = styled.div(spacing);
const Divider = styled(MuiDivider)(spacing);

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "86.5rem",
    height: "52rem",
    marginLeft: "42px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  title: {
    fontSize: "19px",
    fontWeight: "800",
    lineHeight: "7px",
  },
  titleName: {
    fontSize: "14px",
    fontweight: "600",
  },
  maxWidthSm: {
    maxWidth: "81rem",
  },
}));
const EditProfile = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Container maxWidth="sm" classes={{ maxWidthSm: classes.maxWidthSm }}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ paddingTop: "37px" }}
          >
            <Typography className={classes.title}>Invoices</Typography>
            <div>
              <Button
                className={classes.button}
                variant="outlined"
                color="secondary"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                endIcon={<ExpandMore />}
              >
                This Years
              </Button>
              <Menu
                className={classes.menu}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Today</MenuItem>
                <MenuItem onClick={handleClose}>Yesterday</MenuItem>
                <MenuItem onClick={handleClose}>Last 7 days</MenuItem>
                <MenuItem onClick={handleClose}>Last 30 days</MenuItem>
                <MenuItem onClick={handleClose}>This month</MenuItem>
                <MenuItem onClick={handleClose}>Last month</MenuItem>
              </Menu>
            </div>
          </Grid>
          <Divider my={2} />
        </Container>

        <Spacer mt={14} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={8}
        >
          <Table />
        </Grid>
      </Paper>
    </div>
  );
};

export default EditProfile;
