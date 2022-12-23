import React from "react";
import Users from "./users/Users";
import Posts from "./posts/Posts";
import SingleUser from "./posts/SingleUser"
import SinglePost from "./users/SinglePost";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (<div className="container">
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/user/:userId">
            <SingleUser />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/post/:postId">
            <SinglePost />
          </Route>
        </Switch>
      </div>
    </Router>

  </div>);
}

export default App;