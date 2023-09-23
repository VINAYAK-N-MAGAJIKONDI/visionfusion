import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer"


function App() {
  return (
    
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Header} />

      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;

