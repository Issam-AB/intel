/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import styled from "styled-components/macro";

import {
  Box,
  Grid,
  Typography,
  Chip as MuiChip,
  Popper,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Popup from "./popup";

const useStyles = makeStyles({
  Box: {
    backgroundColor: "white",
    padding: "2rem",
    marginLeft: "34px",
    marginTop: "34px",
    borderRadius: "15px",
    boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    border: "2px solid #fff",
    "&:hover, &:focus": {
      border: "2px solid #6320EE",
    },
  },
  name: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "700",
    marginTop: "12px",
  },
  content: {
    height: "108px",
    width: "125px",
    textAlign: "center",
  },
  chips: {
    height: "20px",
    borderRadius: "0px",
  },
  label: {
    paddingLeft: "1px",
    paddingRight: "1px",
  },
  item: {
    display: "flex",
    flexWrap: "wrap",
  },
  discription: {
    width: "20rem",
  },
  primary: {
    backgroundColor: "#23CC94",
    color: "white",
    width: "5rem",
    margin: "12px 0",
  },
});
const Chip = styled(MuiChip)`
  position: relative;
  top: -129px;
  right: -65px;
  padding: 0 6px;
  font-size: 78%;
  background-color: #f0ebfc;
  color: #6320ee;
  font-weight: 800;
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
`;


const integration = [
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
  {
    id: "1",
    name: "Salesforce",
    icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
    decsription:
      "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations",
    slug: "",
  },
];
const Integration = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div className={classes.item}>
      {integration.map((item, index) => (
        <div>
          <Box
            onClick={handleClickOpen}
            key={index}
            display="grid"
            alignItems="center"
            className={classes.Box}
          >
            <div className={classes.content}>
              <img src={item.icon} alt="box image" width="98px" />
              <Typography variant="h3" className={classes.name}>
                {item.name}
              </Typography>
              <Chip
                label="FREE"
                classes={{ root: classes.chips, label: classes.label }}
              />
            </div>

          </Box>
          {open && (
            <Popup open={open} setOpen={setOpen} handleClose={handleClose} icons={item.icon} name={item.name} discription={item.decsription} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Integration;
