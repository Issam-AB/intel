import React from 'react'
import { Paper, Typography, Divider as MuiDivider, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Box } from 'react-feather';

import { Backup } from "@material-ui/icons";



const useStyles = makeStyles((theme) => ({
    paper: {
        width: "63rem",
        height: "30rem",
        marginLeft: "42px"
    },
    title: {
        fontSize: "14px", fontWeight: "700", padding: "11px 33px"
    },
    purple: {
        color: "white",
        backgroundColor: "#1E88E5",
        width: "120px",
        height: "120px",
        margin: "47px",
        fontSize: "61px", fontWeight: "600"
    },
    flex: {
        display: "flex",
    }
}));
const Divider = styled(MuiDivider)(spacing);
const EditProfile = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.title}>Edit My Profile</Typography>
                <Divider />
                <div className={classes.flex}>
                    <Avatar
                        className={classes.purple}
                        alt="Remy Sharp"
                        src="/broken-image.jpg">C</Avatar>


                    <div>
                        <Button variant="primary" startIcon={<Backup />}>Change picture</Button>
                        <Typography variant="subtitle1">Photo help your teammates recognize you in intelegece</Typography>
                    </div>
                </div>

            </Paper>
        </div >
    )
}

export default EditProfile
