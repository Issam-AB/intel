import React from "react";
import styled, { withTheme } from "styled-components/macro";

import {
  Card as MuiCard,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  LinearProgress as MuiLinearProgress,
  Divider as MuiDivider,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { MoreVertical } from "react-feather";
import { makeStyles } from "@material-ui/core/styles";
const Divider = styled(MuiDivider)(spacing);
const Card = styled(MuiCard)(spacing);

const useStyles = makeStyles({
  bar: {
    borderRadius: 5,
    backgroundColor: "#445AC9",
  },
  bar1: {
    borderRadius: 5,
    backgroundColor: "#45C1FF",
  },
  bar2: {
    borderRadius: 5,
    backgroundColor: "#9A68FC",
  },
  bar3: {
    borderRadius: 5,
    backgroundColor: "#50B332",
  },
  bar4: {
    borderRadius: 5,
    backgroundColor: "#FF9800",
  },
  card: {
    boxShadow: "0px 0px 12px -5px #000000",
    height: "382px",
  },
  title: {
    fontWeight: "700",
  },
});
const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

const LinearProgress = styled(MuiLinearProgress)`
  height: 14px;
  width: 180px;
  border-radius: 3px;
  background: ${(props) => props.theme.palette.grey[200]};
`;

function LanguagesTable() {
  const classes = useStyles();
  return (
    <Card mb={3} className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        classes={{ title: classes.title }}
        title="Traffic Sources"
      />
      <Divider />
      <Paper>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontWeight: "700" }}
                >
                  Trrafic Source
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "700" }}>
                  Poeple
                </TableCell>
                <TableCell style={{ fontWeight: "700" }}>Leads</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell scope="row">
                  <>
                    <span
                      style={{
                        backgroundColor: "#445AC9",
                        width: "9px",
                        height: "9px",
                        left: "-2%",
                        position: "relative",
                        borderRadius: "50%",
                        margin: "3px",
                        color: "#445AC9",
                      }}
                    >
                      ......
                    </span>
                    <span>Google My Business</span>
                  </>
                </TableCell>
                <TableCell align="center">5</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    classes={{
                      bar: classes.bar,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <>
                    <span
                      style={{
                        backgroundColor: "#45C1FF",
                        width: "9px",
                        height: "9px",
                        left: "-2%",
                        position: "relative",
                        borderRadius: "50%",
                        margin: "3px",
                        color: "#45C1FF",
                      }}
                    >
                      ......
                    </span>
                    <span>Direct Traffic</span>
                  </>
                </TableCell>
                <TableCell align="center">7</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    classes={{
                      bar: classes.bar1,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <>
                    <span
                      style={{
                        backgroundColor: "#9A68FC",
                        width: "9px",
                        height: "9px",
                        left: "-2%",
                        position: "relative",
                        borderRadius: "50%",
                        margin: "3px",
                        color: "#9A68FC",
                      }}
                    >
                      ......
                    </span>
                    <span>Organic Search</span>
                  </>
                </TableCell>
                <TableCell align="center">9</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    classes={{
                      bar: classes.bar2,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <>
                    <span
                      style={{
                        backgroundColor: "#50B432",
                        width: "9px",
                        height: "9px",
                        left: "-2%",
                        position: "relative",
                        borderRadius: "50%",
                        margin: "3px",
                        color: "#50B432",
                      }}
                    >
                      ......
                    </span>
                    <span>Soucial media</span>
                  </>
                </TableCell>
                <TableCell align="center">12</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    classes={{
                      bar: classes.bar3,
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <>
                    <span
                      style={{
                        backgroundColor: "#FF9800",
                        width: "9px",
                        height: "9px",
                        left: "-2%",
                        position: "relative",
                        borderRadius: "50%",
                        margin: "3px",
                        color: "#FF9800",
                      }}
                    >
                      ......
                    </span>
                    <span>Referral (misc,)</span>
                  </>
                </TableCell>
                <TableCell align="center">12</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    classes={{
                      bar: classes.bar4,
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </Paper>
    </Card>
  );
}

export default withTheme(LanguagesTable);
