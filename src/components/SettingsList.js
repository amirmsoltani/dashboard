import React from 'react';
import { makeStyles, Theme, createStyles,withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Select, InputLabel, MenuItem, FormControl, CardMedia, Fab, Icon, InputBase} from '@material-ui/core';
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            border:"1px solid rgba(80,80,80,0.3)",
            borderRadius:3,
        },
        bigAvatar: {
            margin: 10,
            width: 60,
            height: 60,
        },
        margin: {
            margin: theme.spacing(1),
        },
        media:{
            width:'100%',
            height: 200,
            borderRadius:5,

        },
        fab:{
            width:40,
            height:40,
            marginLeft:7

        },
        fabHide:{
            display:'none',
        },
        fabIcon:{
            fontSize: 18,
        }
    }),
);

export const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }),
)(InputBase);

export default function SwitchListSecondary() {
    const classes = useStyles();
    const [type,setType] = React.useState(1);
    const [image,setImage] = React.useState('https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    return (
        <List subheader={<ListSubheader>Action</ListSubheader>} className={classes.root}>
            <ListItem>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="age-customized-select">Type</InputLabel>
                    <Select
                        value={type}
                        input={<BootstrapInput name="type" id="age-customized-select" />}
                        onChange={(event) => {setType(event.target.value)}}
                    >
                        <MenuItem value={1}>Movie</MenuItem>
                        <MenuItem value={2}>Series</MenuItem>
                        <MenuItem value={3}>News</MenuItem>
                    </Select>
                </FormControl>
            </ListItem>

            <ListItem>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <Icon className={classes.fabIcon}>add_a_photo</Icon>
                </Fab>
                <Fab color="secondary" aria-label="Unset" className={clsx(classes.fab,{[classes.fabHide]:!image})}
                onClick={()=>setImage(undefined)}>
                    <Icon className={classes.fabIcon}>block</Icon>
                </Fab>
            </ListItem>

            <ListItem>
                {image===undefined?<div />:
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Paella dish"
                    />
                }
            </ListItem>

        </List>
    );
}