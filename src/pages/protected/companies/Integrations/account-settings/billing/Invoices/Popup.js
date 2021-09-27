import React from "react";
import styled from "styled-components/macro";
import {
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  DialogTitle,
  Divider as MuiDivider,
  Container,
  // Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { spacing } from "@material-ui/system";
const Black = "/static/img/logo/Black.svg";
const Divider = styled(MuiDivider)(spacing);

const useStyles = makeStyles((theme) => ({
  dialogwrapper: {
    maxWidth: "50rem",
    minHeight: "57rem",
    overflow: "hidden",
  },
  subtitle: {
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "14px",
  },
  rootDivider: {
    height: "2px",
  },
  BoxInvoices: {
    padding: "10px",
    backgroundColor: "#F9F9FC",
  },
  h5Service: {
    fontSize: "12px",
    fontWeight: "800",
  },
}));

const Popup = ({ open, setOpen, handleClose }) => {
  const classes = useStyles();
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Dialog
      classes={{ paperWidthSm: classes.dialogwrapper }}
      fullWidth
      //   max-width="lg"
      open={open}
      // TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      style={{ width: "100%", height: "100%" }}
    >
      <Container maxWidthSm>
        <DialogTitle className={classes.dialogTitle}>
          <Grid
            style={{ marginTop: "23px" }}
            container
            direction="row"
            align="center"
            justify="space-between"
          >
            <Grid item md={5} style={{ flexBasis: "0" }}>
              <img src={Black} alt="logo" width="165rem" />
            </Grid>
            <Box
              display="flex"
              style={{ width: "33rem", justifyContent: "end" }}
            >
              <Grid item md={3}>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  Invoices number
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  Payment date
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  className={classes.subtitle}
                >
                  Due date
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  20210524824684
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  May 24, 2021
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  className={classes.subtitle}
                >
                  May 24, 2021
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Divider my={5} classes={{ root: classes.rootDivider }} />
        </DialogTitle>

        <DialogContent>
          <Box className={classes.BoxInvoices}>
            <Typography
              variant="h4"
              style={{ fontSize: "23px", fontWeight: "700" }}
            >
              Invoices
            </Typography>
          </Box>
          <Grid
            container
            direction="row"
            align="center"
            spacing={12}
            style={{ marginTop: "3rem" }}
          >
            <Grid item md={6} style={{ marginLeft: "1rem" }}>
              <Typography
                align="left"
                variant="h4"
                style={{ fontWeight: "700", marginBottom: "1rem" }}
              >
                {" "}
                Roffing Intelegence
              </Typography>
              <Grid item>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  8605 Santa Monica Blvd #92581
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  West Hollywood, CA 900669
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  United State
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  EUVAT ID: EU372009341
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  UK VAT ID: GB373550394
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  INDIA GSTIN: 9921USA290350SH
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={6} style={{ marginLeft: "-4rem" }}>
              <Typography
                align="left"
                variant="h4"
                style={{ fontWeight: "700", marginBottom: "1rem" }}
              >
                Roffing Metal Depot LLC
              </Typography>
              <Grid item>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  30 N Gould St
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  Suit 2461
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  gutterBottom
                  className={classes.subtitle}
                >
                  Sheridan, FL, 828001
                </Typography>
                <Typography
                  align="left"
                  gutterBottom
                  variant="subtitle1"
                  className={classes.subtitle}
                >
                  United State ofAmerica
                </Typography>
              </Grid>

              <Box display="flex" alignItems="center" mt={4}>
                <Grid item>
                  <Typography
                    className={classes.subtitle}
                    style={{ width: "8rem" }}
                    align="left"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Account
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.subtitle}
                  >
                    Roffing Metal Depot LLC
                  </Typography>
                </Grid>
              </Box>
              <Box display="flex" alignItems="center" mt={4}>
                <Grid item>
                  <Typography
                    className={classes.subtitle}
                    style={{ width: "8rem" }}
                    align="left"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Account <br />
                    number
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.subtitle}
                  >
                    cus_IMQpQ1H8uMxRc0
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box
            className={classes.BoxInvoices}
            style={{ marginTop: "2rem" }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h4"
              style={{ fontSize: "23px", fontWeight: "700" }}
            >
              Services
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              style={{ width: "28rem" }}
            >
              <Typography variant="h5" className={classes.h5Service}>
                START DATE
              </Typography>
              <Typography variant="h5" className={classes.h5Service}>
                END DATE
              </Typography>
              <Typography variant="h5" className={classes.h5Service}>
                AMOUNT
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={6}
          >
            <Typography
              variant="subtitle1"
              style={{ marginLeft: "2rem" }}
              className={classes.subtitle}
            >
              1 x Business 1 (at $7,000.00 / month)
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              style={{ width: "28.6rem" }}
            >
              <Typography variant="subtitle1" className={classes.subtitle}>
                May 24, 2021
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Jun 24, 2021
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                7,000 USD
              </Typography>
            </Box>
          </Box>
          <Divider my={6} />
          <Box
            mb={4}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            style={{ width: "21rem", marginLeft: "25.7rem" }}
          >
            <Typography
              align="left"
              variant="subtitle"
              className={classes.subtitle}
            >
              TOTAL
            </Typography>
            <Typography
              align="left"
              variant="subtitle"
              className={classes.subtitle}
            >
              7,000 USD
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            style={{ width: "21.5rem", marginLeft: "25.5rem" }}
          >
            <Typography
              align="left"
              variant="subtitle"
              className={classes.subtitle}
            >
              TAX (0%)
            </Typography>
            <Typography
              align="left"
              variant="subtitle"
              className={classes.subtitle}
            >
              0 USD
            </Typography>
          </Box>
          <Divider my={5} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            style={{ width: "21.5rem", marginLeft: "25.5rem" }}
          >
            <Typography
              align="left"
              variant="subtitle"
              className={classes.subtitle}
            >
              TOTAL
            </Typography>
            <Typography
              align="left"
              variant="subtitle"
              style={{ fontSize: "13px", fontWeight: "800" }}
              className={classes.subtitle}
            >
              7,000 USD
            </Typography>
          </Box>
          <div style={{ marginTop: "9rem" }}>
            <Typography variant="subtitle" className={classes.subtitle}>
              The supplies are zero rated on the basic of the provision of
              digital services
            </Typography>
          </div>
          <Divider mt={2} />
        </DialogContent>

        {/* <DialogActions style={{ paddingBottom: "35px" }}></DialogActions> */}
      </Container>
    </Dialog>
  );
};

export default Popup;
