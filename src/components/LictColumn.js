import {
    Table,
    createStyles,
    Fab,
    TableBody,
    Icon,
    FormLabel,
    makeStyles,
    TableCell,
    Select,
    Theme
} from "@material-ui/core";
import {List,ListItem,TextField,ListSubheader} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{

        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            //width: 200,
        },
        feb:{
            width: 40,
            height:40,
            marginLeft: 5
        },
        td:{

        },
        listitem:{
            justifyContent: 'space-between'
        }

    }),
);
let data=[];
export function ListColumn(props) {
    const [Data,setData] = React.useState([]);
    let   Field = [];
    const classes = useStyles();
    const {column} = props;
    const width = 92/column.column.length;
    return(<List subheader={<ListSubheader>{column.name}</ListSubheader>} className={classes.root}>
        <ListItem className={classes.head}>
            {
            column.column.map((obj,index)=>{
                Field.push("");
                return <TextField key={obj}
                           className={classes.textField}
                           label={obj}
                           id={obj}
                           placeholder={`Enter ${obj}`}
                           style={{width:`${width}%`}}
                           onFocus={event=>Field[index]=event.target}
                />
            }
            )
            }
            <Fab color="primary" aria-label="Add"
                 onClick={()=>{
                     data.push(Field.map((item,index)=>{const d = Field[index].value;
                     Field[index].value="";
                     return d}));
                     setData(data.slice());
                 }
                 }
            className={classes.feb}>
                <Icon>add</Icon>
            </Fab>
        </ListItem>




            {Data.map((row,index) => (
                <ListItem key={index} className={classes.listitem} >
                    {
                        row.map((item, index) =>
                            <div key={index} className="td" style={{width:90/row.length+"%"}}>
                                {item}
                            </div>
                        )

                    }
                    <Fab color="secondary" aria-label="Delete" className={classes.feb}
                    onClick={()=>{
                        data.splice(index,1);
                        setData(data);
                    }}>

                        <Icon >block</Icon>
                    </Fab>
                    </ListItem>
                ))}







    </List>)

}