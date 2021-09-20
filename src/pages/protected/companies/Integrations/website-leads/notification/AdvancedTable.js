import React, { useState } from "react";
import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";
// import Modal from "./Modal";
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
  FormControlLabel,
  Switch,
  Chip as MuiChip,
  Toolbar,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import { FiberManualRecord as FiberManualRecordIcons } from "@material-ui/icons";
import { Bell, MoreVertical } from "react-feather";
import { spacing } from "@material-ui/system";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const Divider = styled(MuiDivider)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Chip = styled(MuiChip)`
  border-radius: 25px;
  margin: 5px;
  padding: 14px 1px;
`;
const StyledTableRow = withStyles({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#F9F9FC",
      opacity: 2,
    },
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(224, 224, 224, 1)",
      whiteSpace: "nowrap",
      padding: "9px",
    },
  },
})(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    border: "1px solid #DBDBDB",
    "&:hover": {
      border: "1px solid #6320EE",
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
  goodlaeads: {
    fontWeight: "bold",
    width: "143px",
  },
  rootchips: {
    minWidth: "0px",
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
  },
  iconLabel: {
    color: "#6320EE !important",
  },
  chipInput: {
    minHeight: "30px",
    fontWeight: "600",
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
    color: "#6320EE",
    fontSize: "25px",
    marginRight: "20px",
  },
  forwardIcon: {
    color: "#6A74C9",
    fontSize: "25px",
    marginRight: "20px",
  },
  blockIcon: {
    color: "#e01e1e",
    fontSize: "25px",
    marginRight: "20px",
  },
  divIcons: {
    display: "flex",
    justifyContent: "flex-end",
    // marginLeft: "200px",
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
    // top: theme.spacing(5)
  },
  dialogTitle: {
    paddingRight: "0px",
  },
  startICon: {
    margin: 0,
  },
  chip: {
    margin: "2px 9px 3px 1px",
  },
}));
const Spacer = styled.div`
  flex: 1 1 100%;
`;

function createData(formName, status, leadsSubmitted, notifications) {
  return {
    formName,
    status,
    leadsSubmitted,
    notifications,
  };
}

const rows = [
  createData("FREE Estimate", "1", "47"),
  createData("Contact Us", "1", "35"),
  createData("Residential Roffing", "1", "29"),
  createData("Commercial Roffing", "0", "17"),
  createData("Financing", "1", "8"),
  createData("Home", "0", "41"),
  createData("Tile Roffing", "1", "2"),
  createData("Tile Roffing", "1", "2"),
  createData("Metal Roffing", "1", "2"),
  createData("Tile Roffing", "1", "2"),
  createData("Home", "0", "41"),
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
    id: "formName",
    numeric: true,
    label: "Form Name",
  },
  {
    id: "Status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "leadsSubmitted",
    numeric: false,
    disablePadding: false,
    label: "Leads Submitted",
  },
  {
    id: "notifications",
    numeric: true,
    disablePadding: false,
    label: "Notfications",
  },
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
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
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
          <Bell className={classes.icon} />
          <Typography
            variant="h6"
            id="tableTitle"
            className={classes.goodlaeads}
          >
            Leads Notifications
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
  const [orderBy, setOrderBy] = React.useState("leadsSubmitted");
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
      const newSelecteds = rows.map((n) => n.formName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, formName) => {
    const selectedIndex = selected.indexOf(formName);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, formName);
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

  const isSelected = (formName) => selected.indexOf(formName) !== -1;

  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
                  const isItemSelected = isSelected(row.formName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      onClick={(event) => handleClick(event, row.formName)}
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
                        // padding="none"
                        align="left"
                        style={{ width: "200px", fontWeight: "600" }}
                      >
                        {row.formName}
                      </TableCell>
                      {/* <TableCell align="left">{row.status}</TableCell> */}
                      <TableCell align="center" style={{ width: "200px" }}>
                        {
                          <FiberManualRecordIcons
                            style={{
                              color: row.status == 1 ? "#388E3C" : "#B21F1F",
                              marginLeft: "-14px",
                            }}
                          />
                        }
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ width: "200px", fontWeight: "600" }}
                      >
                        {row.leadsSubmitted}
                      </TableCell>

                      <TableCell align="left" style={{ width: "400px" }}>
                        <Paper component="ul" className={classes.root}>
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
                      </TableCell>
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
