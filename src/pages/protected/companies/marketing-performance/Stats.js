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
  padding: 0 6px;
  font-size: 85%;
  background-color: #6a74c9;
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
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

const Stats = ({ title, amount, chip, percentageText, percentagecolor }) => {
  const classes = useStyles();
  return (
    <Card mb={3} className={classes.card}>
      <CardContent>
        <Typography variant="h6" mb={4}>
          {title}
        </Typography>
        <Typography variant="h1" mb={3}>
          <Box fontWeight="500">{amount}</Box>
        </Typography>
        <Percentage
          variant="subtitle2"
          mb={4}
          color="textSecondary"
          percentagecolor={percentagecolor}
        >
          <span>{percentageText}</span> Since last week
        </Percentage>
        <Chip label={chip} />
      </CardContent>
    </Card>
  );
};

export default Stats;
