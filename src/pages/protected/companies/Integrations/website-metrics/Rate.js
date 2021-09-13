import React from "react";
import styled from "styled-components/macro";

import {
  Box,
  Card,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Typography as MuiTypography,
} from "@material-ui/core";

import arrowup from "../../../../../vendor/icons/arrow-up.svg"

import { makeStyles } from "@material-ui/core/styles";
import { rgba } from "polished";

import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  card: {
    boxShadow: "0px 0px 12px -5px #000000",
  },
});

const CardContent = styled(MuiCardContent)`
  position: relative;
  text-align: center;
  color: white;
  background-color: #6320ee;
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
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" style={{ fontWeight: "700" }} mb={2}>
          {title}
        </Typography>
        <Typography variant="h1" mb={3}>
          <Box fontWeight="600">{amount}</Box>
        </Typography>
        <Box ml={1} display="flex" justifyContent="center">
          <img
            src={arrowup}
            alt="arrowup"
            style={{
              marginRight: "8px",
              width: "8px",
              height: "19px",
            }}
          />
          <Percentage
            variant="subtitle2"
            mb={4}
            percentagecolor={percentagecolor}
          >
            <span
              style={{
                color: "#fff",
                backgroundColor: "#388e3c",
                padding: "0 11px",
              }}
            >
              {percentageText}
            </span>{" "}
            Since last week
          </Percentage>
        </Box>

        <Chip label={chip} />
      </CardContent>
    </Card>
  );
};

export default Stats;
