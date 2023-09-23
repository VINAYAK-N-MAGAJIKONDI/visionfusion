import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import Quote from './pages/quotes/quotes';
import TodoApp from './pages/features/features';
import Aboutus from './pages/dashboard/user';
import UserDashboard from './pages/dash/dash';

function App() {
  return (
    
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={TodoApp} />
        <Route path="/AboutUs" exact component={Aboutus} />
        <Route path="/Bliss" exact component={Quote} />
        <Route path="/Dashboard" exact component={UserDashboard} />
        


      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;

