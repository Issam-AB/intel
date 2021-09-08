import React from "react";
import styled from "styled-components/macro";

import {
  Box,
  Card,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Typography as MuiTypography,
  Button
} from "@material-ui/core";
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from "@material-ui/core/styles";

import { rgba } from "polished";

import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  card: {
    border: "1.5px solid #388E3C",
    boxShadow: "0px 0px 12px -5px #000000",
  },
  button: {
    position: "absolute",
    top: "16px",
    right: "16px",
    padding: "4px 10px",
    fontSize: "85%",
    backgroundColor: "#6a74c9",
    color: "#fff",
    marginbottom: "16px"

  }
});
const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
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

const Stats = ({ title, amount, chip, percentageText, percentagecolor }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" style={{ fontWeight: "700" }} mb={2}>
          {title}
        </Typography>
        <Typography variant="h1" mb={3}>
          <Box fontWeight="600" color="#388E3C">
            {amount}
          </Box>
        </Typography>
        <Button className={classes.button} endIcon={<RefreshIcon />} >Verify</Button>
      </CardContent>
    </Card>
  );
};

export default Stats;
