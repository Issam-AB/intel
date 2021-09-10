import React, { useState } from "react";
import styled from "styled-components/macro";
import { rgba } from "polished";
import { NavLink, withRouter } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../vendor/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";

// import { spacing } from "@material-ui/system";

import {
  Badge,
  Menu,
  MenuItem,
  Chip,
  Grid,
  Avatar,
  Collapse,
  Drawer as MuiDrawer,
  List as MuiList,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
} from "@material-ui/core";

import {
  ExpandMore,
  ChevronRight,
  KeyboardArrowUp,
  PersonOutline,
  PeopleAltOutlined,
  ExitToAppOutlined,
} from "@material-ui/icons";

import { sidebarRoutes as routes } from "../routes/index";

import { ReactComponent as Logo } from "../vendor/logo.svg";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: "#1E88E5",
    fontSize: "25px",
    fontWeight: "bold",
  },
  paper: {
    marginLeft: "-61.5px",
    width: "210px",
    marginTop: "-3px",
    borderRadius: "none",
  },
});

const Drawer = styled(MuiDrawer)`
  border-right: 0;

  > div {
    border-right: 0;
  }
`;

const Scrollbar = styled(PerfectScrollbar)`
  background-color: #0d0d2b;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const List = styled(MuiList)`
  background-color: #0d0d2b;
`;

const Items = styled.div`
  padding-top: ${(props) => props.theme.spacing(6)}px;
  padding-bottom: ${(props) => props.theme.spacing(6)}px;
`;

const Brand = styled(ListItem)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  background-color: #04040d;
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;
  padding-left: ${(props) => props.theme.spacing(6)}px;
  padding-right: ${(props) => props.theme.spacing(6)}px;
  justify-content: center;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  &:hover {
    background-color: #04040d;
  }
`;

const BrandIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 200px;
  height: 70px;
`;

const Category = styled(ListItem)`
  padding-top: ${(props) => props.theme.spacing(3)}px;
  padding-bottom: ${(props) => props.theme.spacing(3)}px;
  padding-left: ${(props) => props.theme.spacing(3)}px;
  padding-right: ${(props) => props.theme.spacing(7)}px;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};

  svg {
    color: ${(props) => props.theme.sidebar.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  &.${(props) => props.activeClassName} {
    background-color: #04040d;

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const CategoryText = styled(ListItemText)`
  margin: 0;
  span {
    color: ${(props) => props.theme.sidebar.color};
    font-size: ${(props) => props.theme.typography.body1.fontSize}px;
    padding: 0 ${(props) => props.theme.spacing(4)}px;
  }
`;

const CategoryIconLess = styled(ChevronRight)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const CategoryIconMore = styled(ExpandMore)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const CategoryIconUp = styled(KeyboardArrowUp)`
  color: #d6dbe5;
  padding-top: 5px;
  font-size: 40px;
`;

const Link = styled(ListItem)`
  padding-left: ${(props) => props.theme.spacing(10)}px;
  padding-top: ${(props) => props.theme.spacing(1)}px;
  padding-bottom: ${(props) => props.theme.spacing(1)}px;
  padding-right: ${(props) => props.theme.spacing(7)}px;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};

  svg {
    color: ${(props) => props.theme.sidebar.color};
    font-size: 20px;
    width: 26px;
    height: 26px;
    opacity: 0.5;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }

  &:hover {
    background: #14213d;
  }

  &.${(props) => props.activeClassName} {
    background-color: #04040d;

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const LinkText = styled(ListItemText)`
  color: #868695;
  span {
    font-size: ${(props) => props.theme.typography.body1.fontSize}px;
  }
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 30px;
`;

const LinkBadge = styled(Chip)`
  font-size: 11px;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  height: 20px;
  position: absolute;
  right: 28px;
  top: 8px;
  background: #6320ee;
  border-radius: 25px;

  span.MuiChip-label,
  span.MuiChip-label:hover {
    cursor: pointer;
    color: ${(props) => props.theme.sidebar.badge.color};
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const CategoryBadge = styled(LinkBadge)`
  top: 12px;
`;

const SidebarSection = styled(Typography)`
  color: #868695;
  padding: ${(props) => props.theme.spacing(4)}px
    ${(props) => props.theme.spacing(7)}px
    ${(props) => props.theme.spacing(1)}px;
  opacity: 0.9;
  display: block;
`;

const SidebarFooter = styled.div`
  background-color: #000000 !important;
  padding: ${(props) => props.theme.spacing(2.75)}px
    ${(props) => props.theme.spacing(4)}px;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const SidebarFooterText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
  padding-top: 12px;
`;

const SidebarFooterBadge = styled(Badge)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
`;

const SidebarCategory = ({
  name,
  classes,
  isOpen,
  isCollapsable,
  badge,
  ...rest
}) => {
  return (
    <Category {...rest}>
      <CategoryText>{name}</CategoryText>
      {isCollapsable ? (
        isOpen ? (
          <CategoryIconLess />
        ) : (
          <CategoryIconMore />
        )
      ) : null}
      {badge ? <CategoryBadge label={badge} /> : ""}
    </Category>
  );
};

const SidebarLink = ({ name, to, badge, icon }) => {
  return (
    <Link
      button
      dense
      component={NavLink}
      exact
      to={to}
      activeClassName="active"
    >
      {icon}
      <LinkText>{name}</LinkText>
      {badge ? <LinkBadge label={badge} /> : ""}
    </Link>
  );
};

const Sidebar = ({ classes, staticContext, location, ...rest }) => {
  // Menu popup user
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const initOpenRoutes = () => {
    /* Open collapse element that matches current url */
    const pathName = location.pathname;

    let _routes = {};

    routes.forEach((route, index) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      const opentogle = route.children;
      const isHome = route.containsHome && pathName === "/";

      _routes = Object.assign({}, _routes, {
        [index]: isActive || isOpen || isHome || opentogle,
      });
    });

    return _routes;
  };

  const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes());

  const toggle = (index) => {
    //Collapse all elements
    // Object.keys(openRoutes).forEach(
    //   (item) =>
    //     openRoutes[index] ||
    //     setOpenRoutes((openRoutes) =>
    //       Object.assign({}, openRoutes, { [item]: false })
    //     )
    // );

    // Toggle selected element
    setOpenRoutes((openRoutes) =>
      Object.assign({}, openRoutes, { [index]: !openRoutes[index] })
    );
  };
  const classess = useStyles();

  return (
    <Drawer variant="permanent" {...rest}>
      <Brand component={NavLink} to="/" button>
        <BrandIcon />{" "}
      </Brand>
      <Scrollbar>
        <List disablePadding>
          <Items>
            {routes.map((category, index) => (
              <React.Fragment key={index}>
                {category.header ? (
                  <SidebarSection>{category.header}</SidebarSection>
                ) : null}

                {category.children ? (
                  <React.Fragment key={index}>
                    <SidebarCategory
                      isOpen={!openRoutes[index]}
                      isCollapsable={true}
                      name={category.id}
                      button={true}
                      onClick={() => toggle(index)}
                    />

                    <Collapse
                      in={openRoutes[index]}
                      timeout="auto"
                      unmountOnExit
                    >
                      {category.children.map((route, index) => (
                        <SidebarLink
                          key={index}
                          name={route.name}
                          to={route.path}
                          icon={route.icon}
                          badge={route.badge}
                        />
                      ))}
                    </Collapse>
                  </React.Fragment>
                ) : category.id ? (
                  <SidebarCategory
                    isCollapsable={false}
                    name={category.id}
                    to={category.path}
                    activeClassName="active"
                    component={NavLink}
                    exact
                    button
                    badge={category.badge}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </Items>
        </List>
      </Scrollbar>
      <SidebarFooter>
        <Grid container spacing={2}>
          <Grid item>
            <SidebarFooterBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar className={classess.avatar} alt="Lucy Lavender">
                C{" "}
              </Avatar>
            </SidebarFooterBadge>
          </Grid>
          <Grid item md={6}>
            <SidebarFooterText variant="body2">Client Name</SidebarFooterText>
          </Grid>
          <Grid item justify="center">
            <CategoryIconUp onClick={handleClick} />
            <Menu
              classes={{ paper: classess.paper }}
              // id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              transformOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              {/* <ListItemIcon>
                  <PersonOutline fontSize="small" />
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                </ListItemIcon> */}

              <MenuItem onClick={handleClose}>
                <ListItemIcon style={{ minWidth: "29px" }}>
                  <PersonOutline fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit" align="right">
                  My Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon style={{ minWidth: "29px" }}>
                  <PeopleAltOutlined fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit" align="right">
                  User
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon style={{ minWidth: "29px" }}>
                  <ExitToAppOutlined fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit" align="right">
                  Signe Out
                </Typography>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </SidebarFooter>
    </Drawer>
  );
};

export default withRouter(Sidebar);
