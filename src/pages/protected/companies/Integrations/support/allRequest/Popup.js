import React from "react";
import styled from "styled-components/macro";
import {
  Forward as ForwardIcon,
  Block as BlockIcon,
  Close as CloseIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  DialogTitle,
  Divider as MuiDivider,
  // Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

const Divider = styled(MuiDivider)(spacing);

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#6320EE",
    marginRight: "10px",
    marginLeft: "5px",
  },
  paper: {
    borderRadius: "12px",
    boxShadow: "0px 0px 12px -5px #000000",
  },
  dialogwrapper: {
    padding: theme.spacing(4),
    position: "absolute",
    maxWidth: "50rem",
    // top: theme.spacing(5)
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  startICon: {
    margin: 0,
  },
}));

const Popup = ({ open, setOpen, handleClose }) => {
  // const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const classes = useStyles();
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handlBlock = (e) => {
    console.log("this is working fine");
    e.preventDefault();
    // e.target.style.color = "black";
    // e.target.button.style.backgroundColor = "purple";
    setVisible(!visible);
    console.log("target", e);
  };
  return (
    <Dialog
      classes={{ paper: classes.dialogwrapper }}
      fullWidth
      max-width="lg"
      open={open}
      // TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      style={{ width: "100%", height: "100%" }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography
            variant="h4"
            component="div"
            style={{ flexGrow: 1, fontWeight: 700, fontSize: "20px" }}
          >
            Open New Ticket
          </Typography>
          <Button
            style={{ color: "#868695" }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </Button>
        </div>
        <Divider my={4} style={{ marginRight: "20px" }} />
      </DialogTitle>

      <DialogContent style={{ marginTop: "-18px" }}>
        <Grid container direction="row" alignItems="center"></Grid>

        <Grid container>
          <Grid item>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: "800",
                fontSize: "12px",
                paddingBottom: "5px",
                lineHeight: "30px",
              }}
            >
              Message:
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </Typography>
          </Grid>
        </Grid>
        <Divider my={4} style={{ marginRight: "20px" }} />
        <Grid container direction="row" alignItems="center" spacing={10}>
          <Grid item>
            <Typography
              variant="subtitle1"
              style={{ fontSize: "12px", fontWeight: "800" }}
            >
              Source URL:
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              style={{
                color: "#868695",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              https://metalroofing.com/free-estimate/
            </Typography>
          </Grid>
        </Grid>
        <Divider my={5} style={{ marginRight: "20px" }} />
      </DialogContent>

      <DialogActions style={{ paddingBottom: "35px" }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          spacing={4}
        >
          <Box display="flex" ml={3}>
            <Button
              variant="contained"
              size="small"
              style={{
                color: "white",
                backgroundColor: "#6A74C9",
                marginLeft: "10px",
              }}
              startIcon={<ForwardIcon />}
            >
              Forward
            </Button>

            <Button
              variant="outlined"
              size="small"
              style={{
                color: "#6A74C9",
                borderColor: "#6A74C9",
                marginLeft: "10px",
              }}
            >
              Mark as test
            </Button>

            <Button
              variant="contained"
              onClick={handlBlock}
              style={
                visible
                  ? {
                      color: "#6A74C9",
                      backgroundColor: "white",
                      border: "1px solid #6A74C9",
                      marginLeft: "10px",
                    }
                  : {
                      color: "white",
                      backgroundColor: "#C44545",
                      marginLeft: "10px",
                    }
              }
              startIcon={visible ? "" : <BlockIcon />}
            >
              {visible ? "Unblock" : "Block"}
            </Button>
          </Box>

          <Box display="flex" alignItems="center" mr={6}>
            <Typography variant="body2">6 of 101</Typography>
            <Button
              variant="outlined"
              size="small"
              classes={{ startIcon: classes.startICon }}
              style={{
                color: "#6A74C9",
                borderColor: "#6A74C9",
                marginLeft: "10px",
                maxWidth: "36px",
                minWidth: "36px",
              }}
              startIcon={<ArrowForwardIcon />}
            ></Button>
            <Button
              variant="outlined"
              size="small"
              classes={{ startIcon: classes.startICon }}
              style={{
                color: "#6A74C9",
                borderColor: "#6A74C9",
                marginLeft: "10px",
                maxWidth: "36px",
                minWidth: "36px",
              }}
              startIcon={<ArrowBackIcon />}
            ></Button>
          </Box>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
