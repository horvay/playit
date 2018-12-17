import { createStyles, Paper, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import SwipeableTabs, { TabContainer } from "../common/SwipeableTabs";
import { useGlobalState } from "../state";
import InfoTab from "./InfoTab";

const styles = createStyles({
    root: {
        padding: 0,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "20px 50px",
    }
});

export interface IContentProps extends WithStyles<typeof styles> {
}

function Content(props: IContentProps) {
    const [currentGame] = useGlobalState("selectedGame");

    return <Paper className={props.classes.root} style={{ backgroundImage: `url(${currentGame.backgroundImg})`, backgroundColor: currentGame.backgroundColor }}>
        <SwipeableTabs tabNames={["Info", "News", "Change Log"]}>
            <InfoTab />
            <TabContainer key={1} >Item Two</TabContainer>
            <TabContainer key={2} >Item Three</TabContainer>
        </SwipeableTabs>
    </Paper>;
}

export default withStyles(styles)(Content);
