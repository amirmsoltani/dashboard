import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import clx from 'clsx';
import '../styles/css/Table.css';
import moment from 'moment-jalaali';

import {Table,TableBody,TableCell,TableHead,TableRow,Paper,Icon,DialogTitle,Dialog,DialogActions,DialogContent,Button,DialogContentText} from '@material-ui/core';


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));
function getTime (data)
{
    let today = new Date();
    let before = new Date(data);
    let totime = today.getTime(),betime = before.getTime();
    if(totime > betime+86400000)
        return moment(before.getFullYear()+"/"+before.getMonth()+"/"+before.getDate(),"YYYY/MM/DD")
            .format("jYYYY/jMM/jDD");
    if(totime > betime+3600000)
        return before.getHours()+" hour";
    if(totime > betime+60000)
        return before.getMinutes()+ " min";
    return before.getSeconds() +" sec"


}

export default function CustomizedTables(props) {


  const {rows} = props;


    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                            <div className="head_div">
                            <div className="search">
                                <a className="table_btn_search" > <i className="material-icons">search</i></a>
                                <input className="table_input_search" placeholder="Search"/>
                                <a className="table_btn_close"> <i className="material-icons">close</i></a>
                            </div>
                                <button  className="table_btn_add"> <Link component={Link} to="AddPost/" ><i className="material-icons">add</i></Link></button>
                            </div>

                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                        <StyledTableCell align="right">Type</StyledTableCell>
                        <StyledTableCell align="right">Modified</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.name}>
                            {/*<StyledTableCell component="th" scope="row">*/}
                                {/*{row.name}*/}
                            {/*</StyledTableCell>*/}
                            <StyledTableCell >{row.title}</StyledTableCell>
                            <StyledTableCell className="icon_body"  align="right" ><Link to={`AddPost/${row.id}`}> <i className="material-icons">edit</i></Link></StyledTableCell>
                            <AlertDialog/>
                            <StyledTableCell  ><Icon className={clx({
                                "active":row.status===1,
                                "archived":row.status===3,
                                "faild":row.status===4,
                            })}>done</Icon></StyledTableCell>
                            <StyledTableCell align="right">{row.type}</StyledTableCell>
                            <StyledTableCell align="right">{getTime(row.modified)}</StyledTableCell>
                            <StyledTableCell align="right">{row.status}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
export  function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <StyledTableCell className="icon_body"  align="left" ><a href='#' variant="outlined" color="primary"  onClick={handleClickOpen}> <i className="material-icons">delete</i></a></StyledTableCell>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={{marginRight:400}} id="alert-dialog-title">{"Are You Sure?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                     Do Delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="dialog_a">
                    <button  onClick={handleClose} >
                        Disagree
                    </button>
                    <button href="#" onClick={handleClose}  >
                        Agree
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}