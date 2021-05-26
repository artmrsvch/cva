import React from "react";
import { ButtonDefault, ButtonYellow } from "./components/Buttons/Buttons";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F7E64D",
    },
  },
});

export const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/kit" component={ButtonDefault} />
        <Route path="/button" component={ButtonYellow} />
        <Route exact path="/">
          Не найдено
        </Route>
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);
