import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import Main from "./Main";

const themeOptions = {};

const history = createBrowserHistory();

const theme = createMuiTheme({
  ...themeOptions,
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter history={history}>
        <Main />
      </HashRouter>
    </MuiThemeProvider>
  );
}

export default App;
