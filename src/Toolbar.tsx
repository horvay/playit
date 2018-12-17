import { Button, createStyles, Paper, Typography, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

const styles = createStyles({
    root: {
        height: 25,
        flex: 0,
        textAlign: "center",
        display: "flex",
    },
    title: {
        flex: 1,
    },
    close: {
        textAlign: "right",
        flex: 0,
        height: 20,
        width: 20,
        minHeight: 20,
        minWidth: 20,
        padding: 0,
        margin: 2
    },
});

export interface IToolbarProps extends WithStyles<typeof styles> {
}

function Toolbar(props: IToolbarProps) {
    return <Paper elevation={2} className={`${props.classes.root} draggable`} >
        <Typography className={props.classes.title} color="textPrimary">
            Just Play It!
        </Typography>
        <Button className={`${props.classes.close} undraggable`} size="small" variant="outlined" onClick={() => window.close()} >X</Button>
    </Paper>;
}

export default withStyles(styles)(Toolbar);
