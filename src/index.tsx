import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./tailwind.generated.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col w-full h-full">
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
