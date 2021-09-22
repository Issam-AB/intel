import React from 'react';
import {
    LinearProgress as MuiLinearProgress,

} from "@material-ui/core";
import styled, { withTheme } from "styled-components/macro";

const LinearProgress = styled(MuiLinearProgress)`
  height: 14px;
  width: 180px;
  border-radius: 3px;
  background: ${(props) => props.theme.palette.grey[200]};
`;

const PasswordStr = props => {
    var strColor;
    var strWidth;

    switch (props.score) {
        case 1:
            strColor = 'red';
            strWidth = '20%';
            break;
        case 2:
            strColor = 'orange';
            strWidth = '40%';
            break;
        case 3:
            strColor = 'yellow';
            strWidth = '60%';
            break;
        case 4:
            strColor = '#5cff47';
            strWidth = '80%';
            break;
        case 5:
            strColor = 'green';
            strWidth = '100%';
            break;
        default:
    }

    var style = { backgroundColor: strColor, height: '5px', width: strWidth, transition: 'all 300ms ease-in-out' }
    var pswdWeak = { display: 'inline-block', position: "relative", left: 0, padding: 0, margin: 0, color: "#808080" }
    var pwStrStrong = { display: 'inline-block', position: "relative", left: "77%", padding: 0, margin: 0, color: "#808080" }
    return (
        <div>
            <p style={pswdWeak}>weak</p>
            <p style={pwStrStrong}>strong</p>
            <div style={style} />

            <LinearProgress
                variant="determinate"
                value={75}
            // classes={{
            //     bar: classes.bar4,
            // }}
            />
        </div >
    );

}

export default PasswordStr;