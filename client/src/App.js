import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
// ///////////////////////////
import Index from './View/index.js';
import Dashboard from './View/dashboard.js';

class App extends React.Component{
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Index} exact/>
             <Route path="/dashboard" component={Dashboard}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
