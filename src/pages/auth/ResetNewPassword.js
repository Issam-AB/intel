import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { createNewPassword } from "../../redux/reducers/customAuthReducer";
import { ArrowRightAlt } from "@material-ui/icons";
import {
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
  Box,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import PasswordStrengthBar from "react-password-strength-bar";

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

  btnLink: {
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "900",
    color: "#23CC94",
  },
});

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);
// const Divider = styled(MuiDivider)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  margin-top: -13rem;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

const ResetNewPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const prams = useParams();
  const { messageSucceeded, error, isLoading } = useSelector(
    (state) => state.authReducer
  );

  React.useEffect(() => {
    if (messageSucceeded) history.push("/auth/sign-in");
  }, [messageSucceeded]);

  // const setTwoSchema
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
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

  //   const onSubmitForm = (values, { setErrors, setStatus, setSubmitting }) => {
  //     const { password } = values;
  //     console.log(password);

  //     // let action = createNewPassword({ password }, prams);
  //     // console.log(action);
  //     dispatch(createNewPassword({ password }, prams));
  //   };

  const onSubmitForm = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
    const { password } = values;
    console.log(password);

    let action = createNewPassword({ password }, prams);
    // console.log(action);
    dispatch(action);
  };
  return (
    <Box>
      <Wrapper>
        <Helmet title="Sign Up" />
        <Typography
          component="h1"
          variant="h4"
          align="center"
          gutterBottom
          className={classes.h1Sign}
        >
          Reset New Password
        </Typography>
        <Typography
          component="h2"
          variant="body1"
          align="center"
          className={classes.h2Sign}
        >
          Choose a strong password and don't reuse it for other accounts.
        </Typography>
        <Formik
          initialValues={{
            password: "11111111111",
            confirmPassword: "11111111111",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmitForm}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <form
              style={{ marginTop: "19px" }}
              noValidate
              onSubmit={handleSubmit}
            >
              {error && (
                <Alert mt={2} mb={1} severity="warning">
                  {error}
                </Alert>
              )}
              <ThemeProvider theme={theme}>
                <>
                  <TextField
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter new password"
                    variant="outlined"
                    value={values.password}
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    my={3}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{ classes: { input: classes.input } }}
                  />
                  {/* <PasswordStrengthBar
                        password={values.password}
                        style={{
                          width: "21rem",
                          height: "21px",
                          marginLeft: "3px",
                        }}
                      /> */}

                  <TextField
                    type="password"
                    name="confirmPassword"
                    label="Re-enter Password"
                    placeholder="Confirme your password"
                    variant="outlined"
                    value={values.confirmPassword}
                    error={Boolean(
                      touched.confirmPassword && errors.confirmPassword
                    )}
                    fullWidth
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                    my={3}
                    InputLabelProps={{
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
                  backgroundColor: "#23CC94",
                  color: "white",
                }}
                classes={{ label: classes.labelButton }}
                type="submit"
                fullWidth
                variant="contained"
                // disabled={!isSubmitting && !buttonEnabled}
                // expand={expanded}

                // aria-expanded={expanded}
              >
                New Password
                <ArrowRightAlt style={{ marginLeft: "6px" }} />
              </Button>
            </form>
          )}
        </Formik>
      </Wrapper>
      {/* <Box display="block" style={{ textAlign: "center", marginTop: "2rem" }}>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ color: "white", fontSize: "13px" }}
        >
          Already have an account?
        </Typography>
        <Link to="/auth/sign-in" className={classes.btnLink}>
          Sign in
        </Link>
      </Box> */}
    </Box>
  );
};

export default ResetNewPassword;
