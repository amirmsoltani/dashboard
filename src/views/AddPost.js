import React,{Component} from 'react';
import {Grid,Chip} from '@material-ui/core';
import CKEditor from 'ckeditor4-react';
import {useTheme} from "@material-ui/core/styles";
import {AddPostStyle} from '../styles/js/AddPostStyle';
import '../styles/css/AddPost.css';
import SettingList from '../components/SettingsList';

export  default class AddPost extends Component{

    state={tags:[[1,'salam'],[2,'khobi'],[3,'ok shod']]};
    content = React.createRef();
    data={content:""};
    render() {

        let {tags} = this.state;
        return (
            <Grid container spacing={2}>
                <Grid item md={8} >
                    <CKEditor
                        type="classic"
                        ref={this.content}
                    />
                    <div className="tags">
                        {tags.map((tag,index)=>
                            <Chip onDelete={()=>{tags.splice(index, 1);this.setState(tags)}}
                                  label={tag[1]}
                                  style={{margin: 5}}
                                  key={index}
                            />
                        )}

                    </div>
                </Grid>
                <Grid item md={4} >
                    <SettingList />
                </Grid>
            </Grid>
        )
    }
}

