import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import RecordsPage from "./records/RecordsPage";
import ManageRecordpage from "./records/ManageRecordPage"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className = "container">
      <Switch>
        <Route exact path="/" component={RecordsPage} />
        <Route path="/record/:slug" component={ManageRecordpage} />
        <Route path="/record" component={ManageRecordpage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
