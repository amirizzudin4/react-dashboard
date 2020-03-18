import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { createMuiTheme } from "@material-ui/core";

function CMSThemeProvider({ children, theme }) {
    const cmsTheme = createMuiTheme({
        palette: {
            primary: {
                main: "#24C6DC"
            },
            secondary: {
                main: "#514A9D"
            }
        },
        ...theme
    });
    return <ThemeProvider theme={cmsTheme}>{children}</ThemeProvider>;
}

export default CMSThemeProvider;
