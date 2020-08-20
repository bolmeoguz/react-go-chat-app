import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login';
import Chat from "./components/Chat"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{backgroundColor:"#183a37",color:"white",height:"100vh"}}>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/chat">
            <Chat/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;