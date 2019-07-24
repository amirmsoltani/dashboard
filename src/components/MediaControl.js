import React from 'react';
import {Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    GridList,
    GridListTile,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    GridListTileBar,
    Icon,
    Button,
    Slide,
    InputBase
} from '@material-ui/core';
import {fade,makeStyles} from "@material-ui/core/styles";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 600,
        paddingTop:10
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    tile:{
        width: '25%'
    },
    file:{
         display: 'none'
        },
    span:{
        margin:7
    },
    button:{
        margin:7
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
class Data
{
    images =[];
    data =[];
    getnew(seter) {
        axios.get('http://api.thut.ir/media/')
            .then(function (response) {
                seter(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    getSearch(result,seter)
    {
        axios.get(`http://api.thut.ir/media/?search=${result}`)
            .then(function (response) {
                seter(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    getdelete(id,seter)
    {
        axios.delete(`http://api.thut.ir/media/${id}`)
            .then(function (response) {
                // handle success
                seter(response.data,id);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    uploadMedia(data,seter)
    {
        let formdata = new FormData();
        formdata.append('image',data['image']);
        formdata.append('description',data['description']);
        formdata.append('type',1);
        formdata.append('url','');
        axios.post('http://api.thut.ir/media/',formdata,{headers: {
        'Content-Type': 'multipart/form-data'}
    })
            .then(function (response) {
                // handle success
                seter(true,response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}
const d = new Data();

function SendMedia(props) {
    const [open,setOpen] = React.useState(false);
    const [File,setFile] = React.useState("");
    const [name,setName] = React.useState("");
    const {backData} = props;
    function upload(status,data) {
            if(status) {
                backData(data);
                name.value = "";
                setFile("");

            }
    }
    const classes = useStyles();
    return(
        <div>
            <IconButton variant="outlined" color="secondary" onClick={()=>setOpen(true)}>
                <Icon>add</Icon>
            </IconButton>
            <Dialog open={open} onClose={()=>setOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Upload Media</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter file name and select File in system and click upload button
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="File Name"
                        fullWidth
                        onFocus={(event)=>setName(event.target)}
                    />
                    <span className={classes.span}>
                        {File.name}
                    </span>
                    <input
                        accept="image/*"
                        className={classes.file}
                        id="outlined-button-file"
                        type="file"
                        onChange={event=>setFile(event.target.files[0])}
                    />
                    <label htmlFor="outlined-button-file">
                        <Button variant="outlined" component="span" className={classes.button}>
                            Select
                        </Button>
                    </label>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)} color="primary">
                        Close
                    </Button>
                    <Button  color="primary" onClick={()=>d.uploadMedia({image:File,description:name.value},upload)}>
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}
export function Controler(props)
{
    const  classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [data,setData] = React.useState([]);
    function addnew(d) {

        let t = data.slice();
        t.push(d);
        console.log(t);
        setData(t)
    }
    function datadelete(message,id) {
        let t = data.slice();
        data.find((obj,index)=>{
        if(obj.id ===id)
        {
            t.splice(index,1);
            return true;
        }
        });
        setData(t);
    }
    return(
        <div>
            <Button variant="outlined" color="primary" onClick={()=>{setOpen(true);d.getnew(setData);}}>
                Open full-screen dialog
            </Button>
            <Dialog fullScreen open={open} onClose={()=>setOpen(false)} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={()=>setOpen(false)} aria-label="Close">
                        <Icon>close</Icon>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Media
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Icon>search</Icon>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'Search' }}
                            onChange={(event)=>d.getSearch(event.target.value,setData)}
                        />
                    </div>
                    <SendMedia backData={addnew} />
                </Toolbar>
            </AppBar>
                <div className={classes.root}>
                    <GridList cellHeight={200} cols={4} className={classes.gridList}>
                        {data.map(tile => (
                            <GridListTile key={tile.id} className={classes.tile}>
                                <img src={tile.image} alt={tile.description} />
                                <GridListTileBar
                                    title={tile.description}
                                    actionIcon={
                                            <IconButton aria-label={`info about ${tile.description}`}
                                                        className={classes.icon}
                                            onClick={
                                                ()=>
                                                {
                                                    if(window.confirm("you sure but that?"))
                                                    {
                                                        d.getdelete(tile.id,datadelete);
                                                    }
                                                }
                                            }>
                                                <Icon>delete</Icon>
                                            </IconButton>
                                               }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Dialog>
        </div>
    )
}


