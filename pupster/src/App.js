import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
//import Wrapper from "./components/Wrapper";


const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/discover" component={Discover}/>
        <Route exact path="/search" component={Search}/>
        <Route render={() => <h1 className="text-center">You didn't match a route!</h1>} />
        </Switch>
      </div>
    </Router>
  )
};

export default App;
