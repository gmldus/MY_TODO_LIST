import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (
    <Router>
       <Switch>
         <Route exact path="/" component={Counter} />
         <Route exact path="/todo" component={Todo} />
       </Switch>
    </Router>
  );
}

export default App;
