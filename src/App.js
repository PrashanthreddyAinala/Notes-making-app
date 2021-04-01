import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import MainPage from "./components/MainPage";
import ViewNote from "./components/viewNotes/ViewNote";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import Edit from "./components/Edit/Edit";
import "./styles.css";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/ViewNote">
            <ViewNote />
          </Route>
          <Route path="/AddNote">
            <AddNote />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
      <Edit />
    </React.Fragment>
  );
}
