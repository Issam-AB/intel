import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment-timezone";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import {
  Paper,
  Typography,
  Divider as MuiDivider,
  Avatar,
  Button,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField as MuiTextField,
} from "@material-ui/core";
import Popup from "./Popup";
import { Alert as MuiAlert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Lock } from "react-feather";

import { Backup } from "@material-ui/icons";
const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

// const Button = styled(MuiButton)(spacing);

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "63rem",
    height: "30rem",
    marginLeft: "42px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  title: {
    fontSize: "14px",
    fontWeight: "700",
    padding: "11px 33px",
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
    height: "12rem",
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
    lineHeight: "18px",
  },
  input: {
    padding: "11.5px 14px",
  },
  h5: {
    fontSize: "13px",
    fontWeight: "700",
  },
  h5select: {
    fontSize: "13px",
    fontWeight: "700",
    marginBottom: "7px",
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
    width: "20px",
  },
  labelEmail: {
    fontSize: "12px",
    fontWeight: "700",
  },
}));
const Divider = styled(MuiDivider)(spacing);
const EditProfile = () => {
  const classes = useStyles();
  const [tz, setTz] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [datetime, setDatetime] = useState(moment());

  useEffect(() => {
    const tzValue = tz.value ?? tz;
    setDatetime(datetime.tz(tzValue));
  }, [tz, datetime]);

  const timeOut = (time) => new Promise((res) => setTimeout(res, time));

  const initialValues = {
    firstName: "Lucy",
    lastName: "Lavender",
    email: "lucylavender@gmail.com",
    password: "mypassword123",
    confirmPassword: "mypassword123",
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
  };

  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.title}>Edit My Profile</Typography>
        <Divider />
        <div className={classes.flex}>
          <Avatar
            className={classes.purple}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            C
          </Avatar>

          <div style={{ margin: "76px 0px" }}>
            <Button
              // variant="primary"
              className={classes.buttonPrimary}
              startIcon={<Backup />}
            >
              Change picture
            </Button>
            <Typography variant="subtitle1" className={classes.photoHelp}>
              Photo help your teammates recognize you in intelegece
            </Typography>
          </div>
        </div>
        <div>
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
                        <Grid item md={6} xs={6}>
                          <Typography variant="h5" classes={{ h5: classes.h5 }}>
                            Your First Name:
                          </Typography>
                          <TextField
                            name="firstName"
                            InputLabelProps={{ shrink: false }}
                            placeholder="First Name"
                            InputProps={{ classes: { input: classes.input } }}
                            // label="First Name"
                            value={values.firstName}
                            error={Boolean(
                              touched.firstName && errors.firstName
                            )}
                            fullWidth
                            helperText={touched.firstName && errors.firstName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="outlined"
                            my={2}
                          />
                        </Grid>
                        <Grid item md={6} xs={6}>
                          <Typography variant="h5" classes={{ h5: classes.h5 }}>
                            Your Last Name:
                          </Typography>
                          <TextField
                            InputLabelProps={{ shrink: false }}
                            placeholder="Last Name"
                            InputProps={{ classes: { input: classes.input } }}
                            name="lastName"
                            // label="Last Name"
                            value={values.lastName}
                            error={Boolean(touched.lastName && errors.lastName)}
                            fullWidth
                            helperText={touched.lastName && errors.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="outlined"
                            my={2}
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={6}>
                        <Grid item md={6} xs={6}>
                          <Typography
                            variant="h5"
                            classes={{ h5: classes.h5select }}
                          >
                            TimeZone:
                          </Typography>

                          {/* <TextField
                              name="firstName"
                              label="First Name"
                              value={values.firstName}
                              error={Boolean(touched.firstName && errors.firstName)}
                              fullWidth
                              helperText={touched.firstName && errors.firstName}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              variant="outlined"
                              my={2}
                            /> */}
                          <TimezoneSelect
                            value={tz}
                            style={{ width: "29.8rem" }}
                            onChange={setTz}
                            timezones={{
                              ...allTimezones,
                              "America/Lima": "Pittsburgh",
                              "Europe/Berlin": "Frankfurt",
                            }}
                            error={Boolean(
                              touched.firstName && errors.firstName
                            )}
                          />
                        </Grid>
                        <Grid item md={6} xs={6}>
                          <Typography variant="h5" classes={{ h5: classes.h5 }}>
                            Role:
                          </Typography>
                          <TextField
                            InputProps={{ classes: { input: classes.input } }}
                            name="role"
                            placeholder="Role"
                            value={values.lastName}
                            error={Boolean(touched.lastName && errors.lastName)}
                            fullWidth
                            helperText={touched.lastName && errors.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="outlined"
                            my={2}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={6}>
                        <Grid item md={6} xs={6}>
                          <Typography variant="h5" classes={{ h5: classes.h5 }}>
                            Email:
                          </Typography>
                          <TextField
                            InputProps={{
                              classes: { input: classes.input },
                              endAdornment: (
                                <>
                                  <Lock className={classes.IconLock} />
                                  <Button
                                    onClick={handleClickOpen}
                                    classes={{
                                      root: classes.ButtonEmail,
                                      label: classes.labelEmail,
                                    }}
                                  >
                                    Change
                                  </Button>
                                </>
                              ),
                            }}
                            InputLabelProps={{ shrink: false }}
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            error={Boolean(touched.email && errors.email)}
                            fullWidth
                            helperText={touched.email && errors.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="email"
                            variant="outlined"
                            my={2}
                          />
                          {open && (
                            <Popup
                              open={open}
                              setOpen={setOpen}
                              handleClose={handleClose}
                            />
                          )}
                        </Grid>
                        <Grid item md={6} xs={6}>
                          <Typography variant="h5" classes={{ h5: classes.h5 }}>
                            Phone Number:
                          </Typography>
                          <TextField
                            InputProps={{ classes: { input: classes.input } }}
                            InputLabelProps={{ shrink: false }}
                            name="lastName"
                            value={values.lastName}
                            error={Boolean(touched.lastName && errors.lastName)}
                            fullWidth
                            helperText={touched.lastName && errors.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="outlined"
                            my={2}
                          />
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
      </Paper>
    </div>
  );
};

export default EditProfile;
