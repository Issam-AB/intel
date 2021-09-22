import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
    Paper,
    Typography,
    Divider as MuiDivider,
    Button,
    Box,
    Button as MuiButton,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    TextField as MuiTextField,

} from "@material-ui/core";

import { Alert as MuiAlert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Lock, Check } from "react-feather"
import PasswordStrengthBar from 'react-password-strength-bar';

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

// const Button = styled(MuiButton)(spacing);

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "63rem",
        height: "30rem",
        marginLeft: "42px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    },
    title: {
        margin: "31px ", fontSize: "15px", fontWeight: "600", marginTop: "30px", marginBottom: "10px", marginLeft: "33px"
    },
    purple: {
        color: "white",
        backgroundColor: "#1E88E5",
        width: "120px",
        height: "120px",
        margin: "47px",
        fontSize: "61px",
        fontWeight: "600",
    },
    flex: {
        display: "flex",
        height: "12rem"
    },
    buttonPrimary: {
        backgroundColor: "#6A74C9",
        color: "white",
        width: "12rem",
    },
    photoHelp: {
        fontSize: "13px",
        fontWeight: "600",
        width: "13rem",
        marginLeft: "18px",
        marginTop: "14px",
        lineHeight: "18px"
    },
    input: {
        padding: "11.5px 14px",
        width: "0px"
    },
    h5: {
        fontSize: "13px", fontWeight: "700",
    },
    h5select: {
        fontSize: "13px", fontWeight: "700",
        marginBottom: "7px"
    },
    ButtonEmail: {
        backgroundColor: "#F9F9FC",
        marginRight: "-14px",
        borderLeft: "1px solid #e3e3e8",
        padding: "8px",
        color: "black",
    },
    IconLock: {
        margin: "7px",
        height: "20px",
        width: "20px"

    },
    labelEmail: {
        fontSize: "12px",
        fontWeight: "700",
    },
    icon: {
        width: "19px",
        color: "#50b432",
    },
    subtitle: {
        fontSize: "13px",
        fontWeight: "700",
        marginLeft: "8px"
    }
}));
const Divider = styled(MuiDivider)(spacing);
const PsswordChnage = ({ score }) => {
    const classes = useStyles();



    const timeOut = (time) => new Promise((res) => setTimeout(res, time));

    const initialValues = {
        firstName: "Lucy",
        lastName: "Lavender",
        email: "lucylavender@gmail.com",
        password: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string()
            .min(12, "Must be at least 12 characters")
            .max(255)
            .required("Required"),
        confirmPassword: Yup.string().when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
            ),
        }),
    });


    const handleSubmit = async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
    ) => {
        try {
            await timeOut(1500);
            resetForm();
            setStatus({ sent: true });
            setSubmitting(false);
        } catch (error) {
            setStatus({ sent: false });
            setErrors({ submit: error.message });
            setSubmitting(false);
        }
    };
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.title}>Edit My Profile</Typography>
                <Divider />
                <div style={{ display: 'flex' }}>

                    <div style={{ marginLeft: "40px", width: "25rem" }}>
                        <Typography variant="subtitle1" className={classes.title}> Password must contain:</Typography>
                        <div style={{ marginLeft: "39px" }}>
                            <span style={{ display: "flex" }}>
                                <Check className={classes.icon} />
                                <Typography variant="subtitle1" className={classes.subtitle}> At Least 8 characters</Typography>
                            </span>
                            <span style={{ display: "flex" }}>
                                <Check className={classes.icon} />
                                <Typography variant="subtitle1" className={classes.subtitle}> At least 1 upper case letter (A-Z)</Typography>
                            </span>
                            <span style={{ display: "flex" }}>
                                <Check className={classes.icon} />
                                <Typography variant="subtitle1" className={classes.subtitle}> At least 1 lower case letter (a-z)</Typography>
                            </span>
                            <span style={{ display: "flex" }}>
                                <Check className={classes.icon} />
                                <Typography variant="subtitle1" className={classes.subtitle}> At least 1 number (0-1)</Typography>
                            </span>
                            <span style={{ display: "flex" }}>
                                <Check className={classes.icon} />
                                <Typography variant="subtitle1" className={classes.subtitle} style={{ width: "180px" }}> At least 1 special characters (~!@#$%^&*()=+)</Typography>
                            </span>
                        </div>
                    </div>


                    <div style={{ marginLeft: "80px" }}>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({
                                errors,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                                touched,
                                values,
                                status,
                            }) => (
                                <Card mb={6}>
                                    <CardContent>

                                        {status && status.sent && (
                                            <Alert severity="success" my={3}>
                                                [DEMO] Your data has been submitted successfully!
                                            </Alert>
                                        )}

                                        {isSubmitting ? (
                                            <Box display="flex" justifyContent="center" my={6}>
                                                <CircularProgress />
                                            </Box>
                                        ) : (
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={6}>
                                                    <Grid item md={12} xs={6}>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <Typography variant="h5" style={{ width: "15rem" }} classes={{ h5: classes.h5 }}>Current Password:</Typography>
                                                            <TextField
                                                                name="password"
                                                                InputLabelProps={{ shrink: false }}
                                                                placeholder="Password"
                                                                // InputProps={{ classes: { input: classes.input } }}
                                                                value={values.password}
                                                                error={Boolean(touched.password && errors.password)}
                                                                fullWidth
                                                                helperText={touched.password && errors.password}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                type="password"
                                                                variant="outlined"
                                                                my={2}
                                                            />
                                                        </div>
                                                    </Grid>
                                                    <Grid item md={12} xs={6}>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <Typography variant="h5" style={{ width: "15rem" }} classes={{ h5: classes.h5 }}>New Password: </Typography>
                                                            <TextField
                                                                name="password"
                                                                InputLabelProps={{ shrink: false }}
                                                                // InputProps={{ classes: { input: classes.input } }}
                                                                value={values.password}
                                                                error={Boolean(touched.password && errors.password)}
                                                                fullWidth
                                                                helperText={touched.password && errors.password}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                type="password"
                                                                variant="outlined"
                                                                my={2}
                                                            />


                                                        </div>
                                                        <PasswordStrengthBar password={values.password} style={{ width: '27rem', height: '5px', marginLeft: "11rem" }} />
                                                    </Grid>
                                                    <Grid item md={12} xs={6}>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <Typography variant="h5" style={{ width: "15rem" }} classes={{ h5: classes.h5 }}>Confirm New Password:</Typography>
                                                            <TextField
                                                                name="confirmPassword"
                                                                InputLabelProps={{ shrink: false }}

                                                                // label="Confirm password"
                                                                value={values.confirmPassword}
                                                                error={Boolean(
                                                                    touched.confirmPassword && errors.confirmPassword
                                                                )}
                                                                fullWidth
                                                                helperText={touched.confirmPassword && errors.confirmPassword}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                type="password"
                                                                variant="outlined"
                                                                my={2}
                                                            // InputProps={{ classes: { input: classes.input } }}
                                                            />
                                                        </div>
                                                    </Grid>

                                                </Grid>

                                                <div style={{ float: "right", margin: "40px 0" }}>
                                                    <Button
                                                        style={{ marginRight: "15px" }}
                                                        // type="outlined"
                                                        variant="outlined"
                                                        color="primary"
                                                        mt={3}
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        style={{ width: "10rem", backgroundColor: "#6A74C9" }}
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        mt={3}
                                                    >
                                                        Save changes
                                                    </Button>

                                                </div>
                                            </form>
                                        )}
                                    </CardContent>
                                </Card>
                            )}
                        </Formik>

                    </div>
                </div>

            </Paper>
        </div>
    );
};

export default PsswordChnage;
