import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: " #f2f2f2",
    white:"#fff",
  },
};

function App() {
  return (
    <div className="Box">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/starred">
              <Starred />
            </Route>

            <Route exact path="/show/:id">
              <Show />
            </Route>

            <Route>
              <div>Not found</div>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
