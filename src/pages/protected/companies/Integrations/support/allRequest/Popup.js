import React from "react";
import styled from "styled-components/macro";
import { Close as CloseIcon } from "@material-ui/icons";
import { Link } from "react-feather";
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
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  LinearProgress,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
const Spacer = styled.div(spacing);
const Divider = styled(MuiDivider)(spacing);

const useStyles = makeStyles((theme) => ({
  bar: {
    borderRadius: 5,
    backgroundColor: "#445AC9",
    width: "3rem",
  },
  rootBar: {
    width: "20rem",
    height: "9px",
  },
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
  input: {
    padding: "11.5px 14px",
    backgroundColor: "#F9F9FC",
  },
  h5: {
    fontSize: "13px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  papers: {
    backgroundColor: "#ececec",
    padding: "6px",
    // marginTop: "-39px",
    cursor: "pointer",
  },
  //   label: {
  //     margin: "-7px 16px",
  //   },
  shrink: {
    display: "none",
  },
  texterea: {
    backgroundColor: "#F9F9FC",
  },
}));

const Popup = ({ open, setOpen, handleClose }) => {
  const classes = useStyles();

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

      <DialogContent style={{ marginTop: "-18px", overflow: "hidden" }}>
        <form>
          <Grid Container item md={12} xs={12}>
            <Typography variant="h5" classes={{ h5: classes.h5 }}>
              Subject:
            </Typography>
            <TextField
              name="subject"
              InputLabelProps={{ shrink: false }}
              placeholder="Type your subject"
              InputProps={{ classes: { input: classes.input } }}
              fullWidth
              variant="outlined"
              my={2}
            />
          </Grid>
          <Spacer mb={8} />
          <Grid container spacing={6}>
            <Grid item md={6} xs={6}>
              <Typography variant="h5" classes={{ h5: classes.h5 }}>
                Department:
              </Typography>
              <FormControl fullWidth>
                <InputLabel
                  // shrink={false}
                  classes={{ shrink: classes.shrink }}
                  style={{ margin: "-7px 10px", zIndex: 1 }}
                  id="demo-simple-select-label"
                >
                  Department
                </InputLabel>
                <Select
                  classes={{ root: classes.input }}
                  InputLabelProps={{ shrink: false }}
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Technical Support</MenuItem>
                  <MenuItem value={20}>Seles Support</MenuItem>
                  <MenuItem value={30}>Billing Department</MenuItem>
                  <MenuItem value={30}>Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={6}>
              <Typography variant="h5" classes={{ h5: classes.h5 }}>
                Priority:
              </Typography>
              <FormControl fullWidth>
                <InputLabel
                  // shrink={false}
                  style={{ margin: "-7px 10px", zIndex: 1 }}
                  id="demo-simple-select-label"
                  classes={{ shrink: classes.shrink }}
                >
                  Priority
                </InputLabel>
                <Select
                  classes={{ root: classes.input }}
                  InputLabelProps={{ shrink: false }}
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>High</MenuItem>
                  <MenuItem value={20}>Medium</MenuItem>
                  <MenuItem value={30}>Law</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Divider my={8} />
          <Grid container direction="row" spacing={5}>
            <Grid item>
              <Avatar style={{ backgroundColor: "#1E88E5" }}>C</Avatar>
            </Grid>
            <Grid item md={11} xs={12}>
              <TextField
                classes={{ multiline: classes.texterea }}
                InputLabelProps={{ shrink: false }}
                InputProps={{
                  classes: {
                    input: classes.input,
                    multiline: classes.texterea,
                  },
                }}
                id="outlined-multiline-static"
                // label="Multiline"
                multiline
                rows={4}
                defaultValue="Type here to Reply to Ticket"
                fullWidth
                variant="outlined"
              />
              <Paper className={classes.papers}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="subtitle1">
                    AtachmentFile Name (456 K)
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={50}
                    classes={{
                      bar: classes.bar,
                      root: classes.rootBar,
                    }}
                  />
                  <CloseIcon />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </DialogContent>

      <DialogActions style={{ paddingBottom: "35px" }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          spacing={4}
        >
          <Box display="flex" ml={3} mt={8}>
            <Button
              variant="contained"
              size="small"
              style={{
                width: "5rem",
                color: "white",
                backgroundColor: "#6A74C9",
                marginLeft: "10px",
              }}
            >
              Send
            </Button>
            <Button style={{ marginLeft: "10px" }}>
              <Link style={{ color: "#6A74C9" }} />
            </Button>
          </Box>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
