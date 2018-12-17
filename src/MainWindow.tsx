import { createStyles, Paper, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import { GlobalStateProvider } from "./state";
import Toolbar from "./Toolbar";

const styles = createStyles({
    root: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
    },
    toolbar: {
        flex: 0,
        height: 25,
    },
    main: {
        display: "flex",
        width: "100%",
        marginTop: 1,
        flex: 1,
    },
    sidebar: {
        flex: 0,
        height: "100%",
        backgroundColor: "RGB(33, 33, 33)",
    },
    content: {
        flex: 1,
        height: "100%",
        display: "flex",
    }
});

export interface IMainWindowProps extends WithStyles<typeof styles> {
}

function MainWindow(props: IMainWindowProps) {

    return <div className={props.classes.root}>
        <div className={props.classes.toolbar}>
            <Toolbar />
        </div>
        <GlobalStateProvider>
            <div className={props.classes.main}>
                <Paper elevation={3} className={props.classes.sidebar}>
                    <Sidebar />
                </Paper>
                <div className={props.classes.content}>
                    <Content />
                </div>
            </div>
        </GlobalStateProvider>
    </div>;
}

export default withStyles(styles)(MainWindow);
