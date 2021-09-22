import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  CardContent,
  Card as MuiCard,
  Typography,
  Grid,
  Card,
  Chip as MuiChip,
  InputBase,
  Button,
  CardActions,
} from "@material-ui/core";
import {
  Block as BlockIcon,
  TagFaces as TagFacesIcon,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
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
}));
const CustomBlock = ({ title, chipData, handleDelete, button }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card classes={{ root: classes.card }}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <InputBase
              multiline
              variant="outlined"
              rows={2}
              rowsMax={10}
              fullWidth
              // classes={{ hover: classes.hover }}
              className={classes.inputBase}
            />
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
