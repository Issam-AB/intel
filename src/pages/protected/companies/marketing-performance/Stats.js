import React from "react";
import styled from "styled-components/macro";

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Typography as MuiTypography,
} from "@material-ui/core";

import { rgba } from "polished";
import { makeStyles } from "@material-ui/core/styles";

import { spacing } from "@material-ui/system";
import { ArrowUp } from "react-feather"

const Card = styled(MuiCard)(spacing);

const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  card: {
    border: "1.5px solid #7E4AEB",
    boxShadow: "0px 0px 12px -5px #000000",
  },
});

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const Chip = styled(MuiChip)`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)}px;

  span {
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const Percentage = styled(MuiTypography)`
  span {
    color: ${(props) => props.percentagecolor};
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
    background: ${(props) => rgba(props.percentagecolor, 0.1)};
    padding: 2px;
    border-radius: 3px;
    margin-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const Arrow = styled(ArrowUp)`
    color: #388e3c;
    font-weight: ${(props) => props.theme.typography.fontWeightBold};
    padding: 2px;
    border-radius: 3px;
    margin-right: ${(props) => props.theme.spacing(2)}px;

`;
const Stats = ({ title, amount, chip, percentageText, percentagecolor }) => {
  const classes = useStyles();
  return (
    <Card mb={3} className={classes.card}>
      <CardContent>
        <Typography variant="h5" style={{ fontWeight: "700" }} mb={2}>
          {title}
        </Typography>
        <Typography variant="h1" mb={3}>
          <Box fontWeight="600">{amount}</Box>
        </Typography>
        <Percentage
          variant="subtitle2"
          mb={4}
          color="textSecondary"
          percentagecolor={percentagecolor}
        >
          {/* <Arrow /> */}
          <span>{percentageText}</span> Since last week
        </Percentage>
        <Chip label={chip} />
      </CardContent>
    </Card>
  );
};

export default Stats;
