import React from "react";
import styled from "styled-components/macro";

import Popup from "./Popup"
import { Button as MuiButton } from "@material-ui/core";

// import { Plus } from "react-feather"
import { makeStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import { spacing } from "@material-ui/system";
const useStyle = makeStyles({
  button: {
    backgroundColor: "#6A74C9",
    width: "218px",
    height: "51px",
    color: "white",
    borderRadius: "4px",
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

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <React.Fragment>
      <Button
        classes={{ label: classes.label, startIcon: classes.startIcon }}
        className={classes.button}
        // aria-owns={anchorEl ? "simple-menu" : undefined}
        // aria-haspopup="true"
        onClick={handleClickOpen}
        startIcon={<Add />}
      >
        Invite New User
      </Button>
      {open && (
        <Popup open={open} setOpen={setOpen} handleClose={handleClose} />
      )}
    </React.Fragment>
  );
}

export default Actions;
