import { AppBar, createStyles, Tab, Tabs, Theme, withStyles, WithStyles } from "@material-ui/core";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

interface ITabContainerProps {
    children: any;
}

export const TabContainer = ({ children }: ITabContainerProps) => (
    <div style={{ width: "100%", height: "100%", flex: 1 }}>
        {children}
    </div>
);

const styles = (_: Theme) => createStyles({
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: 1,
    },
});

interface ISwipeableTabsProps extends WithStyles<typeof styles> {
    children: JSX.Element[];
    tabNames: string[];
}

function SwipeableTabs(props: ISwipeableTabsProps) {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (_: any, value: number) => setTabIndex(value);
    const handleChangeIndex = (index: number) => setTabIndex(index);
    const { classes, children, tabNames } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    indicatorColor="primary"
                    fullWidth
                    style={{ backgroundColor: "rgb(33, 33, 33)" }}
                >
                    {tabNames.map((t) => <Tab label={t} />)}
                </Tabs>
            </AppBar>
            <SwipeableViews
                index={tabIndex}
                onChangeIndex={handleChangeIndex}
                style={{ flex: 1 }}
                allowTransparency={true}
                containerStyle={{ height: "100%", backgroundColor: "rgba(255, 255, 255, 0.0)" }}
            >
                {children}
            </SwipeableViews>
        </div>
    );
}

export default withStyles(styles)(SwipeableTabs);
