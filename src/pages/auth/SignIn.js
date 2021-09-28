import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";
import { Formik } from "formik";
import { signIn } from "../../redux/actions/authActions";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";

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

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  return (
    <Wrapper>
      <Helmet title="Sign In" />
      <Typography
        component="h1"
        variant="h4"
        align="center"
        gutterBottom
        className={classes.h1Sign}
      >
        Login to my <br /> Inteligence Dashboard
      </Typography>

      <Formik
        initialValues={{
          email: "demo@bootlab.io",
          password: "unsafepassword",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await dispatch(
              signIn({ email: values.email, password: values.password })
            );
            history.push("/private");
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
          <form noValidate onSubmit={handleSubmit}>
            <Alert mt={3} mb={1} severity="info">
              Use <strong>demo@bootlab.io</strong> and{" "}
              <strong>unsafepassword</strong> to sign in
            </Alert>
            {errors.submit && (
              <Alert mt={2} mb={1} severity="warning">
                {errors.submit}
              </Alert>
            )}
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
              my={2}
              InputLabelProps={{
                root: classes.labelRoot,
                shrink: true,
              }}
              InputProps={{ classes: { input: classes.input } }}
            />

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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              style={{
                borderRadius: "10px",
                height: "3.6rem",
                backgroundColor: "#23CC94",
                color: "white",
              }}
              classes={{ label: classes.labelButton }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
            <Button
              style={{ color: "#6320EE" }}
              component={Link}
              to="/auth/reset-password"
              fullWidth
              color="primary"
            >
              Forgot password
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
                <span style={{ color: "#6320EE", cursor: "pointer" }}>
                  {" "}
                  Term of service
                </span>{" "}
                and{" "}
                <span style={{ color: "#6320EE", cursor: "pointer" }}>
                  Privacy policy
                </span>
              </Typography>
            </div>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default SignIn;
