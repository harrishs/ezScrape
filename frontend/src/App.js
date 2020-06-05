import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Landing from "./components/UI/Landing/Landing";
import Add from "./components/Form/Add";
import Edit from "./components/Form/Edit";
import Card from "./components/Card/Card";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/add" exact component={Add} />
            <Route path="/" exact component={Landing} />
            <Route path="/url/:id" exact component={Card} />
            <Route path="/url/edit/:id" exact component={Edit} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
