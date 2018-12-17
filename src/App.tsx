import React from "react";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import MainWindow from "./MainWindow";

const theme = createMuiTheme({
    palette: {
        type: "dark",
    },
    typography: { useNextVariants: true },
});

export default function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <MainWindow />
        </MuiThemeProvider>
    );
}
