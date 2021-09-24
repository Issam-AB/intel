import React, { useState } from "react";
import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import {
  Grid,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
  FormControlLabel,
  Switch,
  Chip as MuiChip,
} from "@material-ui/core";

import { FilePlus } from "react-feather";
import { spacing } from "@material-ui/system";
import { Visibility, Archive } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const useStyles = makeStyles((theme) => ({
  root: {
    "&": {
      backgroundColor: "#E4DEF9",
      opacity: 2,
    },
    "& .MuiTableCell-root": {
      borderLeft: "1px solid #D0CBD4",
      borderBottom: "1px solid #D0CBD4",
      whiteSpace: "nowrap",
      padding: "15px",
    },
  },
  icon: {
    color: "#6320EE",
    marginRight: "10px",
    marginLeft: "5px",
  },
  focused: {
    color: "#6A74C9",
  },
  iconLabel: {
    color: "#6320EE !important",
  },
  goodlaeads: {
    fontWeight: "bold",
    marginRight: "50px",
    width: "100px",
  },
  input: {
    padding: "0 0px",
    display: "flex",
    alignItems: "center",
    marginLeft: "-25px",
    width: 400,
    height: 31,
    transition: "0.5s",
    backgroundColor: "#F9F9FC",
    "&:hover, &:focus": {
      border: "1px solid #6320EE",
      opacity: 4,
    },
  },
  iconButton: {
    padding: "5px 10px",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  autocomplete: {
    padding: "0px",
    border: "none",
  },
  label: {
    fontWeight: "700",
  },
  visibility: {
    color: "#6A74C9",
    fontSize: "25px",
    height: "21px",
    marginRight: "2px",
  },
  archive: {
    color: "#6320EE",
    fontSize: "25px",
    height: "21px",
    marginRight: "2px",
  },
  divIcons: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  popper: {
    backgroundColor: "#6A74C9",
    color: "white",
  },
  table: {
    minWidth: 700,
    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
    whiteSpace: "nowrap",
  },
  paper: {
    borderRadius: "12px",
    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  dialogwrapper: {
    padding: theme.spacing(4),
    position: "absolute",
    maxWidth: "50rem",
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  startICon: {
    margin: 0,
  },
  appBar: {
    contentVisibility: "hidden",
  },
  colorPrimary: {
    backgroundColor: "#e4def9",
    color: "black",
  },
  fontcells: {
    fontWeight: 600,
    fontSize: "15px",
    padding: "15px",
  },
  Chips: {
    color: "black",
  },
}));
const Spacer = styled.div`
  flex: 1 1 100%;
`;
const Chip = styled(MuiChip)`
  height: 20px;
  padding: 16px 3px;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

function createData(department, ticket, status, lastActivity) {
  return {
    department,
    ticket,
    status,
    lastActivity,
  };
}

const rows = [
  createData(
    "Integration",
    "[# 1231546] Need JobNimbus Integration",
    <Chip label="Waiting on Reponse" rgbcolor={"#E01E1E"} />,
    "Today 12:00pm"
  ),
  createData(
    "Level2 - Support",
    "[# 1231546] cancel dediicated IP",
    <Chip label="Processing" rgbcolor={"#388E3C"} />,
    "Today 10:18pm"
  ),
  createData(
    "Sales",
    "[# 1231546] Decidicated Ip for urgentrestoration.com",
    <Chip label="Closed" rgbcolor={"#DBDBDB"} style={{ color: "black" }} />,
    "2 weeks 10:18pm"
  ),
  createData(
    "Billing",
    "[# 1231546] re: remove email completely from account",
    <Chip label="Closed" rgbcolor={"#DBDBDB"} style={{ color: "black" }} />,
    "Today 10:8pm"
  ),
  createData(
    "Level 2 - Support",
    "[# 1231546]  cancel dedicated IP",
    <Chip label="Closed" rgbcolor={"#DBDBDB"} style={{ color: "black" }} />,
    "Today 6 Month 7:18am"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "department",
    numeric: true,
    disablePadding: false,
    label: "Department",
  },
  {
    id: "ticket",
    numeric: true,
    disablePadding: false,
    label: "Ticket",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  {
    id: "lastActivity",
    numeric: true,
    disablePadding: false,
    label: "Last Activity",
  },
  { id: "actions", numeric: false, disablePadding: false, label: "Actions" },
];

function EnhancedTableHead(props) {
  const classes = useStyles();
  const {
    // onSelectAllClick,
    order,
    orderBy,
    // numSelected,
    // rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "center"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              classes={{ root: classes.label, icon: classes.iconlabel }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
let EnhancedTableToolbar = (props) => {
  // const { numSelected } = props;
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FilePlus className={classes.icon} />
          <Typography
            variant="h6"
            id="tableTitle"
            className={classes.goodlaeads}
          >
            New Request
          </Typography>
        </div>
        <Spacer />
      </Toolbar>
    </>
  );
};

function EnhancedTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = React.useState("source");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const classes = useStyles();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.no);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, no) => {
    const selectedIndex = selected.indexOf(no);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, no);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div>
      <Paper classes={{ root: classes.paper }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Divider />
        <TableContainer>
          <Table
            classes={{ root: classes.table }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="customized table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      classes={{ root: classes.root }}
                      onClick={(event) => handleClick(event, row.no)}
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      hover
                      style={{ whiteSpace: "nowrap", position: "sticky" }}
                    >
                      <TableCell className={classes.fontcells}>
                        {row.department}
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{ color: "#388E3C", fontSize: "15px" }}
                      >
                        {row.ticket}
                      </TableCell>
                      <TableCell align="left" className={classes.fontcells}>
                        {row.status}
                      </TableCell>
                      <TableCell align="left" className={classes.fontcells}>
                        {row.lastActivity}
                      </TableCell>
                      <TableCell align="left">{<RowOptions />}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}

function RowOptions({ row }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.divIcons}>
        <>
          <Tooltip title="View" classes={{ tooltip: classes.popper }}>
            <Visibility className={classes.visibility} />
          </Tooltip>
        </>
        <>
          <Tooltip title="Archive" classes={{ tooltip: classes.popper }}>
            <Archive className={classes.archive} />
          </Tooltip>
        </>
      </div>
    </>
  );
}

function AdvancedTable() {
  return (
    <React.Fragment>
      <Helmet title="Advanced Table" />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EnhancedTable />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AdvancedTable;
