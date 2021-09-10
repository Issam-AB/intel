import React from "react";
import styled from "styled-components/macro";
import { ChevronDown } from "react-feather";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Flag = styled.img`
  border-radius: 50%;
  width: 34px;
  height: 34px;
`;

const useStyles = makeStyles((theme) => ({
  menuappbar: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    //borderBottom: "1px solid dark",
  },
}));

function LanguagesDropdown() {
  const classes = useStyles();
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="default"
        >
          <Flag src="/static/img/avatars/avatar-1.jpg" alt="avatar" />
          <ChevronDown />
        </IconButton>
      </Tooltip>
      <Menu
        // classes={classes.menuappbar}
        anchorEl={anchorMenu}
        keepMounted
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={closeMenu}>My Profile</MenuItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="User" />
          {open ? <ChevronRightIcon /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Billing" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText primary="Integration" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText primary="Support" />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        </Collapse>
      </Menu>
    </React.Fragment>
  );
}

export default LanguagesDropdown;
