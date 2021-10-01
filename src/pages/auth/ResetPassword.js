import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  resetPassword,
  resetErrorAndSuccess,
} from "../../redux/reducers/customAuthReducer";

import {
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        fontWeight: "700",
        color: "black",
        fontSize: "15px",
        // "&$focused": {
        //   // increase the specificity for the pseudo class
        //   color: "blue",
        // },
      },
    },
    MuiInput: {
      input: {
        "& .Mui-focused": {
          color: "tomato",
          fontWeight: "bold",
          borderColor: "#868695",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  labelRoot: {
    color: "black",
    fontWeight: "800",
  },
  input: {
    padding: "12.5px 14px",
    fontSize: "13px",
    color: "black",
  },
  labelButton: {
    fontSize: "14px",
    fontWeight: "700",
  },
});
const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  margin-top: -13rem;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
  padding: ${(props) => props.theme.spacing(6)}px;
  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

function ResetPassword() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const { messageSucceeded, error, isLoading } = useSelector(
    (state) => state.authReducer
  );

  React.useEffect(() => {
    if (messageSucceeded || error) dispatch(resetErrorAndSuccess());
  }, []);

  const handleSubmit = (values, { setErrors, setStatus, setSubmitting }) => {
    dispatch(
      resetPassword({
        email: values.email,
      })
    );
  };

  return (
    <Wrapper>
      <Helmet title="Reset Password" />

      <Typography
        component="h1"
        variant="h4"
        align="center"
        gutterBottom
        style={{ fontWeight: "700" }}
      >
        Reset Password
      </Typography>
      <Typography
        component="h2"
        variant="body1"
        align="center"
        style={{ fontSize: "12px" }}
      >
        Enter your email to reset your password
      </Typography>

      <Formik
        initialValues={{
          email: "",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
        })}
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
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {messageSucceeded && (
              <Alert mt={2} mb={1} severity="success">
                {messageSucceeded.message}
              </Alert>
            )}

            {error && (
              <Alert mt={2} mb={1} severity="warning">
                {error}
              </Alert>
            )}
            <ThemeProvider theme={theme}>
              <TextField
                type="email"
                name="email"
                label="Email Address"
                variant="outlined"
                value={values.email}
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
                onChange={handleChange}
                my={4}
                InputLabelProps={{
                  root: classes.labelRoot,
                  shrink: true,
                }}
                InputProps={{ classes: { input: classes.input } }}
              />
            </ThemeProvider>
            <Button
              style={{ backgroundColor: isLoading ? "#cccccc" : "#23CC94" }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isLoading}
              classes={{ label: classes.labelButton }}
            >
              Reset password
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default ResetPassword;
