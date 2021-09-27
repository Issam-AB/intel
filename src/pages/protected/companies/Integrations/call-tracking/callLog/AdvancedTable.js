import React, { useState } from "react";
import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import {
  Checkbox,
  Grid,
  IconButton,
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
  Button,
} from "@material-ui/core";

import {
  MoreVertical,
  PhoneIncoming,
  Volume,
  Download,
  Volume2,
  Slash,
} from "react-feather";
import { spacing } from "@material-ui/system";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const Divider = styled(MuiDivider)(spacing);

// const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const StyledTableRow = withStyles({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#F9F9FC",
      opacity: 2,
    },
    "& .MuiTableCell-root": {
      // borderLeft: "1px solid rgba(224, 224, 224, 1)",
      border: "1px solid rgba(224, 224, 224, 1)",

      whiteSpace: "nowrap",
      padding: "7px 16px",
      cursor: "pointer",
    },
  },
})(TableRow);

const useStyles = makeStyles((theme) => ({
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
    width: "93px",
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
  export: {
    marginLeft: "34px",
    width: "104px",
    color: "white",
    backgroundColor: "#6A74C9",
  },
  label: {
    fontWeight: "700",
  },
  visibility: {
    color: "#6A74C9",
    fontSize: "25px",
    height: "21px",
    marginRight: "12px",
  },
  forwardIcon: {
    color: "#6A74C9",
    width: "45px",
    height: "24px",
    marginLeft: "-27px",
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
    boxShadow: "0px 0px 12px -5px #000000",
    whiteSpace: "nowrap",
  },
  paper: {
    borderRadius: "12px",
    boxShadow: "0px 0px 12px -5px #000000",
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
  },
  tableHead: { borderLeft: "1px solid  #E0E0E0" },
  blockIcon: {
    color: "red",
    width: "21px",
  },
}));
const Spacer = styled.div`
  flex: 1 1 100%;
`;

function createData(
  no,
  company,
  source,
  startTime,
  duration,
  callersName,
  numero
) {
  return {
    no,
    company,
    source,
    startTime,
    duration,
    callersName,
    numero,
  };
}

const rows = [
  createData(
    "4",
    "Resodence Roffing Depot, LLC",
    "Google My Business",
    "Today 5:00pm",
    "45s",
    "Keagan Schulist",
    "(863) 399-9200"
  ),
  createData(
    "9",
    "Resodence Roffing Depot, LLCe",
    "Metal Roffing",
    "Today 4:00pm",
    "2m 05s",
    "Lou Moore",
    "(863) 399-9200"
  ),
  createData(
    "6",
    "Resodence Roffing Depot, LLC",
    "Google Origanic",
    "Today 1:00pm",
    "32s",
    "Laurie Senger",
    "(863) 399-9200"
  ),
  createData(
    "2",
    "Resodence Roffing Depot, LLC",
    "Direct",
    "Yestarday 1:30pm",
    "35s",
    "jazmyn Greenhoit",
    "(863) 399-9200"
  ),
  createData(
    "8",
    "Resodence Roffing Depot, LLC",
    "Leads Gen Intel",
    "Yestarday 3:30pm",
    "2m 12s",
    "wanda Rice",
    "(863) 399-9200"
  ),
  createData(
    "1",
    "Resodence Roffing Depot, LLC",
    "Bing Origanic",
    "Yestarday 4:30pm",
    "35s",
    "Metal Roffing",
    "(863) 399-9200"
  ),
  createData(
    "5",
    "Resodence Roffing Depot, LLC",
    "Google My Business",
    "Today 5:00pm",
    "45s",
    "Keagan Schulist",
    "(863) 399-9200"
  ),
  createData(
    "10",
    "Resodence Roffing Depot, LLCe",
    "Metal Roffing",
    "Today 4:00pm",
    "2m 05s",
    "Lou Moore",
    "(863) 399-9200"
  ),
  createData(
    "7",
    "Resodence Roffing Depot, LLC",
    "Google Origanic",
    "Today 1:00pm",
    "32s",
    "Laurie Senger",
    "(863) 399-9200"
  ),
  createData(
    "3",
    "Resodence Roffing Depot, LLC",
    "Direct",
    "Yestarday 1:30pm",
    "35s",
    "jazmyn Greenhoit",
    "(863) 399-9200"
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
    id: "no",
    numeric: true,
    label: "No.",
  },
  {
    id: "company",
    numeric: true,
    disablePadding: false,
    label: "Company",
  },
  { id: "source", numeric: true, disablePadding: false, label: "Source" },
  {
    id: "startTime",
    numeric: true,
    disablePadding: false,
    label: "Start Time",
  },
  { id: "duration", numeric: true, disablePadding: false, label: "Duration" },
  {
    id: "callersName",
    numeric: true,
    disablePadding: false,
    label: "Callers Name",
  },
  { id: "actions", numeric: false, disablePadding: false, label: "Actions" },
];

function EnhancedTableHead(props) {
  const classes = useStyles();
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            style={{ padding: "15px" }}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            classes={{ head: classes.tableHead }}
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
          <PhoneIncoming className={classes.icon} />
          <Typography
            variant="h6"
            id="tableTitle"
            className={classes.goodlaeads}
          >
            Call Log
          </Typography>
        </div>
        <Spacer />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button startIcon="E:" className={classes.export} variant="contained">
            Export
          </Button>

          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <MoreVertical />
            </IconButton>
          </Tooltip>
        </div>
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

  const isSelected = (no) => selected.indexOf(no) !== -1;

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
                  const isItemSelected = isSelected(row.no);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      onClick={(event) => handleClick(event, row.no)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      hover
                      selected={isItemSelected}
                      style={{ whiteSpace: "nowrap", position: "sticky" }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                        style={{ width: "9px" }}
                        className={classes.fontcells}
                      >
                        {row.no}
                      </TableCell>
                      <TableCell align="left" className={classes.fontcells}>
                        {row.company}
                      </TableCell>
                      <TableCell align="left" className={classes.fontcells}>
                        {row.source}
                      </TableCell>
                      <TableCell align="left" className={classes.fontcells}>
                        {row.startTime}
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        {row.duration}
                      </TableCell>
                      <TableCell align="left" className={classes.fontcells}>
                        <div style={{ marginBottom: "10px" }}>
                          {row.callersName}
                        </div>
                        <div
                          style={{
                            fontSize: "12.5px",
                            fontWeight: "600",
                            color: "#62A2DC",
                          }}
                        >
                          {row.numero}
                        </div>
                      </TableCell>
                      <TableCell align="left">{<RowOptions />}</TableCell>
                    </StyledTableRow>
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
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <div className={classes.divIcons}>
        <>
          {open ? (
            <Tooltip title="Listen Call" classes={{ tooltip: classes.popper }}>
              <Volume
                className={classes.forwardIcon}
                onClick={handleClickOpen}
              />
            </Tooltip>
          ) : (
            <Tooltip
              title="Stop Listening"
              classes={{ tooltip: classes.popper }}
            >
              <Volume2
                className={classes.forwardIcon}
                onClick={handleClickOpen}
              />
            </Tooltip>
          )}
        </>

        <>
          <Tooltip title="Download Call" classes={{ tooltip: classes.popper }}>
            <Download className={classes.visibility} />
          </Tooltip>
        </>
        <>
          <Tooltip title="Block Leads" classes={{ tooltip: classes.popper }}>
            <Slash className={classes.blockIcon} />
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
