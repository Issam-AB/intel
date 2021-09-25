import React from "react";
import styled from "styled-components/macro";

import { Button as MuiButton } from "@material-ui/core";

// import { Plus } from "react-feather"
import { makeStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import { spacing } from "@material-ui/system";
const useStyle = makeStyles({
  button: {
    backgroundColor: "#23CC94",
    width: "212px",
    height: "60px",
    color: "white",
    borderRadius: "8px",
  },
  label: {
    fontSize: "17px",
    fontWeight: "600",
  },
  startIcon: {
    fontSize: "24px",
  },
});
const Button = styled(MuiButton)(spacing);

function Actions() {
  const classes = useStyle();
  const [setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <React.Fragment>
      <Button
        classes={{ label: classes.label, startIcon: classes.startIcon }}
        className={classes.button}
        // aria-owns={anchorEl ? "simple-menu" : undefined}
        // aria-haspopup="true"
        onClick={handleClick}
        startIcon={<Add />}
      >
        Open New Ticket
      </Button>
    </React.Fragment>
  );
}

export default Actions;
