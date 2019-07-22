import React,{Component} from 'react';
import {Grid,Container} from '@material-ui/core';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export  default class AddPost extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content: EditorState.createEmpty(),
        };

    }

    render() {
        const {} = this.state;
        return (
            <Grid container>
                <Grid item md={8}>
                    <Editor

                    />
                </Grid>
                <Grid item md={4}>
                </Grid>
            </Grid>
        )
    }
}