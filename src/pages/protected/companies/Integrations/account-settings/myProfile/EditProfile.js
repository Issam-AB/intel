import React from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "63rem",
        height: "30rem",
        marginLeft: "42px"
    }
}));

const EditProfile = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={3} className={classes.paper}>
                hahahaha
            </Paper>
        </div>
    )
}

export default EditProfile
