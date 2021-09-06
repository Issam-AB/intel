import React from "react";
import styled from "styled-components/macro";

import {
  Card,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { spacing } from "@material-ui/system";
import { MoreVertical } from "react-feather";

const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  root: {
    minHeight: 228,
    alignItems: "center",
    backgroundColor: "#6320EE",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "0px 0px 12px -5px #000000",
  },
  content: {
    textAlign: "center",
    marginTop: "53px",
    fontWeight: "bold",
    fontSize: "38px",
    color: "#fff",
  },
});

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const Chip = styled(MoreVertical)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
`;

const Stats = ({ title, amount, chip, percentageText, percentagecolor }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h1" mb={6} className={classes.content}>
          {title}
        </Typography>
        <Chip />
      </CardContent>
    </Card>
  );
};

export default Stats;
