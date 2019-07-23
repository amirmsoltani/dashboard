import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import StaticSection from "./components/StaticSection";
import Dashboard from './views/Dashboard';
import AddPost from './views/AddPost';
import Comments from './views/Comments';
import Posts from './views/Posts';
export default function App() {
  return (
      <StaticSection>
                <Route exact={true} path="/" component={()=><Redirect to="/Dashboard" />}/>
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Posts" component={Posts} />
                <Route path="/Comments" component={Comments} />
                <Route path="/AddPost" component={AddPost} />


      </StaticSection>
      );
}


