import React from "react";
import styled from "styled-components/macro";

import {
  Badge,
  Grid,
  Card,
  Avatar,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  root: {
    minHeight: 200,
    borderRadius: "12px",
    boxShadow: "0px 0px 12px -5px #000000",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    borderBottom: "1px solid #E8EEF1",
    padding: "12px",
  },
  content: {
    maxWidth: "500px",
  },
});

const SidebarFooterText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
`;
const SidebarFooterSubText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
  font-size: 0.7rem;
  display: block;
  padding: 1px;
`;

const SidebarFooterBadge = styled(Badge)`
  margin-right: ${(props) => props.theme.spacing(1)}px;
  span {
    background-color: ${(props) =>
      props.theme.sidebar.footer.online.background};
    border: 1.5px solid ${(props) => props.theme.palette.common.white};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const Account = ({ title, name, call, email, avatar }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography className={classes.title} variant="h5">
        {" "}
        {title}{" "}
      </Typography>{" "}
      <CardContent className={classes.content}>
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
              <Avatar
                alt="Lucy Lavender"
                src="/static/img/avatars/avatar-1.jpg"
              />
            </SidebarFooterBadge>
          </Grid>
          <Grid item>
            <SidebarFooterText variant="body2">Lucy Lavender</SidebarFooterText>
            <SidebarFooterSubText variant="caption">
              UX Designer
            </SidebarFooterSubText>
          </Grid>
        </Grid>
      </CardContent>{" "}
    </Card>
  );
};

export default Account;
