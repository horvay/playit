import { createStyles, ListItem, ListItemIcon, ListItemText, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import ResponsiveSidebar from "../common/ResponsiveSidebar";
import { GAMES } from "../games";
import { useGlobalState } from "../state";

const styles = createStyles({
    gameIcon: {
        width: 40,
        height: 40,
    },
});

export interface ISidebarProps extends WithStyles<typeof styles> {
}

function Sidebar(props: ISidebarProps) {
    const [, updateGame] = useGlobalState("selectedGame");

    const handleClick = (id: number) => () => updateGame(GAMES.find(game => game.id === id) || GAMES[0]);

    return <ResponsiveSidebar>
        {GAMES.map((g) => (
            <ListItem onClick={handleClick(g.id)} button key={g.id}>
                <ListItemIcon><img className={props.classes.gameIcon} src={g.iconImg}></img></ListItemIcon>
                <ListItemText primary={g.name} />
            </ListItem>
        ))}
    </ResponsiveSidebar>;
}

export default withStyles(styles)(Sidebar);
