import React from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
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
import { register } from "../../redux/reducers/customAuthReducer";
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

function SignUp() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const classes = useStyles();

  const [step, setStep] = React.useState(1);
  const [buttonEnabled, setButtonEnabled] = React.useState(false);

  const butonLabel = [];
  butonLabel[1] = "Next Step";
  butonLabel[2] = "Almost Done";
  butonLabel[3] = "Sign Up";

  // const setTwoSchema
  const validationSchema = Yup.object().shape({
    name: Yup.string().max(30).required("Name is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    company: Yup.string().max(30).required("Company Name is required"),
    wbsiteUrl: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website"),
    phoneNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("Please your phone number"),
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

  const stepOneValidation = Yup.object().shape({
    name: Yup.string().max(30).required("Name is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
  });

  const stepTowValidation = Yup.object().shape({
    company: Yup.string().max(30).required("Company Name is required"),
    wbsiteUrl: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter website"),
    phoneNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Enter correct phone!"
      )
      .required("Phone number is not valid"),
  });

  const stepThreeValidation = Yup.object().shape({
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

  function isValidField(currentStepValidation, data) {
    currentStepValidation
      .validate(data)
      .then(function (valid) {
        return setButtonEnabled(true);
      })
      .catch(function (error) {
        return setButtonEnabled(false);
      });
  }

  const validate = async ({
    name,
    email,
    company,
    wbsiteUrl,
    phoneNumber,
    password,
    confirmPassword,
  }) => {
    //step One
    if (step === 1) await isValidField(stepOneValidation, { name, email });

    //Step2
    if (step === 2) {
      await isValidField(stepTowValidation, {
        company,
        wbsiteUrl,
        phoneNumber,
      });
    }

    //Step 3
    if (step === 3) {
      await isValidField(stepThreeValidation, { password, confirmPassword });
    }

    return {};
  };

  const handleButtonClick = () => {
    console.log(step);
    let newStep = step + 1;
    if (step < 3) {
      setButtonEnabled(false);
      return setStep(newStep);
    }
  };

  const onSubmitForm = async (
    values,
    { setErrors, setStatus, setSubmitting }
  ) => {
    console.log(values);

    dispatch(
      register({
        user: {
          name: values.name,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        company: {
          company: values.company,
          wbsiteUrl: values.wbsiteUrl,
          phoneNumber: values.phoneNumber,
        },
      })
    );

    //  history.push("/auth/sign-in");
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
          validate={validate}
          initialValues={{
            name: "",
            company: "",
            email: "",
            wbsiteUrl: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            submit: false,
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmitForm}
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
                {step === 1 ? (
                  <>
                    <TextField
                      type="text"
                      name="name"
                      label="Name:"
                      variant="outlined"
                      placeholder="Enter your name"
                      value={values.name}
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={Boolean(touched.name && errors.name)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      my={3}
                      InputLabelProps={{
                        root: classes.labelRoot,
                        shrink: true,
                      }}
                      InputProps={{ classes: { input: classes.input } }}
                      //inputRef={validateDate("name", values.name)}
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
                  </>
                ) : (
                  ""
                )}

                {step === 2 ? (
                  <>
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
                      type="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number:"
                      placeholder="Enter your phone number"
                      variant="outlined"
                      value={values.phoneNumber}
                      error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                      fullWidth
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      my={3}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{ classes: { input: classes.input } }}
                    />
                  </>
                ) : (
                  ""
                )}

                {step === 3 ? (
                  <>
                    <TextField
                      type="password"
                      name="password"
                      label="Password"
                      placeholder="Enter your password"
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
                ) : (
                  ""
                )}
              </ThemeProvider>
              <Button
                style={{
                  borderRadius: "10px",
                  height: "3.6rem",
                  backgroundColor: buttonEnabled ? "#23CC94" : "#cccccc",
                  color: "white",
                }}
                classes={{ label: classes.labelButton }}
                type="submit"
                fullWidth
                variant="contained"
                disabled={!isSubmitting && !buttonEnabled}
                // expand={expanded}
                onClick={handleButtonClick}
                // aria-expanded={expanded}
              >
                {butonLabel[step]}
                <ArrowRightAlt style={{ marginLeft: "6px" }} />
              </Button>

              <div className={classes.fotter}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.bySignin}
                >
                  By signing up you agree to Intelligencedashboard.com
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
      <Box display="block" style={{ textAlign: "center", marginTop: "2rem" }}>
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
      </Box>
    </Box>
  );
}

export default SignUp;
