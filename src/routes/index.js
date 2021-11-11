import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../components/pages/notfound";
import HomePage from "../components/pages/home";
import About from "../components/pages/about";
import Header from "../components/header";
import Contact from "../components/pages/contact";
import Projects from "../components/pages/projects";
import ProjectDetail from "../components/pages/projectDetails";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/project/:tab" component={ProjectDetail} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
