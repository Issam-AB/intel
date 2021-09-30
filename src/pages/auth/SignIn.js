import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";
import { Formik } from "formik";
import { login } from "../../redux/reducers/customAuthReducer";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
  Box,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";

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
  h1Sign: {
    fontSize: "24px",
    fontWeight: "800",
    marginBottom: "2rem",
  },
  h2Sign: {
    fontSize: "14px",
    fontWeight: "600",
  },
  input: {
    padding: "12.5px 14px",
    fontSize: "13px",
    color: "black",
  },
  labelRoot: {
    color: "black",
    fontWeight: "800",
  },
  labelButton: {
    fontSize: "15px",
    fontWeight: "700",
  },
  fotter: {
    textAlign: "center",
    marginTop: "2rem",
  },
  bySignin: {
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "0.75",
    color: "#868695",
  },
  terms: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#868695",
  },
  btnLink: {
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "900",
    color: "#23CC94",
  },
  fogotPass: {
    float: "right",
    textDecoration: "none",
    fontSize: "11px",
    fontWeight: "700",
    color: "#6320EE",
  },
});

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;
  border-radius: 1rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  margin-top: -13rem;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
  padding: ${(props) => props.theme.spacing(6)}px;
  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;
const SignIn = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const classes = useStyles();

  const { user, error, isLoading } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (user) {
      // save the token in Storage
      localStorage.setItem("myToken", JSON.stringify(user.token));

      history.push("/private");
    }
  }, [user]);

  const handleMySubmit = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
    dispatch(login({ email: values.email, password: values.password }));
    // setLoading(true);
    //setLocalError("");

    //console.log(login({ email: values.email, password: values.password }));
    //(login({ email: values.email, password: values.password }));
    // try {
    //   await dispatch(login({ email: values.email, password: values.password }));
    //   history.push("/private");
    // } catch (error) {
    //   const message = error.message || "Something went wrong";
    //   setStatus({ success: false });
    //   setErrors({ submit: message });
    //   setSubmitting(false);
    // }
  };

  return (
    <Box>
      <Wrapper>
        <Helmet title="Sign In" />
        <Typography
          component="h1"
          variant="h4"
          align="center"
          gutterBottom
          className={classes.h1Sign}
        >
          Login to my <br /> Intelligence Dashboard
        </Typography>

        <Formik
          initialValues={{
            email: "issam.aboulfadl05@gmail.com",
            password: "111111111111",
            submit: false,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
          })}
          onSubmit={handleMySubmit}
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
              {/* <Alert mt={3} mb={1} severity="info">
                Use <strong>demo@bootlab.io</strong> and{" "}
                <strong>unsafepassword</strong> to sign in
              </Alert> */}
              {error && (
                <Alert mt={2} mb={1} severity="warning">
                  {error}
                </Alert>
              )}
              <ThemeProvider theme={theme}>
                <TextField
                  type="email"
                  name="email"
                  variant="outlined"
                  label="Email Address"
                  value={values.email}
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  my={5}
                  InputLabelProps={{
                    root: classes.labelRoot,
                    shrink: true,
                  }}
                  InputProps={{ classes: { input: classes.input } }}
                />
                <>
                  <Link to="/auth/reset-password" className={classes.fogotPass}>
                    Forgot your password?
                  </Link>
                  <TextField
                    type="password"
                    name="password"
                    variant="outlined"
                    label="Password"
                    value={values.password}
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    my={2}
                    InputLabelProps={{
                      root: classes.labelRoot,
                      shrink: true,
                    }}
                    InputProps={{ classes: { input: classes.input } }}
                  />
                </>
              </ThemeProvider>

              <Button
                style={{
                  borderRadius: "10px",
                  height: "3.6rem",
                  backgroundColor: isLoading ? "#cccccc" : "#23CC94",
                  color: "white",
                  marginTop: "1rem",
                }}
                classes={{ label: classes.labelButton }}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isLoading}
              >
                Sign in
              </Button>
              {/* <Button
                style={{ color: "#6320EE" }}
                component={Link}
                to="/auth/reset-password"
                fullWidth
                color="primary"
              >
                Forgot password
              </Button> */}
            </form>
          )}
        </Formik>
      </Wrapper>
      <Box display="block" style={{ textAlign: "center", marginTop: "2rem" }}>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ color: "white", fontSize: "13px" }}
        >
          Need Intelligence Dashboard account ?
        </Typography>
        <Link to="/auth/sign-up" className={classes.btnLink}>
          Sign up Now
        </Link>
      </Box>
    </Box>
  );
};

export default SignIn;
