import {createStyles, makeStyles , Theme} from "@material-ui/core";



export const AddPostStyle = makeStyles(( theme:Theme) =>
    createStyles({
            toolbar:{
                backgroundColor: 'blue',
            },
            editor:{
                backgroundColor:theme.palette.background.paper,
                minHeight:200,
                borderRadius:4,
                border:"1px solid rgba(50,50,50,0.3)",
                paddingLeft:5,
                paddingRight:5,
            }
        }
    ),
);