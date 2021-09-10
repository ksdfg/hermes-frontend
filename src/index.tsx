import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./tailwind.generated.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { Help } from "./pages/Help/Help";
import { Qr } from "./pages/Qr/Qr";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="flex flex-col w-full h-full">
          <Switch>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/qr">
              <Qr />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
