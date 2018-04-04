import React from 'react';
import { Link, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';

class App extends React.Component {
  render() {
    return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>

        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
      </div>
    )
  }
}

export default App;
