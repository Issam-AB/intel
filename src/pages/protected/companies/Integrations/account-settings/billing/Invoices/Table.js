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
  Container,
} from "@material-ui/core";

import { Visibility as VisibilityIcon } from "@material-ui/icons";
import { Download, FileText, Check } from "react-feather";
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
      border: "1px solid rgba(224, 224, 224, 1)",
      borderLeft: "none",
      whiteSpace: "nowrap",
      padding: "6px 15px",
      height: "51px",
    },
  },
})(TableRow);

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#6320EE",
    marginRight: "10px",
    marginLeft: "5px",
    width: "19px",
  },

  iconLabel: {
    color: "#6320EE !important",
  },
  goodlaeads: {
    fontWeight: "bold",
    marginRight: "50px",
    width: "90px",
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
    marginTop: "-8px",

    boxShadow: "0px 0px 12px -5px #000000",
    border: "1px solid #E0E0E0",
  },
  fontcells: {
    fontWeight: 600,
  },
  maxWidthSm: {
    maxWidth: "81rem",
  },
  toolbar: {
    minHeight: "48px",
  },
  celsTotal: {
    width: "20rem",
  },
  celsInvoces: {
    width: "14rem",
  },
  celsAction: {
    width: "9rem",
  },
  checkIcon: {
    width: "20px",
    color: "#50b432",
  },
  tableContainer: {
    overflow: "hidden",
  },
  tableHead: { borderLeft: "1px solid  #E0E0E0" },
}));
const Spacer = styled.div`
  flex: 1 1 100%;
`;

function createData(invoice, total, period, created) {
  return {
    invoice,
    total,
    period,
    created,
  };
}

const rows = [
  createData(" ", "400 USD", "Monthly", "july 24, 2021"),
  createData("25621596953", "400 USD", "Monthly", "july 24, 2021"),
  createData("25621596953 ", "400 USD", "Monthly", "Feb 24, 2021"),
  createData("25621596953", "400 USD", "Monthly", "Aug 24, 2021"),
  createData(" ", "400 USD", "Monthly", "May 24, 2021"),
  createData("25621596953", "- 400 USD", "Monthly", "Dec 24, 2021"),
  createData("25621596953", "400 USD", "Monthly", "Dec 24, 2021"),
  createData("25621596953", "400 USD", "Monthly", "Oct 24, 2021"),
  createData("25621596953 ", "0 USD", "Monthly", "Oct 24, 2021"),
  createData("25621596953", "400 USD", "Monthly", "Nov 24, 2021"),
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
    id: "invoice",
    numeric: true,
    disablePadding: false,
    label: "Invoice Number",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
  { id: "period", numeric: true, disablePadding: false, label: "Period" },
  {
    id: "created",
    numeric: true,
    disablePadding: false,
    label: "Created",
  },

  { id: "actions", numeric: false, disablePadding: false, label: "Actions" },
];

function EnhancedTableHead(props) {
  const classes = useStyles();
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
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
      <Toolbar classes={{ root: classes.toolbar }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FileText className={classes.icon} />
          <Typography
            variant="h6"
            id="tableTitle"
            className={classes.goodlaeads}
          >
            All Invoices
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

  return (
    <div>
      <Paper classes={{ root: classes.paper }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Divider />
        <TableContainer classes={{ root: classes.tableContainer }}>
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
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      tabIndex={-1}
                      key={index}
                      hover
                      style={{ whiteSpace: "nowrap", position: "sticky" }}
                    >
                      <TableCell padding="checkbox">
                        <Check className={classes.checkIcon} />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        classes={{ root: classes.celsInvoces }}
                        className={classes.fontcells}
                      >
                        {row.invoice}
                      </TableCell>
                      <TableCell
                        align="left"
                        className={classes.fontcells}
                        classes={{ root: classes.celsTotal }}
                      >
                        {row.total}
                      </TableCell>
                      <TableCell align="left" className={classes.fontcells}>
                        {row.period}
                      </TableCell>
                      <TableCell align="left" className={classes.fontcells}>
                        {row.created}
                      </TableCell>
                      <TableCell
                        align="left"
                        classes={{ root: classes.celsAction }}
                      >
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
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={classes.divIcons}>
        <>
          <Tooltip title="View" classes={{ tooltip: classes.popper }}>
            <VisibilityIcon
              className={classes.forwardIcon}
              onClick={handleClickOpen}
            />
          </Tooltip>
        </>

        <>
          <Tooltip title="Download" classes={{ tooltip: classes.popper }}>
            <Download className={classes.visibility} />
          </Tooltip>
        </>
      </div>
    </>
  );
}

function AdvancedTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Helmet title="Advanced Table" />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Container maxWidth="sm" classes={{ maxWidthSm: classes.maxWidthSm }}>
            <EnhancedTable />
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AdvancedTable;
