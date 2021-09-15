import React from "react";
import styled from "styled-components/macro";


import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
  ListItemIcon,
  Typography,
} from "@material-ui/core";

import { ChevronDown, Grid, Headphones, LogOut, CreditCard, User, Users } from "react-feather"
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
  paper: {
    left: "1735px",
    width: "167px",
    marginTop: "11px",
    borderRadius: "none",
    boxShadow: "0px 0px 12px -5px #000000",
  },
  icons: {
    width: "18px"
  }
}));

function LanguagesDropdown() {
  const classes = useStyles();
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const [open, setOpen] = React.useState(true);

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleClose = () => {
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
        classes={{ paper: classes.paper }}
        anchorEl={anchorMenu}
        keepMounted
        open={Boolean(anchorMenu)}
        onClose={handleClose}
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ minWidth: "29px" }}>
            <User className={classes.icons} />
          </ListItemIcon>
          <Typography variant="inherit" align="right">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ minWidth: "29px" }}>
            <Users className={classes.icons} />
          </ListItemIcon>
          <Typography variant="inherit" align="right">
            User
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ minWidth: "29px" }}>
            <CreditCard className={classes.icons} />
          </ListItemIcon>
          <Typography variant="inherit" align="right">
            Billing
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ borderBottom: "1px solid #E0E0E0", borderTop: "1px solid #E0E0E0", }}>
          <ListItemIcon style={{ minWidth: "29px", }}>
            <Grid className={classes.icons} />
          </ListItemIcon>
          <Typography variant="inherit" align="right">
            Integrations
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ borderBottom: "1px solid #E0E0E0", }}>
          <ListItemIcon style={{ minWidth: "29px" }}>
            <Headphones className={classes.icons} />
          </ListItemIcon>
          <Typography variant="inherit" align="right">
            Support
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ minWidth: "29px" }}>
            <LogOut className={classes.icons} />
          </ListItemIcon>
          <Typography variant="inherit" align="right">
            Sign Out
          </Typography>
        </MenuItem>

      </Menu>
    </React.Fragment>
  );
}

export default LanguagesDropdown;
