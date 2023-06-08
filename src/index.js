import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';
import {store} from './store/store' 

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

// import RTLLayout from "layouts/RTL.js";

ReactDOM.render(
  <Provider store={store}> 
     <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      {/* <Route path={`/rtl`} component={RTLLayout} /> */}
      {/* <Redirect from={`/`} to="/admin/user/dashboard" /> */}
    </Switch>
  </HashRouter>
  </Provider>,
  document.getElementById("root")
);
