import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Icon} from '@material-ui/core';
import clx from 'clsx';
import '../styles/css/Table.css';

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

function createData(title,edit,delet,tick, type, expires, status) {
    return { title,edit,delet,tick, type, expires, status };
}

const rows = [
    createData('Frozen yoghurt',<a href="#"> <i className="material-icons">edit</i></a>,<a href="#"> <i className="material-icons">delete</i></a>,<a > <i className="material-icons">done</i></a>,159, 6.0, 'Active'),
    createData('Frozen yoghurt',<a href="#"> <i className="material-icons">edit</i></a>,<a href="#"> <i className="material-icons">delete</i></a>,<a > <i className="material-icons">done</i></a>,159, 6.0, 'Publish'),
    createData('Frozen yoghurt',<a href="#"> <i className="material-icons">edit</i></a>,<a href="#"> <i className="material-icons">delete</i></a>,<a > <i className="material-icons">done</i></a>,159, 6.0, 'Draft'),
    createData('Frozen yoghurt',<a href="#"> <i className="material-icons">edit</i></a>,<a href="#"> <i className="material-icons">delete</i></a>,<a > <i className="material-icons">done</i></a>,159, 6.0, 'Block'),

];

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

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                        <StyledTableCell align="right">Type</StyledTableCell>
                        <StyledTableCell align="right">Expires</StyledTableCell>
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
                            <StyledTableCell className="icon_body"  align="right" >{row.edit}</StyledTableCell>
                            <StyledTableCell className="icon_body"  align="left" >{row.delet}</StyledTableCell>
                            <StyledTableCell  ><Icon className={clx({
                                "active":row.status==="Publish",
                                "draft":row.status==="Draft",
                                "block":row.status==="Block",
                            })}>done</Icon></StyledTableCell>
                            <StyledTableCell align="right">{row.type}</StyledTableCell>
                            <StyledTableCell align="right">{row.expires}</StyledTableCell>
                            <StyledTableCell align="right">{row.status}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}