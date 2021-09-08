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
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { MoreVertical } from "react-feather";
import { makeStyles } from "@material-ui/core/styles";

const Card = styled(MuiCard)(spacing);

const useStyles = makeStyles({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#E9E9E9",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#9A68FC",
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
    <Card mb={3}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        title="Traffic Sources"
      />
      <Paper>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="row">
                  Trrafic Source
                </TableCell>
                <TableCell align="center">Poeple</TableCell>
                <TableCell>Leads</TableCell>
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
                        left: "-4%",
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
                    style={{
                      bar: {
                        borderRadius: 5,
                        backgroundColor: "#445AC9",
                      },
                      root: {
                        height: 10,
                        borderRadius: 5,
                      },
                      colorPrimary: {
                        backgroundColor: "#E9E9E9",
                      },
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
                        left: "-4%",
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
                      root: classes.root,
                      colorPrimary: classes.colorPrimary,
                      bar: classes.bar,
                    }}
                    style={{
                      bar: {
                        borderRadius: 5,
                        backgroundColor: "#45C1FF",
                      },
                      root: {
                        height: 10,
                        borderRadius: 5,
                      },
                      colorPrimary: {
                        backgroundColor: "#E9E9E9",
                      },
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
                        left: "-4%",
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
                    style={{
                      bar: {
                        borderRadius: 5,
                        backgroundColor: "#9A68FC",
                      },
                      root: {
                        height: 10,
                        borderRadius: 5,
                      },
                      colorPrimary: {
                        backgroundColor: "#E9E9E9",
                      },
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
                        left: "-4%",
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
                    style={{
                      bar: {
                        borderRadius: 5,
                        backgroundColor: "#50B432",
                      },
                      root: {
                        height: 10,
                        borderRadius: 5,
                      },
                      colorPrimary: {
                        backgroundColor: "#E9E9E9",
                      },
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
