import {
    createStyles,
    Divider,
    Drawer,
    Hidden,
    List,
    Theme,
    withStyles,
    WithStyles,
} from "@material-ui/core";
// tslint:disable-next-line:no-submodule-imports
import { ListItemProps } from "@material-ui/core/ListItem";
import React, { useState } from "react";

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
            marginTop: 26,
        },
        height: 40,
    },
    toolbar: {
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgb(33, 33, 33)",
        marginTop: 26,
    },
});

interface IResponsiveDrawerProps extends WithStyles<typeof styles> {
    children: Array<React.ReactElement<ListItemProps>>;
}

function ResponsiveDrawer(props: IResponsiveDrawerProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const { classes } = props;

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {props.children}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css" style={{ marginTop: 26 }} >
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css" style={{ marginTop: 26 }}>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default withStyles(styles)(ResponsiveDrawer);
