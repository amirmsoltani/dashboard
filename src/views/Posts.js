import React,{Component} from 'react';
import MaterialTableDemo from "../components/Taable";
import axios from 'axios';


export  default class Name extends Component
{
    state = {posts:[]};
    componentDidMount () {
        axios.get("http://api.thut.ir/posts/")
             .then(response=>{
                 let  posts = response.data;
                 this.setState({posts});

             })
             .catch(error=>{
                 console.log(error);
             })
    }
    render() {
        const {posts } = this.state;
        return(
           <div>
                <MaterialTableDemo rows={posts}/>
           </div>
        );
    }
}