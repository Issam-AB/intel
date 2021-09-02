import React from "react";
import styled from "styled-components/macro";

import {
  Card,
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
  },
  content: {
    textAlign: "center",
    fontWeight: "bold",
    borderBottom: "1px solid black",
  },
});

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
      <CardContent>
        <Typography variant="h5" className={classes.content}>
          {" "}
          {title}{" "}
        </Typography>{" "}
      </CardContent>{" "}
    </Card>
  );
};

export default Account;
