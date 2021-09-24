import React from "react";

import {
  Paper,
  Typography,
  Divider as MuiDivider,
  Button,
  Grid,
  TextField as MuiTextField,
  Box,
  CircularProgress,
  Card,
  CardContent,
  Container,
} from "@material-ui/core";

import { Alert as MuiAlert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Phone } from "react-feather";
import { Formik } from "formik";
import * as Yup from "yup";

// const Button = styled(MuiButton)(spacing);
const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const useStyles = makeStyles((theme) => ({
  paper: {
    // width: "63rem",
    height: "51rem",
    marginLeft: "42px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    marginTop: "2rem",
    width: "63rem",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    padding: "22px 33px",
  },
  btnCall: {
    marginRight: "38px",
    color: "#6A74C9",
    borderColor: "#6A74C9",
  },
  startIconsCalls: {
    width: "1rem",
  },
  modePayment: {
    height: "69px",
    marginLeft: "6px",
  },
  itemCenter: {
    textAlign: "center",
  },
  Prime: {
    fontSize: "31px",
    fontWeight: "700",
    lineHeight: "39px",
  },
  dolar: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#6320EE",
  },
  modePaymentt: {
    height: "45px",
    marginTop: "12px",
    marginLeft: "6px",
  },
  paperPrime: {
    padding: "2rem",
  },
  Plan: {
    fontSize: "22px",
    paddingTop: "41px",
    paddingBottom: "15px",
    fontWeight: "600",
    textAlign: "center",
    color: "#FFFFFF",
    borderTopRadius: 8,
  },
  cards: {
    borderRadius: 20,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    border: "2px solid #6320EE",
  },
  h5: {
    fontSize: "13px",
    fontWeight: "700",
  },
  input: {
    padding: "11.5px 14px",
    backgroundColor: "#F9F9FC",
  },
  btnIndivual: {
    color: "white",
    marginRight: "1rem",
    backgroundColor: "#6A74C9",
  },
  btnCopany: {
    color: "#6A74C9",
    borderColor: "#6A74C9",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
  },
  titleBottom: {
    marginTop: "1rem",
    fontsize: "13px",
    fontWeight: "600",
  },
  md: {
    maxWidth: "56rem",
  },
}));

const timeOut = (time) => new Promise((res) => setTimeout(res, time));
const initialValues = {
  company: "Metal Roffing Depot",
  companyID: "aa8befea-31bc-516dxs-dksidk",
  IndividualName: "Micheal Fied",
  adressLine1: "30 N Gould St",
  adressLine2: "Suit 2461",
  city: "Sheridan",
  state: "Florida",
  zip: "82801",
};

const validationSchema = Yup.object().shape({
  company: Yup.string().required("Required"),
  companyID: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
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
const Divider = styled(MuiDivider)(spacing);
const BillingDetails = ({ selectedPlan }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={6}>
      <Grid item md={8}>
        <Paper elevation={3} className={classes.paper}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "-21px",
            }}
          >
            <Typography className={classes.title}>Billing Details</Typography>
            <Button
              variant="outlined"
              startIcon={<Phone />}
              classes={{
                outlined: classes.btnCall,
                startIcon: classes.startIconsCalls,
              }}
            >
              863-399-9200
            </Button>
          </div>
          <Divider
            style={{
              margin: "-1px 37px",
              marginBottom: "3rem",
            }}
          />
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: "800", lineHeight: "3rem" }}
            >
              Update your billing details
            </Typography>
            <Typography style={{ fontWeight: "600", fontsize: "15px" }}>
              Fill out this form to update the billing details on file for your
              subsription:
            </Typography>
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
                  <Container maxWidth="md" classes={{ maxWidthMd: classes.md }}>
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
                              <Typography
                                variant="h5"
                                classes={{ h5: classes.h5 }}
                              >
                                Company Name:
                              </Typography>
                              <TextField
                                name="company"
                                InputLabelProps={{ shrink: false }}
                                placeholder="Company"
                                InputProps={{
                                  classes: { input: classes.input },
                                }}
                                // label="First Name"
                                value={values.company}
                                error={Boolean(
                                  touched.company && errors.company
                                )}
                                fullWidth
                                helperText={touched.company && errors.company}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                variant="outlined"
                                my={2}
                              />
                            </Grid>
                            <Grid item md={6} xs={6}>
                              <Typography
                                variant="h5"
                                classes={{ h5: classes.h5 }}
                              >
                                Intelegence Company ID:
                              </Typography>
                              <TextField
                                InputLabelProps={{ shrink: false }}
                                placeholder="ID"
                                InputProps={{
                                  classes: { input: classes.input },
                                }}
                                name="companyID"
                                // label="Last Name"
                                value={values.companyID}
                                error={Boolean(
                                  touched.companyID && errors.companyID
                                )}
                                fullWidth
                                helperText={
                                  touched.companyID && errors.companyID
                                }
                                onBlur={handleBlur}
                                onChange={handleChange}
                                variant="outlined"
                                my={2}
                              />
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="h5"
                                classes={{ h5: classes.h5 }}
                              >
                                Organization Type:
                              </Typography>
                              <Box display="flex" mt={3}>
                                <Button
                                  variant="contained"
                                  className={classes.btnIndivual}
                                >
                                  Individual
                                </Button>
                                <Button
                                  variant="outlined"
                                  className={classes.btnCopany}
                                >
                                  Company
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                          <Divider my={7} />

                          <Grid container spacing={6}>
                            <Grid item md={12} xs={6}>
                              <Typography
                                variant="h5"
                                classes={{ h5: classes.h5 }}
                              >
                                Individuals Name:
                              </Typography>
                              <TextField
                                InputProps={{
                                  classes: { input: classes.input },
                                }}
                                name="name"
                                placeholder="Your Name"
                                value={values.IndividualName}
                                error={Boolean(
                                  touched.IndividualName &&
                                    errors.IndividualName
                                )}
                                fullWidth
                                helperText={
                                  touched.IndividualName &&
                                  errors.IndividualName
                                }
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
                                classes={{ h5: classes.h5 }}
                              >
                                Address line 1:
                              </Typography>
                              <TextField
                                name="adressLine1"
                                InputLabelProps={{ shrink: false }}
                                placeholder="Adress Line 1"
                                InputProps={{
                                  classes: { input: classes.input },
                                }}
                                // label="First Name"
                                value={values.adressLine1}
                                error={Boolean(
                                  touched.adressLine1 && errors.adressLine1
                                )}
                                fullWidth
                                helperText={
                                  touched.adressLine1 && errors.adressLine1
                                }
                                onBlur={handleBlur}
                                onChange={handleChange}
                                variant="outlined"
                                my={2}
                              />
                            </Grid>
                            <Grid item md={6} xs={6}>
                              <Typography
                                variant="h5"
                                classes={{ h5: classes.h5 }}
                              >
                                Address line 2 (Optional):
                              </Typography>
                              <TextField
                                InputLabelProps={{ shrink: false }}
                                placeholder="Address Line 2"
                                InputProps={{
                                  classes: { input: classes.input },
                                }}
                                name="adressLine2"
                                // label="Last Name"
                                value={values.adressLine2}
                                error={Boolean(
                                  touched.adressLine2 && errors.adressLine2
                                )}
                                fullWidth
                                helperText={
                                  touched.adressLine2 && errors.adressLine2
                                }
                                onBlur={handleBlur}
                                onChange={handleChange}
                                variant="outlined"
                                my={2}
                              />
                            </Grid>
                          </Grid>
                          <Grid container spacing={6}>
                            <Grid item md={4} xs={3}>
                              <Typography
                                variant="h5"
                                classes={{ h5: classes.h5 }}
                              >
                                City:
                              </Typography>
                              <TextField
                                name="city"
                                InputLabelProps={{ shrink: false }}
                                placeholder="City"
                                InputProps={{
                                  classes: { input: classes.input },
                                }}
                                // label="First Name"
                                value={values.city}
                                error={Boolean(touched.city && errors.city)}
                                fullWidth
                                helperText={touched.city && errors.city}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                variant="outlined"
                                my={2}
                              />
                            </Grid>
                            <Grid item md={4} xs={3}>
                              <Typography
                                variant="h5"
                                classes={{ h5: classes.h5 }}
                              >
                                State:
                              </Typography>
                              <TextField
                                InputLabelProps={{ shrink: false }}
                                placeholder="State"
                                InputProps={{
                                  classes: { input: classes.input },
                                }}
                                name="state"
                                // label="Last Name"
                                value={values.state}
                                error={Boolean(touched.state && errors.state)}
                                fullWidth
                                helperText={touched.state && errors.state}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                variant="outlined"
                                my={2}
                              />
                            </Grid>
                            <Grid item md={4} xs={3}>
                              <Typography
                                variant="h5"
                                classes={{ h5: classes.h5 }}
                              >
                                Zip:
                              </Typography>
                              <TextField
                                name="zip"
                                InputLabelProps={{ shrink: false }}
                                placeholder="Zip"
                                InputProps={{
                                  classes: { input: classes.input },
                                }}
                                // label="First Name"
                                value={values.zip}
                                error={Boolean(touched.zip && errors.zip)}
                                fullWidth
                                helperText={touched.zip && errors.zip}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                variant="outlined"
                                my={2}
                              />
                            </Grid>
                          </Grid>
                          <Divider my={7} />

                          <div>
                            <Button
                              classes={{ label: classes.label }}
                              style={{
                                padding: "10px",
                                width: "10rem",
                                backgroundColor: "#23CC94",
                              }}
                              type="submit"
                              variant="contained"
                              color="primary"
                              mt={3}
                            >
                              Save changes
                            </Button>
                            <Typography
                              variant="subtitle2"
                              className={classes.titleBottom}
                            >
                              We will not apply tax to your invoices
                            </Typography>
                          </div>
                        </form>
                      )}
                    </CardContent>
                  </Container>
                </Card>
              )}
            </Formik>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BillingDetails;
