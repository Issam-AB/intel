import React from "react";

import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
    Grid,
    Divider as MuiDivider,
    Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);
const Typography = styled(MuiTypography)(spacing);

const CallLog = () => {
    const [totalCall, setTotalCall] = React.useState(true)
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

                {/* <Grid item>
                    <Actions />
                </Grid> */}
            </Grid>

            <Divider my={3} />

        </React.Fragment >
    );
};

export default withTheme(CallLog);
