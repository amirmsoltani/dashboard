import React,{Component} from 'react';
import {Grid,TextField,List,ListItem} from '@material-ui/core';
import CKEditor from 'ckeditor4-react';
import {ListColumn} from "../components/LictColumn";
import '../styles/css/AddPost.css';
import SettingList from '../components/SettingsList';
import {MultiSelect,SingleSelect} from '../components/Selector';

export  default class AddPost extends Component{

    details = {};
    content = React.createRef();
    render() {


        const content = React.createRef();
        return (
            <Grid container spacing={2}>
                <Grid item md={8} >
                    <div className="list-item">
                        <TextField
                            className="title"
                            label="title"
                            id="title"
                            placeholder="Enter title post"/>
                    </div>
                    <CKEditor
                        type="classic"
                        ref={this.content}
                    />
                    <div className="list-item">
                    <MultiSelect name="tags" backData={this.details}/>
                    </div>
                    <div className="list-item">
                    <MultiSelect name="star" backData={this.details}/>
                    </div>
                    <div className="list-item">
                    <MultiSelect name="gener" backData={this.details}/>
                    </div>
                    <div className="list-item">
                    <ListColumn column={{name:"DownloadLink",column:["Link","Quality"]}}/>
                    </div>
                </Grid>
                <Grid item md={4} >
                    <SettingList />
                    <div className="list-item">
                    <SingleSelect name="actor" backData={this.details}/>
                    </div>
                    <div className="list-item">
                            <TextField
                                       className="year"
                                       label="publish"
                                       id="publish"
                                       placeholder="Enter publish year"/>
                    </div>


                </Grid>
            </Grid>
        )
    }
}

