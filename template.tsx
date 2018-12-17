import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

const styles = createStyles({ root: {} });

export interface IComponentProps extends WithStyles<typeof styles> {
}

const Component = (props: IComponentProps) => {
    return <div className={props.classes.root}></div>;
};

export default withStyles(styles)(Component);
