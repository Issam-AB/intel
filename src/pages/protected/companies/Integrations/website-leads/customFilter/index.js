import React, { useState } from "react";

import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
// import AdvancedTable from "./AdvancedTable";
import Actions from "./Actions";
import BarChart from "./BarChart";
import Intelegence from "./Intelegence";
import Account from "./Account";
import CustomBlock from "./CustomBlock";

const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);


const CustomFilter = () => {
  const [chipData, setChipData] = useState([
    { key: 0, label: "jack@spam.com" },
    { key: 1, label: "ThomasRShaw@dayrep.com" },
    { key: 2, label: "MargaretBChen@rtyta.com" },
    { key: 3, label: "jack@spam.com" },
    { key: 4, label: "ThomasRShaw@dayrep.com" },
    { key: 5, label: "MargaretBChen@rtyta.com" },
    { key: 6, label: "jack@spam.com" },
    { key: 7, label: "ThomasRShaw@dayrep.com" },
    { key: 8, label: "MargaretBChen@rtyta.com" },
    { key: 9, label: "jack@spam.com" },
    { key: 10, label: "ThomasRShaw@dayrep.com" },
    { key: 11, label: "MargaretBChen@rtyta.com" },
    { key: 12, label: "jack@spam.com" },
    { key: 13, label: "ThomasRShaw@dayrep.com" },
    { key: 14, label: "MargaretBChen@rtyta.com" },
    { key: 15, label: "jack@spam.com" },
    { key: 16, label: "ThomasRShaw@dayrep.com" },
    { key: 17, label: "MargaretBChen@rtyta.com" },
    { key: 18, label: "jack@spam.com" },
    { key: 19, label: "ThomasRShaw@dayrep.com" },
    { key: 20, label: "MargaretBChen@rtyta.com" },
  ]);
  const [button, setButton] = useState(true);
  const handleDelete = (data) => () => {
    // if (data.label === "React") {
    //     alert("Why would you want to delete React?! :)"); // eslint-disable-line no-alert
    //     return;
    // }

    setChipData(chipData.filter((item) => item.key !== data.key));
  };
  return (
    <React.Fragment>
      <Helmet title="Marketing Performance" />
      <Grid container justify="space-between" spacing={4}>
        <Grid item>
          <Typography
            variant="h3"
            style={{ marginBottom: "10px", fontWeight: "700" }}
            gutterBottom
          >
            Website Leads
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ marginTop: "-10px", fontWeight: "600" }}
          >
            Welcome back, Client's <span>Fist Name!</span> We've missed you.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={3} />

      <Grid container spacing={6} style={{ marginTop: "10px" }}>
        <Grid item lg={3}>
          <Grid item xs={12} lg={4} xl>
            <Intelegence title="INTELLIGENCE DASHBOARD" />
          </Grid>
          <Grid item xs={12} lg={4} xl>
            <Account
              title="Account Manager"
              name="Michael Field"
              call="(863)999-0010"
              email="Manager@backend.com"
              avatar="/static/img/avatars/avatar-"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={9}>
          <BarChart />
        </Grid>
      </Grid>
      <Spacer mb={6} />
      <Grid container spacing={6}>
        <Grid item>
          <Typography
            variant="h3"
            style={{ marginBottom: "10px", fontWeight: "700" }}
            gutterBottom
          >
            Custom Block Filters
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ marginTop: "-10px", fontWeight: "600" }}
          >
            Welcome back, Client's <span>Fist Name!</span> We've missed you.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <CustomBlock title="Blocked Email:" chipData={chipData} handleDelete={handleDelete} button={button} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <CustomBlock title="Blocked Names:" chipData={chipData} handleDelete={handleDelete} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <CustomBlock title="Blocked URL's:" chipData={chipData} handleDelete={handleDelete} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <CustomBlock title="Blocked Phone Numbers:" chipData={chipData} handleDelete={handleDelete} button={button} />
        </Grid>
        <Grid item xs={12} lg={12}>
          <CustomBlock title="Blocked Keywords:" chipData={chipData} handleDelete={handleDelete} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withTheme(CustomFilter);
