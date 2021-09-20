import React from 'react'
import styled, { withTheme } from "styled-components/macro";


import {
    Box,
    Grid,
    Typography,
    Chip as MuiChip,
    Popper,
    Paper,
    MenuList,
    Button
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
const Spacer = styled.div(spacing);

const useStyles = makeStyles({
    Box: {
        backgroundColor: "white",
        padding: "2rem",
        marginLeft: "34px",
        marginTop: "34px",
        borderRadius: "15px",
        "&:hover, &:focus": {
            border: "2px solid #6320EE"
        },
    },
    name: {
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "700",
        marginTop: "12px"
    },
    content: {
        height: "108px",
        width: "125px",
        textAlign: "center",
    },
    chips: {
        height: "20px",
        borderRadius: "0px"
    },
    label: {
        paddingLeft: "1px",
        paddingRight: "1px"
    },
    item: {
        display: "flex",
        flexWrap: "wrap"
    },
    poper: {
        backgroundColor: "white",
        width: "30rem",
        padding: "20px",
        height: "221px",
        borderRadius: "15px"
    },
    poperShadow: {
        top: "-36px",
        left: "-250px",
        boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    },
    discription: {
        width: "20rem"
    },
    primary: {
        backgroundColor: "#23CC94",
        color: "white",
        width: "5rem",
        margin: "12px 0"
    },

})
const Chip = styled(MuiChip)`
  position: relative;
  top: -129px;
  right: -65px;
  padding: 0 6px;
  font-size: 78%;
  background-color:#F0EBFC;
  color: #6320EE;
  font-weight: 800;
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
`;
const Chips = styled(MuiChip)`
  position: relative;
  top: -187px;
  right: -400px;
  padding: 0 6px;
  font-size: 78%;
  background-color:#F0EBFC;
  color: #6320EE;
  font-weight: 800;
  margin-bottom: ${(props) => props.theme.spacing(4)}px;
`;

const integration = [
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },
    {
        id: '1',
        name: "Salesforce",
        icon: "https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg",
        decsription: "Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations, and to make sure that your forecasts are up-to-date. Here's what you can do once your Salesforce data is connected to your Causal model",
        slug: "",
    },



]
const Integration = () => {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(false)
    // const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleShow = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    // const handleLeave = (event) => {
    //     setAnchorEl(anchorEl ?  : event.currentTarget);
    // };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (
        <div className={classes.item}>
            {integration.map((item, index) => (
                <div>
                    <Box display="grid" alignItems="center" className={classes.Box} onMouseEnter={handleShow}>
                        <div className={classes.content}>
                            <img src="https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg" alt="box image" width="98px" />
                            <Typography variant="h3" className={classes.name}>Salesforce</Typography>
                            <Chip label="FREE" classes={{ root: classes.chips, label: classes.label }} />
                        </div>

                    </Box>
                    <Popper open={open} anchorEl={anchorEl} classes={{ tooltip: classes.poperShadow }} className={classes.poper} id="menu-list-grow">
                        <Grid container direction="row" alignItems="center">
                            <Grid item lg={4}>
                                <img src="https://global-uploads.webflow.com/5e8a043bfbc2c035b4d8e5b5/5f6218838acac6cf2d679d15_salesforce-2.svg" alt="box image" width="70px" style={{ marginLeft: '18px' }} />
                            </Grid>
                            <Grid item lg={8} style={{ marginLeft: '-40px' }}>
                                <Typography variant="h5" style={{ fontSize: '16px', fontWeight: '700' }}>Salesforce</Typography>
                                <Typography variant="subtitle1" className={classes.discription}>Use Causal to build your company's financial plan, and connect it to your data in Salesforce to get visibility into your operations.</Typography>
                            </Grid>
                        </Grid>
                        <Grid item style={{ marginLeft: '120px' }}>
                            <Button variant="primary" classes={{ primary: classes.primary }}>Approve</Button>
                            <Typography variant="subtitle1">*Notice of additional fee for CRM Integration</Typography>
                        </Grid>
                        <Chips label="FREE" classes={{ root: classes.chips, label: classes.label }} />
                    </Popper>
                </div>
            ))}
        </div>

    )
}

export default Integration
