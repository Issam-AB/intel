/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styled from "styled-components/macro";
import { Close as CloseIcon } from "@material-ui/icons";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Chip as MuiChip,
  // Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Chips = styled(MuiChip)`
  position: relative;
  top: -183px;
  right: -514px;
  padding: 0 6px;
  font-size: 78%;
  background-color: #f0ebfc;
  color: #6320ee;
  font-weight: 800;
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
`;

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#6320EE",
    marginRight: "10px",
    marginLeft: "5px",
  },
  // paper: {
  //     borderRadius: "12px",
  //     boxShadow: "0px 0px 12px -5px #000000",
  // },
  dialogwrapper: {
    position: "absolute",
    maxWidth: "40rem",
    // top: theme.spacing(5)
  },
  dialogTitle: {
    paddingRight: "0px",
    float: "right",
  },
  startICon: {
    margin: 0,
  },
  chips: {
    height: "20px",
    borderRadius: "0px",
  },
  label: {
    paddingLeft: "1px",
    paddingRight: "1px",
  },
  rootButton: {
    minWidth: "39px",
    marginTop: "-2px",
    marginRight: "11px",
  },
  ButtonAprove: {
    backgroundColor: "#23CC94",
    color: "white",
    width: "6rem",
    margin: "12px 39px",
  },
  discription: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "22px",
    marginTop: "10px",
  },
}));

const Popup = ({ open, setOpen, handleClose, icons, name, discription }) => {
  // const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Dialog
      classes={{ paper: classes.dialogwrapper }}
      open={open}
      onClose={handleClose}
      overlayStyle={{ backgroundColor: "transparent" }}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex", float: "right" }}>
          <Button
            style={{ color: "#868695" }}
            classes={{ root: classes.rootButton }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>

      <DialogContent style={{ marginTop: "-18px" }}>
        <Grid container direction="row" alignItems="center">
          <Grid item lg={4}>
            <img
              src={icons}
              alt="box image"
              width="98px"
              style={{ marginLeft: "14px" }}
            />
          </Grid>
          <Grid item lg={8} style={{ marginLeft: "-40px" }}>
            <Typography
              variant="h5"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              {name}
            </Typography>
            <Typography variant="subtitle1" className={classes.discription}>
              {discription}
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "120px" }}>
          <Button classes={{ root: classes.ButtonAprove }}>Approve</Button>
          <Typography
            variant="subtitle1"
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginLeft: "37px",
              color: "#9F9F9F",
            }}
          >
            *Notice of additional fee for CRM Integration
          </Typography>
        </Grid>
        <Chips
          label="FREE"
          classes={{ root: classes.chips, label: classes.label }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
