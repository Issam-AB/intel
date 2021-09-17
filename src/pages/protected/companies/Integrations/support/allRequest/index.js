import React from "react";

import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
    Grid,
    Divider as MuiDivider,
    Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import AdvancedTable from "./AdvancedTable";
import Actions from "./Actions";

const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);
const Typography = styled(MuiTypography)(spacing);

const CallLog = () => {
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
                        Support
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{ marginTop: "-8px", fontWeight: "600", fontSize: "16px" }}
                    >
                        Create and view your support requests
                    </Typography>
                </Grid>

                <Grid item>
                    <Actions />
                </Grid>
            </Grid>

            <Divider my={3} />
            <Spacer mb={6} />
            <Grid container spacing={6}>
                <Grid item xs={12} lg={12}>
                    <AdvancedTable />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default withTheme(CallLog);
