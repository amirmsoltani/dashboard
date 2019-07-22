import React from 'react';
import MaterialTable from 'material-table';
import {Icon} from '@material-ui/core';
import {useStyles} from '../styles/js/Tables';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';




export default function MaterialTableDemo() {
    const classes = useStyles();
    const theme = useTheme();
    const [state, setState] = React.useState({
        columns: [
            //{ title: 'IfPublish', field: 'ifpublish' },
            { title: 'Title', field: 'title' },
            { title: 'Type', field: 'type' },
            { title: 'Expires', field: 'expires', type: 'numeric' },
            {
                title: 'Status',
                field: 'status',
                lookup: { 1: 'Active', 2: 'Draft',3:'Publish' },
            },
        ],
        data: [
            {
                // ifpublish:<Icon className={clsx({[classes.publish]:1===1,[classes.draft]:2!==2})}>done</Icon>,
                title: 'Spider Man',
                type: 'Baran',
                expires: 1987,
                status: 1
            },
            {
               //ifpublish:<Icon>done</Icon>,
                title: 'Zerya Betül',
                type: 'Baran',
                expires: 2017,
                status: 2,
            },
            {
                //ifpublish:<Icon>done</Icon>,
                title: 'Zerya Betül',
                type: 'Baran',
                expires: 2017,
                status: 3,
            },
        ],
    });

    return (
        <MaterialTable

            title="Tables"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.splice(data.indexOf(oldData), 1);
                            setState({ ...state, data });
                        }, 600);
                    }),

            }}

        />

    );
}