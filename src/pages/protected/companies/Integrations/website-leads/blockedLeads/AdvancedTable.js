import React, { useState } from "react";
import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";
import Modal from "./Modal";
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
  InputBase,
  TextField,
  Button,
  AppBar,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  Search as SearchIcon,
  Forward as ForwardIcon,
  Visibility as VisibilityIcon,
  ThumbUpAltOutlined as ThumbUpAltIcon,
  Close as CloseIcon,
} from "@material-ui/icons";
import { Filter, MoreVertical } from "react-feather";
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
      borderLeft: "1px solid rgba(224, 224, 224, 1)",
      whiteSpace: "nowrap",
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
  // input: {
  //   marginLeft: theme.spacing(1),
  //   flex: 1,
  //   opacity: 0.6,
  //   transition: "0.75s",
  // },
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
    color: "#6320EE",
    fontSize: "25px",
    marginRight: "20px",
  },
  blockIcon: {
    color: "#6A74C9",
    fontSize: "25px",
    marginRight: "20px",
  },
  divIcons: {
    display: "flex",
    justifyContent: "flex-end",
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
}));
const Spacer = styled.div`
  flex: 1 1 100%;
`;

function createData(
  date,
  leadsSource,
  refernce,
  customer,
  phoneNumber,
  interestedService,
  comment
) {
  return {
    date,
    leadsSource,
    refernce,
    customer,
    phoneNumber,
    interestedService,
    comment,
  };
}

const rows = [
  createData(
    "Today",
    "Google",
    "a1",
    "keagan San",
    "714-755-9544",
    "Metal Roffing",
    "Lorem Ipsum is simply dummy text of the printing and typesetting ineedeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeedustry."
  ),
  createData(
    "Yesterday",
    "youtube",
    "a2",
    "Harii poter",
    "711-552-552",
    "Roffig main",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Today",
    "Google",
    "a3",
    "keagan San",
    "714-755-9544",
    "Metal Roffing",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Today",
    "Google",
    "a4",
    "keagan San",
    "714-755-9544",
    "Metal Roffing",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Today",
    "Google",
    "a5",
    "keagan San",
    "714-755-9544",
    "Metal Roffing",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Today",
    "Google",
    "a6",
    "keagan San",
    "714-755-9544",
    "Metal Roffing",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Today",
    "Google",
    "a7",
    "keagan San",
    "714-755-9544",
    "Metal Roffing",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Today",
    "Google",
    "a8",
    "keagan San",
    "714-755-9544",
    "Metal Roffing",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  createData(
    "Today",
    "Google",
    "a9",
    "keagan San",
    "714-755-9544",
    "Metal Roffing",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ),
  // createData("Today", "Google", "LGD4554", "keagan San", "714-755-9544", "Metal Roffing", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  // createData("Today", "Google", "LGD4554", "keagan San", "714-755-9544", "Metal Roffing", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  // createData("Today", "Google", "LGD4554", "keagan San", "714-755-9544", "Metal Roffing", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  // createData("Today", "Google", "LGD4554", "keagan San", "714-755-9544", "Metal Roffing", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
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
    id: "date",
    numeric: false,
    label: "Date",
  },
  {
    id: "leadsSource",
    numeric: true,
    disablePadding: false,
    label: "Leads Source",
  },
  { id: "refernce", numeric: true, disablePadding: false, label: "Reference" },
  { id: "customer", numeric: true, disablePadding: false, label: "Customer" },
  { id: "phoneNumber", numeric: true, disablePadding: false, label: "Phone Number" },
  {
    id: "interestedService",
    numeric: true,
    disablePadding: false,
    label: "Intrested Service",
  },
  { id: "comment", numeric: true, disablePadding: false, label: "Comment" },
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
    </TableHead >
  );
}

const options = [
  "Custom",
  "Reccent (Last 30 Dyas + Today)",
  "Yesterday",
  "Last 7 Days",
  "Last 30 Days",
  "This Month",
  "Last Month",
  "This Year",
  "Last Year",
];
let EnhancedTableToolbar = (props) => {
  const { numSelected, handleSelectAllClick } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const specificAppBar = numSelected ? " " : classes.appBar;

  return (
    <>
      <AppBar
        position="static"
        classes={{ root: specificAppBar, colorPrimary: classes.colorPrimary }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              style={{ color: "#868695" }}
              onClick={handleSelectAllClick}
            >
              <CloseIcon />
            </IconButton>
            {numSelected > 0 ? (
              <Typography
                color="inherit"
                variant="h6"
                style={{ fontWeight: "700", marginLeft: "10px" }}
              >
                {numSelected} item selected
              </Typography>
            ) : (
              ""
            )}
          </div>
          <div>
            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#6A74C9",
              }}
            >
              Unblock Leads
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Filter className={classes.icon} />
          <Typography
            variant="h6"
            id="tableTitle"
            className={classes.goodlaeads}
          >
            Good Leads
          </Typography>
          <Paper component="form" className={classes.input}>
            <IconButton className={classes.iconButton} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search Good Leads"
              inputProps={{ "aria-label": "search good leads" }}
            />
          </Paper>
        </div>
        <Spacer />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Autocomplete
            classes={{
              root: classes.autocomplete,
              inputFocused: classes.focused,
            }}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            size="small"
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Controllable" variant="outlined" />
            )}
          />
          <Button className={classes.export} variant="contained">
            Export (10)
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
  const [orderBy, setOrderBy] = React.useState("leadsSource");
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
      const newSelecteds = rows.map((n) => n.date);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, date) => {
    const selectedIndex = selected.indexOf(date);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, date);
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

  const isSelected = (date) => selected.indexOf(date) !== -1;

  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div>
      <Paper classes={{ root: classes.paper }}>
        <EnhancedTableToolbar
          handleSelectAllClick={handleSelectAllClick}
          numSelected={selected.length}
          isSelected={isSelected}
        />
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
                  const isItemSelected = isSelected(row.date);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      onClick={(event) => handleClick(event, row.date)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      hover
                      selected={isItemSelected}
                      // onMouseEnter={() => setActiveRow(index)}
                      // onMouseLeave={() => setActiveRow("")}
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
                      >
                        {row.date}
                      </TableCell>
                      <TableCell align="left">{row.leadsSource}</TableCell>
                      <TableCell align="left">{row.refernce}</TableCell>
                      <TableCell align="left">{row.customer}</TableCell>
                      <TableCell align="left">{row.phoneNumber}</TableCell>
                      <TableCell align="left">
                        {row.interestedService}
                      </TableCell>
                      <TableCell align="left">

                        {row.comment.length > 80
                          ? `${row.comment.substring(0, 75)} ...`
                          : `${row.comment}`}

                      </TableCell>
                      <TableCell align="left">
                        {<RowOptions />}
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

function RowOptions({ row }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <span> {row.refernce} Row Options</span> */}
      <div
        className={classes.divIcons}
      >
        <>
          <Tooltip title="Forward Leads" classes={{ tooltip: classes.popper }}>
            <ForwardIcon
              className={classes.forwardIcon}
              onClick={handleClickOpen}
            />
          </Tooltip>
          {open && (
            <Modal open={open} setOpen={setOpen} handleClose={handleClose} />
          )}
        </>

        <>
          <Tooltip
            title="View Leads"
            placement="top"
            classes={{ tooltip: classes.popper }}
          >
            <VisibilityIcon
              className={classes.visibility}
              onClick={handleClickOpen}
            />
          </Tooltip>
          {open && (
            <Modal open={open} setOpen={setOpen} handleClose={handleClose} />
          )}
        </>

        <Tooltip title="Unblock Leads" classes={{ tooltip: classes.popper }}>
          <ThumbUpAltIcon className={classes.blockIcon} />
        </Tooltip>
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
