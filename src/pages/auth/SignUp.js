import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";
import { Formik } from "formik";
import { signUp } from "../../redux/actions/authActions";
import { ArrowRightAlt } from "@material-ui/icons";
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

// const LogoImage = require("/static/img/logo/white.svg");
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
  },
  h2Sign: {
    fontSize: "14px",
    fontWeight: "600",
  },
  input: {
    padding: "12.5px 14px",
    fontSize: "13px",
    color: "#868695",
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
`;
// const Logo = styled(LogoImage)`
//   margin-top: 10px;
// `;

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Wrapper>
        <Helmet title="Sign Up" />

        <Typography
          component="h1"
          variant="h4"
          align="center"
          gutterBottom
          className={classes.h1Sign}
        >
          Sign Up Today
        </Typography>
        <Typography
          component="h2"
          variant="body1"
          align="center"
          className={classes.h2Sign}
        >
          Let's get your (100% free) account set up.
        </Typography>

        <Formik
          initialValues={{
            name: "",
            company: "",
            email: "",
            wbsiteUrl: "",
            // password: "",
            // confirmPassword: "",
            submit: false,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(255).required("Name is required"),
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
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
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              await dispatch(
                signUp({
                  name: "test",
                  company: "test",
                  wbsiteUrl: "www.google.com",
                  email: values.email,
                  password: values.password,
                })
              );
              history.push("/auth/sign-in");
            } catch (error) {
              const message = error.message || "Something went wrong";

              setStatus({ success: false });
              setErrors({ submit: message });
              setSubmitting(false);
            }
          }}
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
            <form
              style={{ marginTop: "19px" }}
              noValidate
              onSubmit={handleSubmit}
            >
              {errors.submit && (
                <Alert mt={2} mb={1} severity="warning">
                  {errors.submit}
                </Alert>
              )}
              <ThemeProvider theme={theme}>
                <TextField
                  type="text"
                  name="name"
                  label="Name:"
                  variant="outlined"
                  placeholder="Enter your name"
                  value={values.name}
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  my={3}
                  InputLabelProps={{
                    root: classes.labelRoot,
                    shrink: true,
                  }}
                  InputProps={{ classes: { input: classes.input } }}
                />

                <TextField
                  type="text"
                  name="company"
                  label="Company Name:"
                  placeholder="Enter your company"
                  variant="outlined"
                  value={values.company}
                  error={Boolean(touched.company && errors.company)}
                  fullWidth
                  helperText={touched.company && errors.company}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  my={3}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{ classes: { input: classes.input } }}
                />
                <TextField
                  type="wbsiteUrl"
                  name="wbsiteUrl"
                  label="Website URL:"
                  placeholder="Enter your Website URL"
                  variant="outlined"
                  value={values.wbsiteUrl}
                  error={Boolean(touched.wbsiteUrl && errors.wbsiteUrl)}
                  fullWidth
                  helperText={touched.wbsiteUrl && errors.wbsiteUrl}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  my={3}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{ classes: { input: classes.input } }}
                />
                <TextField
                  type="email"
                  name="email"
                  label="Email:"
                  placeholder="Enter your email"
                  variant="outlined"
                  value={values.email}
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  my={3}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{ classes: { input: classes.input } }}
                />
              </ThemeProvider>
              {/* <TextField
              type="password"
              name="password"
              label="Password"
              value={values.password}
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={values.confirmPassword}
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              fullWidth
              helperText={touched.confirmPassword && errors.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            /> */}
              <Button
                style={{
                  borderRadius: "10px",
                  height: "3.5rem",
                  backgroundColor: "#23CC94",
                }}
                classes={{ label: classes.labelButton }}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Sign up <ArrowRightAlt style={{ marginLeft: "6px" }} />
              </Button>
              <div className={classes.fotter}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.bySignin}
                >
                  By signing up you agree to Inteligencedashboard.com
                </Typography>
                <Typography variant="subtitle2" className={classes.terms}>
                  <span style={{ color: "#6320EE" }}> Term of service</span> and{" "}
                  <span style={{ color: "#6320EE" }}>Privacy policy</span>
                </Typography>
              </div>
            </form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
}

export default SignUp;
