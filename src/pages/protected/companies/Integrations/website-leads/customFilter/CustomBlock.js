import React from "react";
import styled from "styled-components/macro";
import {
  CardContent,
  Typography,
  Card,
  Chip as MuiChip,
  Button,
  Paper,
  CardActions,
} from "@material-ui/core";
import { Block as BlockIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import ChipInput from "material-ui-chip-input";
const Spacer = styled.div(spacing);

const Chip = styled(MuiChip)`
  border-radius: 25px;
  margin: 5px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex",
    justifyContent: "space-between",
  },
  card: {
    borderRadius: "12px",
    boxShadow: "0px 0px 12px -5px #000000",
  },
  title: {
    marginLeft: "5px",
    fontSize: "14px",
    fontWeight: "700",
  },
  inputBase: {
    border: "1px solid #DBDBDB",
    borderRadius: "5px",
    backgroundColor: "#F9F9FC",
    width: "92%",
    height: "150%",
    padding: "15px",
    "&:hover, &:focus": {
      border: "1px solid #6320EE",
      opacity: 4,
    },
  },
  // hover: {
  //     border: "1px solid #6A74C9"
  // },
  button: {
    height: "37px",
    color: "white",
    backgroundColor: "#c44545",
  },
  btnload: {
    color: "#6A74C9",
    border: "1px solid #6A74C9",
    marginLeft: "15px",
  },
  chipInput: {
    minHeight: "30px",
    fontWeight: "600",
  },
  rootchips: {
    minWidth: "0px",
  },
  chip: {
    margin: "2px 9px 3px 1px",
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    width: "100%",
    height: "7rem",
    padding: theme.spacing(0.5),
    margin: 0,
    border: "1px solid #DBDBDB",
    "&:hover": {
      border: "1px solid #6320EE",
    },
  },
}));
const CustomBlock = ({ title, chipData, handleDelete, button }) => {
  const classes = useStyles();
  const chipRenderer = (
    { chip, className, handleClick, handleDelete },
    key
  ) => (
    <Chip
      className={className}
      key={key}
      label={chip}
      onClick={handleClick}
      onDelete={handleDelete}
      size="small"
    />
  );
  const defaultValue = [
    "Notification@email.com",
    "Person2@email.com",
    "Person3@email.com",
  ];
  return (
    <React.Fragment>
      <Card classes={{ root: classes.card }}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            {/* <InputBase
              multiline
              variant="outlined"
              rows={2}
              rowsMax={10}
              fullWidth
              // classes={{ hover: classes.hover }}
              className={classes.inputBase}
            /> */}
            <Paper component="ul" className={classes.paper}>
              <ChipInput
                disableUnderline={true}
                classes={{
                  chipContainer: classes.chipInput,
                  inputRoot: classes.rootchips,
                  chip: classes.chip,
                }}
                chipRenderer={chipRenderer}
                defaultValue={defaultValue}
              />
            </Paper>
            <Button
              startIcon={<BlockIcon />}
              variant="contained"
              className={classes.button}
            >
              {" "}
              Block Emails
            </Button>
          </form>
          <Spacer mb={6} />
          <div>
            {chipData.map((data) => {
              // let icon = null;

              // if (data.label === "jack@spam.com") {
              //     icon = <TagFacesIcon />;

              // }
              return (
                <Chip
                  key={data.key}
                  // icon={icon}
                  label={data.label}
                  onDelete={handleDelete(data)}
                  m={1}
                />
              );
            })}
          </div>
        </CardContent>

        <CardActions>
          {button && (
            <Button variant="outlined" classes={{ outlined: classes.btnload }}>
              Load More
            </Button>
          )}
        </CardActions>
        <Spacer mb={6} />
      </Card>
    </React.Fragment>
  );
};
export default CustomBlock;
