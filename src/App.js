import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Result from "./components/pages/Result";
import "./app.css";
import { Grommet } from "grommet";

const theme = {
  global: {
    control: {
      border: {
        radius: "24px",
      },
    },
    colors: {
      brand: "#4682fa",
      active: "#4682fa",
      selected: "#4682fa",
      focus: "inherit",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  button: {
    padding: {
      vertical: "20px",
    },
    border: {
      radius: "40px",
    },
    color: "white",
  },
};

const App = () => {
  return (
    <Grommet theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Result" exact component={Result} />
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
