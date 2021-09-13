import React from "react";
import styled from "styled-components/macro";

import { Button as MuiButton, Menu, MenuItem } from "@material-ui/core";

import {
  Loop as LoopIcon,
  FilterList as FilterListIcon,
  ExpandMore,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { spacing } from "@material-ui/system";
const useStyle = makeStyles({
  button: {
    backgroundColor: "#fff",
  },
});
const Button = styled(MuiButton)(spacing);

const SmallButton = styled(Button)`
  padding: 4px;
  min-width: 0;
  svg {
    width: 0.9em;
    height: 0.9em;
  }
`;

function Actions() {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <SmallButton size="small" mr={2} color={"secondary"}>
        <FilterListIcon />
      </SmallButton>
      <SmallButton size="small" mr={2} color={"secondary"}>
        <LoopIcon />
      </SmallButton>
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
    </React.Fragment>
  );
}

export default Actions;
