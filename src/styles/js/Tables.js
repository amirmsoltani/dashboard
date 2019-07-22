import { colors , createStyles , makeStyles , Theme } from "@material-ui/core";


// const drawerWidth = 240;
export const useStyles = makeStyles(( theme) =>
    createStyles({

        normal : {

        }
        ,
        publish:{
            color:'green',
        }
        ,
        draft:{
            color:'yellow',
        },
        block:{
            color:'red'
        }

    }),
);