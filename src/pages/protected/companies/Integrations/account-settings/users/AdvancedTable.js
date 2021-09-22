import React, { useState } from "react";
import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";
import Popup from "./Popup";
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
  Avatar,
  MenuItem,
  Select,
  InputLabel,
  FormControl
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
  Avatar: {
    width: "30px",
    height: "30px",
    backgroundColor: "#6A74C9",
    marginRight: "10px"
  },
  select: {
    border: "1px solid #6A74C9",
    borderRadius: "4px",
    color: "#6A74C9",
    // backgroundColor: "white"
  },
  labelView: {
    color: "#6A74C9",
  }
}));
const Spacer = styled.div`
  flex: 1 1 100%;
`;

function createData(
  member,
  role,

) {
  return {
    member,
    role,
  };
}

const rows = [
  createData(
    "Ammanda Petersen",
    "CEO",
  ),
  createData(
    "Bonnie Roberts",
    "Marketing Assistant",
  ),
  createData(
    "Cleo Pala",
    "Project Manager",
  ),
  createData(
    "Danny James A.Lepaopao",
    "Project Manager",
  ),
  createData(
    "James Aaron Ramayan",
    "SEO Officer",
  ),
  createData(
    "Luvly M. Clarido",
    "CTO",
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
    id: "member",
    numeric: false,
    label: "Member",
  },
  {
    id: "role",
    numeric: true,
    disablePadding: false,
    label: "Role",
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
  const { numSelected, handleSelectAllClick } = props;
  const classes = useStyles();

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
                backgroundColor: "#e01e1e",
              }}
            >
              Delete Selected
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>

        <div style={{ display: "flex", }}>
          <Filter className={classes.icon} />
          <Typography
            variant="h6"
            id="tableTitle"
            className={classes.goodlaeads}
          >
            Good Leads
          </Typography>

        </div>

        <Tooltip title="Filter list">
          <IconButton aria-label="Filter list">
            <MoreVertical />
          </IconButton>
        </Tooltip>

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
      const newSelecteds = rows.map((n) => n.member);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, member) => {
    const selectedIndex = selected.indexOf(member);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, member);
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

  const isSelected = (member) => selected.indexOf(member) !== -1;

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
                  const isItemSelected = isSelected(row.member);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      onClick={(event) => handleClick(event, row.member)}
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Avatar className={classes.Avatar}>
                            {row.member[0]}
                          </Avatar>
                          {row.member}
                        </div>
                      </TableCell>
                      <TableCell align="left">{row.role}</TableCell>
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
  const [open, setOpen] = React.useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {/* <span> {row.refernce} Row Options</span> */}
      <div className={classes.divIcons}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" style={{ fontSize: "12px", paddingLeft: "10px" }} classes={{ root: classes.labelView }}>View Only Access</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="View Only Access"
            onChange={handleChange}
            disableUnderline
            className={classes.select}

          // getContentAnchorEl={null}
          // anchorOrigin={{ vertical: "bottom", horizontal: "top" }}
          // transformOrigin={{ vertical: "bottom", horizontal: "bottom" }}
          >
            <MenuItem value={10}>View Only Access</MenuItem>
            <MenuItem value={20} style={{ color: "black", fontWeight: "600" }}>Full Access</MenuItem>
            <MenuItem value={30} style={{ color: "red", fontWeight: "600" }}>Delete</MenuItem>
          </Select>
        </FormControl>
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
