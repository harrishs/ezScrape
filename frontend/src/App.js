import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Landing from "./components/UI/Landing/Landing";
import Data from "./components/Form/Data/Data";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/input" exact component={Data} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
