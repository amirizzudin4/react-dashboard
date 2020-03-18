import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { BorosThemeProvider } from "boros";
import { UserProvider } from "./Context/UserContext";
import { CssBaseline } from "@material-ui/core";
import CMSThemeProvider from "./Components/Theme";
import * as serviceWorker from "./serviceWorker";

function Root() {
    return (
        <UserProvider>
            <BorosThemeProvider>
                <CMSThemeProvider>
                    <CssBaseline />
                    <App />
                </CMSThemeProvider>
            </BorosThemeProvider>
        </UserProvider>
    );
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
