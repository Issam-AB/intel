import React from "react";
import styled from "styled-components/macro";

import {
  Grid,
  Card,
  Button,
  Avatar,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { spacing } from "@material-ui/system";

import { Smartphone, Mail } from "react-feather";

const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 200,
    borderRadius: "12px",
    boxShadow: "0px 0px 12px -5px #000000",
  },
  title: {
    textAlign: "center",
    borderBottom: "1px solid #E8EEF1",
    padding: "12px",
    fontSize: "16px",
  },
  content: {
    maxWidth: "600px",
    textAlign: "center",
    marginLeft: "35px",
  },
  flex: {
    display: "flex",
    marginBottom: "12px",
  },
  avatar: {
    width: "85px",
    height: "85px",
  },
  button: {
    margin: theme.spacing(2),
    color: "#6A74C9",
    padding: "5px 25px",
    marginTop: "20px",
  },
  buttons: {
    margin: theme.spacing(2),
    color: "#ffff",
    backgroundColor: "#6A74C9",
    padding: "5px 18px",
    marginTop: "20px",
  },
  name: {
    fontWeight: "700",
  },
}));

const AboutIcon = styled.span`
  display: flex;
  padding-right: ${(props) => props.theme.spacing(2)}px;
  color: #6a74c9;

  svg {
    width: 18px;
    height: 18px;
  }
`;
const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;
const Centered = styled.div`
  text-align: center;
`;

const Account = ({ title, name, call, email, avatar }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography className={classes.title} variant="h2">
        {" "}
        {title}{" "}
      </Typography>{" "}
      <CardContent className={classes.content}>
        <Grid container direction="row" alignItems="center" mb={2} spacing={5}>
          <Grid item>
            <Avatar
              className={classes.avatar}
              alt="Lucy Lavender"
              src="/static/img/avatars/avatar-1.jpg"
            />
          </Grid>
          <Grid item>
            <Grid item className={classes.flex}>
              <Typography variant="h6" className={classes.name}>
                Micheal Field
              </Typography>
            </Grid>
            <Grid item className={classes.flex}>
              <AboutIcon>
                <Smartphone />
              </AboutIcon>
              <Typography variant="body1">(863) 999-0010</Typography>
            </Grid>
            <Grid item className={classes.flex}>
              <AboutIcon>
                <Mail />
              </AboutIcon>
              <Typography variant="body1">Manager@backend.com</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Centered>
          <Button
            mr={2}
            variant="outlined"
            startIcon={
              <AboutIcon>
                <Smartphone />
              </AboutIcon>
            }
            className={classes.button}
          >
            Call
          </Button>
          <Button
            mr={2}
            variant="contained"
            startIcon={
              <AboutIcon>
                <Mail style={{ color: "white" }} />
              </AboutIcon>
            }
            className={classes.buttons}
          >
            Open Ticket
          </Button>
        </Centered>
      </CardContent>
    </Card>
  );
};

export default Account;
