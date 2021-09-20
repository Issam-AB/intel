import React from "react";
import styled from "styled-components/macro";

import {
  Box,
  Card,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
  Button,
} from "@material-ui/core";
// import RefreshIcon from "@material-ui/icons/Refresh";
import { makeStyles } from "@material-ui/core/styles";

import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

const useStyles = makeStyles({
  card: {
    boxShadow: "0px 0px 12px -5px #000000",
    height: "154px",
    marginBottom: "21px"
  },
  button: {
    position: "absolute",
    top: "16px",
    right: "16px",
    padding: "4px 10px",
    fontSize: "85%",
    backgroundColor: "#6a74c9",
    color: "#fff",
    marginbottom: "16px",
  },
});
const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const StatsCall = ({ title, amount, chip, totalCall }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={{ backgroundColor: totalCall ? "#6320ee" : "", color: totalCall ? "#fff" : "" }}>
      <CardContent>
        <Typography variant="h5" style={{ fontWeight: "700" }} mt={4}>
          {title}
        </Typography>
        <Typography variant="h1" mt={5}>
          <Box fontWeight="600" style={{ color: totalCall ? "#fff" : "black" }}>
            {amount}
          </Box>
        </Typography>
        <Button className={classes.button}>
          {chip}
        </Button>
      </CardContent>
    </Card >
  );
};

export default StatsCall;
